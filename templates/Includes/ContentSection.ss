<% include ColHolder_A %>

    <% include Col1_A NumberOfColumns=six, OffSet=offset-by-four %>
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
