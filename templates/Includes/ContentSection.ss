<div class="$NumberOfColumns" id="MainDetails">
<%-- <% include ColHolder_A NumberOfColumns=two %> --%>

    <% include Col1_A %>
            <% include ContentSectionAll %>
    <% include Col1_B %>

    <% if $hasSideBar %>
    <% include Col2_A %>
            <% include SidebarImage %>
            <% include Sidebar %>
    <% include Col2_B %>
    <% end_if %>



    <% if $SecondColumn %>
    <% include Col3_A %>
            $SecondColumn
    <% include Col3_B %>
    <% end_if %>

<% include ColHolder_B %>
