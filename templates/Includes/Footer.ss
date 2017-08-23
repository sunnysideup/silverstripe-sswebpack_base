<footer id="footer">

    <div class="row">

        <div id="FooterContactInfo" class="footer-col typography">
            <ul>
                <li class="email">
                </li>
                <li class="call">
                </li>
            </ul>
        </div>


        <div id="TopLevelMenu" class="footer-col typography">
            <ul>
        <% loop Menu(1) %>
                <li><a href="$Link" class="$LinkingMode">$MenuTitle</a></li>
        <% end_loop %>
            </ul>
        </div>

        <div id="FooterRecentlyUpdated" class="footer-col typography">


            <% if $InThisSection %>
            <h3>In this section</h3>
            <ul>
                <% loop $InThisSection %>
                <li><a href="$Link" class="$LinkingMode">$MenuTitle</a></li>
                <% end_loop %>
            </ul>
            <% end_if %>

            <% if $AlsoSee %>
            <h3>Also see</h3>
            <ul>
                <% loop $AlsoSee %>
                <li><a href="$Link" class="$LinkingMode">$MenuTitle</a></li>
                <% end_loop %>
            </ul>
            <% end_if %>

            <h3>Recently Updated</h3>
            <ul>
        <% loop $RecentlyUpdated %>
                <li><a href="$Link" class="$LinkingMode">$MenuTitle</a></li>
        <% end_loop %>
            </ul>

        </div>

    </div>


    <div id="FooterCopyrightMessage">$SiteConfig.CopyrightNotice</div><br />

</footer>
