import React from 'react';
import Dashboard from '../components/dashboard/Dashboard'

import SidebarWrapper from '../components/dashboard/sidebar/SidebarWrapper'
import Sidemenubar from '../components/dashboard/sidebar/Sidemenubar'
import SidemenubarHeader from '../components/dashboard/sidebar/SidemenubarHeader'
import SidebarDropdown from '../components/dashboard/sidebar/SidebarDropdown'
import SidebarSubmenu from '../components/dashboard/sidebar/SidebarSubmenu'
import SidebarMenuitem from '../components/dashboard/sidebar/SidebarMenuitem'
import SidebarHeader from '../components/dashboard/sidebar/SidebarHeader'
import SidebarContent from '../components/dashboard/sidebar/SidebarContent'

import PageContentWrapper from '../components/dashboard/PageContentWrapper'
import Topbar from '../components/dashboard/topbar/Topbar'
import ToolbarIcon from '../components/dashboard/topbar/ToolbarIcon'
import ToolbarItem from '../components/dashboard/topbar/ToolbarItem'
import ToolbarDropdown from '../components/dashboard/topbar/ToolbarDropdown'
import ToolbarDropdownHeader from '../components/dashboard/topbar/ToolbarDropdownHeader'
import ToolbarDropdownFooter from '../components/dashboard/topbar/ToolbarDropdownFooter'
import ToolbarDropdownFooterIcon from '../components/dashboard/topbar/ToolbarDropdownFooterIcon'
import ToolbarDropdownContainer from '../components/dashboard/topbar/ToolbarDropdownContainer'
import ToolbarDropdownItem from '../components/dashboard/topbar/ToolbarDropdownItem'


class DashboardPage extends React.Component {

    render() {

        return (
            <Dashboard>
                <SidebarWrapper>
                    <SidebarHeader>Admin UI</SidebarHeader>
                    <SidebarContent>
                        <Sidemenubar>
                            <SidemenubarHeader>General</SidemenubarHeader>

                            <SidebarDropdown title="Dashboard" font="fa fa-desktop"
                                badge={{ label: "New", type: "badge-warning" }}>

                                <SidebarSubmenu>
                                    <SidebarMenuitem label="Dashboard 1" badge={{ label: "Pro", type: "badge-success" }} />
                                    <SidebarMenuitem label="Dashboard 2" />
                                    <SidebarMenuitem label="Dashboard 3" />
                                </SidebarSubmenu>
                            </SidebarDropdown>


                            <SidebarDropdown title="E-commerce" font="fa fa-shopping-cart"
                                badge={{ label: "3", type: "badge-danger" }}>
                                <SidebarSubmenu>
                                    <SidebarMenuitem label="Products" />
                                    <SidebarMenuitem label="Orders" />
                                    <SidebarMenuitem label="Credit cart" />
                                </SidebarSubmenu>
                            </SidebarDropdown>

                            <SidebarDropdown title="Components" font="far fa-gem">
                                <SidebarSubmenu>
                                    <SidebarMenuitem label="General" />
                                    <SidebarMenuitem label="Panels" />
                                    <SidebarMenuitem label="Tables" />
                                    <SidebarMenuitem label="Icons" />
                                    <SidebarMenuitem label="Forms" />
                                </SidebarSubmenu>
                            </SidebarDropdown>

                            <SidebarDropdown title="Charts" font="fa fa-chart-line">
                                <SidebarSubmenu>
                                    <SidebarMenuitem label="Pie chart" />
                                    <SidebarMenuitem label="Line chart" />
                                    <SidebarMenuitem label="Bar chart" />
                                    <SidebarMenuitem label="Histogram" />
                                </SidebarSubmenu>
                            </SidebarDropdown>

                            <SidemenubarHeader>Charts</SidemenubarHeader>

                            <SidebarMenuitem label="Documentation" font="fa fa-book" badge={{ label: "Beta", type: "badge-primary" }} />
                            <SidebarMenuitem label="Calendar" font="fa fa-calendar" />
                            <SidebarMenuitem label="Examples" font="fa fa-folder" />

                        </Sidemenubar>

                    </SidebarContent>

                </SidebarWrapper>

                <PageContentWrapper>
                    <Topbar>
                        <ToolbarIcon align="mr-auto">
                            <ToolbarItem icon="fa fa-search" />
                        </ToolbarIcon>

                        <ToolbarIcon align="navbar-right">

                            <ToolbarDropdown id="dropdownTopMenuNotification" icon="fa fa-bell" badge={{ label: "3", type: "badge-danger up" }}>

                                <ToolbarDropdownHeader title="Notifications" badge={{ label: "New 3", type: "badge-danger up" }} />

                                <ToolbarDropdownContainer>

                                    <ToolbarDropdownItem icon="icon wb wb-order" color="bg-red-600"
                                        heading="A new order has been placed"
                                        meta="5 hours ago" />
                                    <ToolbarDropdownItem icon="icon wb wb-user" color="bg-green-600"
                                        heading="Completed the task"
                                        meta="2 days ago" />
                                    <ToolbarDropdownItem icon="icon wb wb-settings" color="bg-red-600"
                                        heading="Settings updated"
                                        meta="2 days ago" />
                                    <ToolbarDropdownItem icon="icon wb wb-calendar" color="bg-blue-600"
                                        heading="Event started"
                                        meta="3 days ago" />
                                    <ToolbarDropdownItem icon="icon wb wb-chat" color="bg-orange-600"
                                        heading="Message received"
                                        meta="3 days ago" />

                                </ToolbarDropdownContainer>

                                <ToolbarDropdownFooter label="All notifications">
                                    <ToolbarDropdownFooterIcon icon="fa fa-cog" />
                                </ToolbarDropdownFooter>

                            </ToolbarDropdown>

                        </ToolbarIcon>

                    </Topbar>
                </PageContentWrapper>

            </Dashboard>);
    }
}

export default DashboardPage;