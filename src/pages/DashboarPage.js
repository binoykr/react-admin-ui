import React from 'react';
import Dashboard from '../components/dashboard/Dashboard'
import Sidemenubar from '../components/dashboard/Sidemenubar'
import SidebarDropdown from '../components/dashboard/SidebarDropdown'
import SidebarMenuitem from '../components/dashboard/SidebarMenuitem'
import SidebarHeader from '../components/dashboard/SidebarHeader'
import SidebarContent from '../components/dashboard/SidebarContent'
import SidebarFooter from '../components/dashboard/SidebarFooter'
import SidebarFooterItem from '../components/dashboard/SidebarFooterItem'


class DashboardPage extends React.Component {

    render() {
        var userInfo = {
            firstname: "Binoy",
            lastname: "K. R",
            designation: "Developer",
            status: "Online"
        }

        return (
            <Dashboard>
                <SidebarContent title="ADMIN UI" userInfo={userInfo}>
                    <Sidemenubar>
                        <SidebarDropdown title="Dashboard" font="fa fa-tachometer-alt"
                            badge={{ label: "New", type: "badge-warning" }}>

                            <SidebarMenuitem label="Dashboard 1" badge={{ label: "Pro", type: "badge-success" }} />
                            <SidebarMenuitem label="Dashboard 2" />
                            <SidebarMenuitem label="Dashboard 3" />

                        </SidebarDropdown>

                        <SidebarDropdown title="E-commerce" font="fa fa-shopping-cart"
                            badge={{ label: "3", type: "badge-danger" }}>

                            <SidebarMenuitem label="Products" />
                            <SidebarMenuitem label="Orders" />
                            <SidebarMenuitem label="Credit cart" />

                        </SidebarDropdown>

                        <SidebarDropdown title="Components" font="far fa-gem">

                            <SidebarMenuitem label="General" />
                            <SidebarMenuitem label="Panels" />
                            <SidebarMenuitem label="Tables" />
                            <SidebarMenuitem label="Icons" />
                            <SidebarMenuitem label="Forms" />

                        </SidebarDropdown>

                        <SidebarDropdown title="Charts" font="fa fa-chart-line">

                            <SidebarMenuitem label="Pie chart" />
                            <SidebarMenuitem label="Line chart" />
                            <SidebarMenuitem label="Bar chart" />
                            <SidebarMenuitem label="Histogram" />

                        </SidebarDropdown>

                        <SidebarHeader title="Extra" />

                        <SidebarMenuitem label="Documentation" font="fa fa-book" badge={{ label: "Beta", type: "badge-primary" }} />
                        <SidebarMenuitem label="Calendar" font="fa fa-calendar" />
                        <SidebarMenuitem label="Examples" font="fa fa-folder" />

                    </Sidemenubar>
                </SidebarContent>


                <SidebarFooter>
                    <SidebarFooterItem font="fa fa-bell" badge={{ label: "1", type: "badge-warning" }} />
                    <SidebarFooterItem font="fa fa-envelope" badge={{ label: "7", type: "badge-success" }} />
                    <SidebarFooterItem font="fa fa-cog" sonar={true} />
                    <SidebarFooterItem font="fa fa-power-off" />

                </SidebarFooter>
            </Dashboard>);
    }
}

export default DashboardPage;