
import React from 'react';

import PagePanel from '../components/dashboard/PagePanel'
import PageContent from '../components/dashboard/PageContent'
import Row from '../components/dashboard/Row'


class DashboardPage extends React.Component {

    render() {
        return (
            <PageContent>
                <Row>
                    <PagePanel title="Users Activity" cols="col-xxl-7 col-lg-4" height={{value: 200, unit:"px"}} id="dashboard-bar-1">

                    </PagePanel>
                    <PagePanel title="Visitors" cols="col-xxl-7 col-lg-4" height={{value: 200, unit:"px"}} id="dashboard-donut-1">

                    </PagePanel>

                    <PagePanel title="Sales Events" cols="col-xxl-7 col-lg-4" height={{value: 200, unit:"px"}} id="dashboard-line-1" >

                    </PagePanel>
                </Row>

                <Row>
                    <PagePanel title="Projects" cols="col-xxl-7 col-lg-12" >

                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th width="50%">Project</th>
                                        <th width="20%">Status</th>
                                        <th width="30%">Activity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Admin</strong></td>
                                        <td><span class="label label-danger">Developing</span></td>
                                        <td>
                                            <div class="progress progress-small progress-striped active">
                                                <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}>85%</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Gemini</strong></td>
                                        <td><span class="label label-warning">Updating</span></td>
                                        <td>
                                            <div class="progress progress-small progress-striped active">
                                                <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>40%</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Taurus</strong></td>
                                        <td><span class="label label-warning">Updating</span></td>
                                        <td>
                                            <div class="progress progress-small progress-striped active">
                                                <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "72%" }}>72%</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Leo</strong></td>
                                        <td><span class="label label-success">Support</span></td>
                                        <td>
                                            <div class="progress progress-small progress-striped active">
                                                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>100%</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Virgo</strong></td>
                                        <td><span class="label label-success">Support</span></td>
                                        <td>
                                            <div class="progress progress-small progress-striped active">
                                                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>100%</div>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        
                    </PagePanel>
                </Row>

            </PageContent>
        );

    }
}

export default DashboardPage;