<% include ColHolder_A %>
    <% if $hasSideBar %>
        <% include Col1_A NumberOfColumns=seven %>
    <% else %>
        <% include Col1_A NumberOfColumns=six, Offset=three %>
    <% end_if %>

        <% include ContentSectionInner %>
        <% include FormSection %>
    <% include Col1_B %>

    <% if $hasSideBar %>
    <% include Col2_A NumberOfColumns=five %>
            <% include SidebarImage %>
            <% include Sidebar %>
            <% include FormSection %>
    <% include Col2_B %>
    <% end_if %>



<% include ColHolder_B %>
