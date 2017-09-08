<% include ColHolder_A %>

    <% if $hasSideBar %>
    <% include Col1_A NumberOfColumns=six %>
    <% else %>
    <% include Col1_A NumberOfColumns=six,four %>
    <% end_if %>
            <% include ContentSectionInner %>
    <% include Col1_B %>

    <% if $hasSideBar %>
    <% include Col2_A NumberOfColumns=five %>
            <% include SidebarImage %>
            <% include Sidebar %>
            <% include FormSection %>
    <% include Col2_B %>
    <% end_if %>



<% include ColHolder_B %>
