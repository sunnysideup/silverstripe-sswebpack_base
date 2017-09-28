<% if $ParentID %><div id="Breadcrumbs" class="typography"><% if IsNotHome %><a href="/">Home</a> &raquo; <% end_if %> $Breadcrumbs</div>
<% else %>
    <div id="Breadcrumbs" class="typography">
            <% if CurrentMember %>
            <a href="/Security/logout" class="logout">log-out</a>
            <% else %>
            <a href="/Security/login" class="login">log in</a>
            <% end_if %>
    </div>
<% end_if %>
