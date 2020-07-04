import React from 'react';

import PageContent from '../components/dashboard/PageContent'
import Row from '../components/dashboard/Row'

import Table from '../components/table/Table'
import TableHead from '../components/table/TableHead'
import TableBody from '../components/table/TableBody'
import TableTr from '../components/table/TableTr'
import TableTd from '../components/table/TableTd'
import TableTh from '../components/table/TableTh'

import PagePanel from '../components/dashboard/panel/PagePanel'
import PagePanelBody from '../components/dashboard/panel/PagePanelBody'
import PagePanelHead from '../components/dashboard/panel/PagePanelHead'
import PagePanelIcon from '../components/dashboard/panel/PagePanelIcon'

import InfoBox from '../components/dashboard/InfoBox'
import InfoBoxItem from '../components/dashboard/InfoBoxItem'

import PageTabPanel from '../components/dashboard/panel/PageTabPanel'
import PageTabHead from '../components/dashboard/panel/PageTabHead'
import PageTab from '../components/dashboard/panel/PageTab'
import PageTabContent from '../components/dashboard/panel/PageTabContent'

import ProgressBar from '../components/ProgressBar'
import Widget from '../components/dashboard/Widget'

import TabPage1 from './tabs/TabPage1'
import TabPage2 from './tabs/TabPage2'
import TabPage3 from './tabs/TabPage3'

class DashboardPage extends React.Component {

    render() {


        return (
            <PageContent>
                <Row>

                    <Widget icon="fa fa-envelope" numcount="48" title="New messages" subtitle="In your mailbox" cols="col-xxl-7 col-lg-3" />
                    <Widget icon="fa fa-user" numcount="356" title="REGISTRED USERS" subtitle="On your website" cols="col-xxl-7 col-lg-3" />

                </Row>
                <Row>
                    <PagePanel cols="col-xxl-4 col-lg-4">
                        <PagePanelHead title="Application">
                            <PagePanelIcon icon="fa fa-refresh"></PagePanelIcon>
                        </PagePanelHead>
                        <PagePanelBody>
                            <InfoBox title="Application Info" label={{ value: "UP", class: "label-success" }}>
                                <InfoBoxItem label="ID">1001</InfoBoxItem>
                                <InfoBoxItem label="Application">my-service-1</InfoBoxItem>
                                <InfoBoxItem label="Last Updated">Saturday, 4 July 2020</InfoBoxItem>
                                <InfoBoxItem label="Build">

                                    <p class="m-0">Artifact: my-service-app-1</p>
                                    <p class="m-0">Name: My Service Application 1</p>
                                    <p class="m-0">Group: com.developerhelperhub.sample</p>
                                    <p class="m-0">Version: 1.0.0</p>
                                    <p class="m-0">Time: Saturday, 4 July 2020 10:54 pm</p>

                                </InfoBoxItem>
                            </InfoBox>
                        </PagePanelBody>
                    </PagePanel>
                    <PageTabPanel cols="col-xxl-8 col-lg-8" >
                        <PageTab id="applicationInfoTab">
                            <PageTabHead id="tab1-tab" active="true" href="#tab1" controls="tab1" selected="true" title="Tab-1"></PageTabHead>
                            <PageTabHead id="tab2-tab" href="#tab2" controls="tab2" title="Tab-2"></PageTabHead>
                            <PageTabHead id="tab3-tab" href="#tab3" controls="tab3" title="Tab-3"></PageTabHead>
                        </PageTab>

                        <PageTabContent id="applicationInfoTabContent">
                            <TabPage1></TabPage1>
                            <TabPage2></TabPage2>
                            <TabPage3></TabPage3>
                        </PageTabContent>
                    </PageTabPanel>
                </Row>
                <Row>
                    <PagePanel cols="col-xxl-7 col-lg-4">
                        <PagePanelHead title="Users Activity">
                            <PagePanelIcon icon="fa fa-refresh"></PagePanelIcon>
                        </PagePanelHead>
                        <PagePanelBody height={{ value: 200, unit: "px" }} id="dashboard-bar-1">
                        </PagePanelBody>
                    </PagePanel>

                    <PagePanel cols="col-xxl-7 col-lg-4">
                        <PagePanelHead title="Visitors">
                            <PagePanelIcon icon="fa fa-refresh"></PagePanelIcon>
                        </PagePanelHead>
                        <PagePanelBody height={{ value: 200, unit: "px" }} id="dashboard-donut-1">
                        </PagePanelBody>
                    </PagePanel>

                    <PagePanel cols="col-xxl-7 col-lg-4" height={{ value: 200, unit: "px" }}>
                        <PagePanelHead title="Sales Events">
                            <PagePanelIcon icon="fa fa-refresh"></PagePanelIcon>
                        </PagePanelHead>
                        <PagePanelBody height={{ value: 200, unit: "px" }} id="dashboard-line-1">
                        </PagePanelBody>
                    </PagePanel>
                </Row>
                <Row>
                    <PagePanel cols="col-xxl-7 col-lg-12" >
                        <PagePanelHead title="Projects">
                            <PagePanelIcon icon="fa fa-refresh"></PagePanelIcon>
                        </PagePanelHead>
                        <PagePanelBody>
                            <Table>
                                <TableHead>
                                    <TableTr>
                                        <TableTh width="50%">Project</TableTh>
                                        <TableTh width="20%">Status</TableTh>
                                        <TableTh width="30%">Activity</TableTh>
                                    </TableTr>
                                </TableHead>
                                <TableBody>
                                    <TableTr>
                                        <TableTd>Admin</TableTd>
                                        <TableTd value={{ type: "label", label: "label-danger" }}>Developing</TableTd>
                                        <TableTd>
                                            <ProgressBar style="progress-bar-danger progress-bar-striped" percentage="40%">40%</ProgressBar>
                                        </TableTd>
                                    </TableTr>
                                    <TableTr>
                                        <TableTd>Gemini</TableTd>
                                        <TableTd value={{ type: "label", label: "label-warning" }}>Updating</TableTd>
                                        <TableTd>
                                            <ProgressBar style="progress-bar-warning progress-bar-striped" percentage="50%">50%</ProgressBar>
                                        </TableTd>
                                    </TableTr>
                                    <TableTr>
                                        <TableTd>Taurus</TableTd>
                                        <TableTd value={{ type: "label", label: "label-warning" }}>Updating</TableTd>
                                        <TableTd>
                                            <ProgressBar style="progress-bar-warning progress-bar-striped" percentage="80%">80%</ProgressBar>
                                        </TableTd>
                                    </TableTr>
                                    <TableTr>
                                        <TableTd>Taurus</TableTd>
                                        <TableTd value={{ type: "label", label: "label-success" }}>Support</TableTd>
                                        <TableTd>
                                            <ProgressBar style="progress-bar-success progress-bar-striped" percentage="100%">100%</ProgressBar>
                                        </TableTd>
                                    </TableTr>
                                    <TableTr>
                                        <TableTd>Virgo</TableTd>
                                        <TableTd value={{ type: "label", label: "label-info" }}>Holding</TableTd>

                                        <TableTd>
                                            <ProgressBar style="progress-bar-info progress-bar-striped" percentage="90%">90%</ProgressBar>
                                        </TableTd>
                                    </TableTr>

                                </TableBody>
                            </Table>
                        </PagePanelBody>
                    </PagePanel>
                </Row>

            </PageContent>
        );

    }
}

export default DashboardPage;