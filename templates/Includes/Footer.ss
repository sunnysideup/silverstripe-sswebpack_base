<footer class="typography" id="footer">

    <div id="FooterContactInfo" class="footer-col">
        <ul>
            <li class="email">
            </li>
            <li class="call">
            </li>
        </ul>
    </div>


    <div id="TopLevelMenu" class="footer-col">
        <ul>
    <% loop Menu(1) %>
            <li><a href="$Link" class="$LinkingMode">$MenuTitle</a></li>
    <% end_loop %>
        </ul>
    </div>

    <div id="FooterRecentlyUpdated" class="footer-col">
        <p>Recently Updated</p>
        <ul>
    <% loop $RecentlyUpdated %>
            <li><a href="$Link" class="$LinkingMode">$MenuTitle</a></li>
    <% end_loop %>
        </ul>

        <% if $InThisSection %>
        <p>In this section</p>
        <ul>
            <% loop $InThisSection %>
            <li><a href="$Link" class="$LinkingMode">$MenuTitle</a></li>
            <% end_loop %>
        </ul>
        <% end_if %>

        <% if $AlsoSee %>
        <p>Also see ...</p>
        <ul>
            <% loop $AlsoSee %>
            <li><a href="$Link" class="$LinkingMode">$MenuTitle</a></li>
            <% end_loop %>
        </ul>
        <% end_if %>

    </div>




    <div id="FooterCopyrightMessage">$SiteConfig.CopyrightNotice</div><br />

</footer>
