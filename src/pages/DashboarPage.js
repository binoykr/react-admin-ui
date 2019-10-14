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

            </Dashboard>);
    }
}

export default DashboardPage;