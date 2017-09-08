
jQuery(document).ready(
    function() {
        //must do first!
        basics.init();

    }
);

/*
 *@author nicolaas[at]sunnysideup.co.nz
 *
 **/


var basics = {

    windowWidth: 0,

    windowHeight: 0,

    didScroll: false,

    runningScroll: false,

    lastScrollTop: 0,

    timeout: null,

    resizeToTimeOut: null,

    headerHeight: 0,

    resizeItems: [
        {selector: '.home-button', minHeight: 32, minWidth: 126.5},
        {selector: '.menu-button', minHeight: 32, minWidth: 32},
        {selector: 'header', minHeight: 62}
    ],

    init : function() {
        basics.windowResizeListener();
        basics.scrollListener();
        basics.menuButtonListener();
        basics.menuExpandListener();
        basics.setLargeImageSize();
        //do last ...
        basics.setDefaultWidthAndHeight();
        basics.scrollClickListener();
        jQuery(window).scroll();
        //redo when window is resized
    },

    windowResizeListener: function()
    {
        jQuery(window).resize(
            function() {
                if(basics.resizeToTimeOut) {
                    clearTimeout(basics.resizeToTimeOut);
                }
                basics.resizeToTimeOut = setTimeout(
                    function() {
                        basics.doWindowResize();
                    },
                    50
                );
            }
        );
    },

    scrollListener: function()
    {
        jQuery(window).scroll(
            function(event){
                basics.didScroll = true;
                if(basics.timeout !== null) {
                    window.clearTimeout(basics.timeout);
                }
                if(basics.runningScroll === false) {
                    basics.timeout = window.setTimeout(
                        function() {
                            basics.doScroll();
                        },
                        10
                    );
                }
            }
        );
    },

    menuButtonListener:function(){
        jQuery(".menu-button").on(
            "click",
            function() {
                jQuery("body").addClass("has-menu-overlay");
                jQuery(this)
                    .addClass('open')
                    .removeClass('close');
                return false;
            }
        );
        jQuery(".close-menu").on(
            "click",
            function() {
                jQuery("body").removeClass("has-menu-overlay");
                jQuery(this)
                    .removeClass('close')
                    .addClass('nav-up');
                return false;
            }
        );
        // Hide Header on on scroll down
    },

    menuExpandListener: function(){
        jQuery('#main-menu ul').find('li').each(
            function(i, el) {
                el = jQuery(el);
                if(el.children('ul').length !== 0) {
                    if(el.hasClass('current') || el.hasClass('section')) {
                        el.addClass('opened');
                    } else {
                        el.addClass('closed');
                    }
                    el.prepend('<span class="open"><i class="material-icons">expand_more</i></span><span class="close"><i class="material-icons">expand_less</i></span>');
                }
            }
        );
        jQuery('#main-menu').on(
            'click',
            'span.open',
            function(e) {
                event.preventDefault();
                event.stopPropagation();
                jQuery(this).parent('li')
                    .addClass('opened')
                    .removeClass('closed');
                return false;
            }
        )
        jQuery('#main-menu').on(
            'click',
            'span.close',
            function(e) {
                event.preventDefault();
                event.stopPropagation();
                jQuery(this).parent('li')
                    .addClass('closed')
                    .removeClass('opened');
                return false;
            }
        )
    },


    /**
     * do stuff
     *
     */

     doWindowResize: function()
     {
        basics.setLargeImageSize();
         //do last
     },


     doScroll: function () {
         basics.runningScroll = true;
         var scrollHeight = jQuery(window).scrollTop();
         if(parseInt(scrollHeight) > parseInt(basics.headerHeight)) {
             jQuery('body')
                .addClass('scrolled')
                .removeClass('not-scrolled');
         } else {
             jQuery('body')
                .addClass('not-scrolled')
                .removeClass('scrolled');
         }
         var myScrollHeight = 0;
         for( var i = 0; i < basics.resizeItems.length; i++) {
             var item = basics.resizeItems[i];
             var jQitem = jQuery(item.selector);
             if(typeof item.multiplier !== 'undefined' && item.multiplier) {
                 myScrollHeight = item.multiplier * scrollHeight;
             } else {
                 myScrollHeight = scrollHeight;
             }
             if(typeof item.minHeight !== 'undefined') {
                 var height = basics.resizeItems[i].height - myScrollHeight;
                 if(height < item.minHeight) {
                     height = item.minHeight;
                 }
                 jQitem.height(height + 'px');
             }
             if(typeof item.minWidth !== 'undefined') {
                 var width = basics.resizeItems[i].width - myScrollHeight;
                 if(width < item.minWidth) {
                     width = item.minWidth;
                 }
                 jQitem.width(width + 'px');
             }
         }
         basics.runningScroll = false;
     },

    getWindowSizing: function(){
        basics.windowWidth = window.innerWidth;
        basics.windowHeight = window.innerHeight;
    },

    /**
     * set the width and the height of various items
     */
    setDefaultWidthAndHeight: function()
    {
        basics.headerHeight = jQuery('header').height();
        for( var i = 0; i < basics.resizeItems.length; i++) {
            var item = basics.resizeItems[i];
            var jQitem = jQuery(item.selector);
            basics.resizeItems[i].width = jQitem.width();
            basics.resizeItems[i].height = jQitem.height();
        }
    },


    setLargeImageSize: function()
    {
        jQuery('figure.large-image').each(
            function(i, el) {
                basics.getWindowSizing();
                var height = basics.windowHeight - jQuery('header').height();
                jQuery(el).height(height + 'px');
            }
        );
    },

    scrollClickListener: function()
    {
        jQuery('figure.large-image').on(
            'click',
            function(event){
                var scrollTopPixels = jQuery("#content-area").offset().top - 62;
                jQuery('html, body').animate(
                    {
                        scrollTop: scrollTopPixels
                    },
                    200
                );
            }
        );
        jQuery('figure.large-image a.button').on(
            'click',
            function(event){
                event.stopPropagation();
                return true;
            }
        );
        jQuery('header').on(
            'click',
            function(event){
                jQuery('html, body').animate(
                    {
                        scrollTop: 0
                    },
                    200
                );
            }
        );
    }


};
