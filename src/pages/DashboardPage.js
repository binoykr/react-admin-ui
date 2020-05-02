
import React from 'react';

import PagePanel from '../components/dashboard/PagePanel'
import PageContent from '../components/dashboard/PageContent'
import Row from '../components/dashboard/Row'

import Table from '../components/table/Table'
import TableHead from '../components/table/TableHead'
import TableBody from '../components/table/TableBody'
import TableTr from '../components/table/TableTr'
import TableTd from '../components/table/TableTd'
import TableTh from '../components/table/TableTh'
import DataTable from '../components/table/DataTable'

import ProgressBar from '../components/ProgressBar'

class DashboardPage extends React.Component {

    render() {

        const projectData1 = {
            head : [
                {title: "Name", width: "30%"},
                {title: "Position", width: "20%"},
                {title: "Office", width: "20%"},
                {title: "Age", width: "10%"},
                {title: "Start date", width: "10%"},
                {title: "Salary", width: "10%"}
            ],

            body: [
                [
                    {value: "Tiger Nixon"},
                    {value: "System Architect"},
                    {value: "Edinburgh"},
                    {value: "61"},
                    {value: "2011/04/25"},
                    {value: "$320,800"}
                ],
                [
                    {value: "Garrett Winters"},
                    {value: "Accountant"},
                    {value: "Tokyo"},
                    {value: "63"},
                    {value: "2011/07/25"},
                    {value: "$170,750"}
                ],
                [
                    {value: "Ashton Cox"},
                    {value: "Junior Technical Author"},
                    {value: "San Francisco"},
                    {value: "66"},
                    {value: "2009/01/12"},
                    {value: "$86,000"}
                ],
                [
                    {value: "Cedric Kelly"},
                    {value: "Senior Javascript Developer"},
                    {value: "Edinburgh"},
                    {value: "22"},
                    {value: "2012/03/29"},
                    {value: "$433,060"}
                ],
                [
                    {value: "Airi Satou"},
                    {value: "Accountant"},
                    {value: "Tokyo"},
                    {value: "33"},
                    {value: "2008/11/28"},
                    {value: "$162,700"}
                ],
                [
                    {value: "Brielle Williamson"},
                    {value: "Integration Specialist"},
                    {value: "New York"},
                    {value: "61"},
                    {value: "2012/12/02"},
                    {value: "$372,000"}
                ],
                [
                    {value: "Herrod Chandler"},
                    {value: "Sales Assistant"},
                    {value: "San Francisco"},
                    {value: "59"},
                    {value: "2012/08/06"},
                    {value: "$137,500"}
                ],
                [
                    {value: "Rhona Davidson"},
                    {value: "Integration Specialist"},
                    {value: "Tokyo"},
                    {value: "55"},
                    {value: "2010/10/14"},
                    {value: "$327,900"}
                ],
                [
                    {value: "Colleen Hurst"},
                    {value: "Javascript Developer"},
                    {value: "San Francisco"},
                    {value: "39"},
                    {value: "2009/09/15"},
                    {value: "$205,500"}
                ],
                [
                    {value: "Sonya Frost"},
                    {value: "Software Engineer"},
                    {value: "Edinburgh"},
                    {value: "23"},
                    {value: "2008/12/13"},
                    {value: "$103,600"}
                ],
                [
                    {value: "Jena Gaines"},
                    {value: "Office Manager"},
                    {value: "London"},
                    {value: "30"},
                    {value: "2008/12/19"},
                    {value: "$90,560"}
                ]
            ]

        };

        return (
            <PageContent>
                <Row>
                    <PagePanel title="Users Activity" cols="col-xxl-7 col-lg-4" height={{ value: 200, unit: "px" }} id="dashboard-bar-1">

                    </PagePanel>
                    <PagePanel title="Visitors" cols="col-xxl-7 col-lg-4" height={{ value: 200, unit: "px" }} id="dashboard-donut-1">

                    </PagePanel>

                    <PagePanel title="Sales Events" cols="col-xxl-7 col-lg-4" height={{ value: 200, unit: "px" }} id="dashboard-line-1" >

                    </PagePanel>
                </Row>
                <Row>
                    <PagePanel title="Projects - 1" cols="col-xxl-7 col-lg-12">
                        <DataTable id="example1"  width="100%" data={projectData1}></DataTable>
                    </PagePanel>
                </Row>
                <Row>
                    <PagePanel title="Projects - 2" cols="col-xxl-7 col-lg-12" >
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
                    </PagePanel>
                </Row>

            </PageContent>
        );

    }
}

export default DashboardPage;