
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
import ProgressBar from '../components/ProgressBar'



class DashboardPage extends React.Component {

    render() {
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
                        <Table id="example1"  width="100%">
                            <TableHead>
                                <TableTr>
                                    <TableTh>Name</TableTh>
                                    <TableTh>Position</TableTh>
                                    <TableTh>Office</TableTh>
                                    <TableTh>Age</TableTh>
                                    <TableTh>Start date</TableTh>
                                    <TableTh>Salary</TableTh>
                                </TableTr>
                            </TableHead>

                            <TableBody>
                                <TableTr>
                                    <TableTd>Tiger Nixon</TableTd>
                                    <TableTd>System Architect</TableTd>
                                    <TableTd>Edinburgh</TableTd>
                                    <TableTd>61</TableTd>
                                    <TableTd>2011/04/25</TableTd>
                                    <TableTd>$320,800</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Garrett Winters</TableTd>
                                    <TableTd>Accountant</TableTd>
                                    <TableTd>Tokyo</TableTd>
                                    <TableTd>63</TableTd>
                                    <TableTd>2011/07/25</TableTd>
                                    <TableTd>$170,750</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Ashton Cox</TableTd>
                                    <TableTd>Junior Technical Author</TableTd>
                                    <TableTd>San Francisco</TableTd>
                                    <TableTd>66</TableTd>
                                    <TableTd>2009/01/12</TableTd>
                                    <TableTd>$86,000</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Cedric Kelly</TableTd>
                                    <TableTd>Senior Javascript Developer</TableTd>
                                    <TableTd>Edinburgh</TableTd>
                                    <TableTd>22</TableTd>
                                    <TableTd>2012/03/29</TableTd>
                                    <TableTd>$433,060</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Airi Satou</TableTd>
                                    <TableTd>Accountant</TableTd>
                                    <TableTd>Tokyo</TableTd>
                                    <TableTd>33</TableTd>
                                    <TableTd>2008/11/28</TableTd>
                                    <TableTd>$162,700</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Brielle Williamson</TableTd>
                                    <TableTd>Integration Specialist</TableTd>
                                    <TableTd>New York</TableTd>
                                    <TableTd>61</TableTd>
                                    <TableTd>2012/12/02</TableTd>
                                    <TableTd>$372,000</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Herrod Chandler</TableTd>
                                    <TableTd>Sales Assistant</TableTd>
                                    <TableTd>San Francisco</TableTd>
                                    <TableTd>59</TableTd>
                                    <TableTd>2012/08/06</TableTd>
                                    <TableTd>$137,500</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Rhona Davidson</TableTd>
                                    <TableTd>Integration Specialist</TableTd>
                                    <TableTd>Tokyo</TableTd>
                                    <TableTd>55</TableTd>
                                    <TableTd>2010/10/14</TableTd>
                                    <TableTd>$327,900</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Colleen Hurst</TableTd>
                                    <TableTd>Javascript Developer</TableTd>
                                    <TableTd>San Francisco</TableTd>
                                    <TableTd>39</TableTd>
                                    <TableTd>2009/09/15</TableTd>
                                    <TableTd>$205,500</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Sonya Frost</TableTd>
                                    <TableTd>Software Engineer</TableTd>
                                    <TableTd>Edinburgh</TableTd>
                                    <TableTd>23</TableTd>
                                    <TableTd>2008/12/13</TableTd>
                                    <TableTd>$103,600</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Jena Gaines</TableTd>
                                    <TableTd>Office Manager</TableTd>
                                    <TableTd>London</TableTd>
                                    <TableTd>30</TableTd>
                                    <TableTd>2008/12/19</TableTd>
                                    <TableTd>$90,560</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Quinn Flynn</TableTd>
                                    <TableTd>Support Lead</TableTd>
                                    <TableTd>Edinburgh</TableTd>
                                    <TableTd>22</TableTd>
                                    <TableTd>2013/03/03</TableTd>
                                    <TableTd>$342,000</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Charde Marshall</TableTd>
                                    <TableTd>Regional Director</TableTd>
                                    <TableTd>San Francisco</TableTd>
                                    <TableTd>36</TableTd>
                                    <TableTd>2008/10/16</TableTd>
                                    <TableTd>$470,600</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Haley Kennedy</TableTd>
                                    <TableTd>Senior Marketing Designer</TableTd>
                                    <TableTd>London</TableTd>
                                    <TableTd>43</TableTd>
                                    <TableTd>2012/12/18</TableTd>
                                    <TableTd>$313,500</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Tatyana Fitzpatrick</TableTd>
                                    <TableTd>Regional Director</TableTd>
                                    <TableTd>London</TableTd>
                                    <TableTd>19</TableTd>
                                    <TableTd>2010/03/17</TableTd>
                                    <TableTd>$385,750</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Michael Silva</TableTd>
                                    <TableTd>Marketing Designer</TableTd>
                                    <TableTd>London</TableTd>
                                    <TableTd>66</TableTd>
                                    <TableTd>2012/11/27</TableTd>
                                    <TableTd>$198,500</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Paul Byrd</TableTd>
                                    <TableTd>Chief Financial Officer (CFO)</TableTd>
                                    <TableTd>New York</TableTd>
                                    <TableTd>64</TableTd>
                                    <TableTd>2010/06/09</TableTd>
                                    <TableTd>$725,000</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Gloria Little</TableTd>
                                    <TableTd>Systems Administrator</TableTd>
                                    <TableTd>New York</TableTd>
                                    <TableTd>59</TableTd>
                                    <TableTd>2009/04/10</TableTd>
                                    <TableTd>$237,500</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Bradley Greer</TableTd>
                                    <TableTd>Software Engineer</TableTd>
                                    <TableTd>London</TableTd>
                                    <TableTd>41</TableTd>
                                    <TableTd>2012/10/13</TableTd>
                                    <TableTd>$132,000</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Dai Rios</TableTd>
                                    <TableTd>Personnel Lead</TableTd>
                                    <TableTd>Edinburgh</TableTd>
                                    <TableTd>35</TableTd>
                                    <TableTd>2012/09/26</TableTd>
                                    <TableTd>$217,500</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Jenette Caldwell</TableTd>
                                    <TableTd>Development Lead</TableTd>
                                    <TableTd>New York</TableTd>
                                    <TableTd>30</TableTd>
                                    <TableTd>2011/09/03</TableTd>
                                    <TableTd>$345,000</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Yuri Berry</TableTd>
                                    <TableTd>Chief Marketing Officer (CMO)</TableTd>
                                    <TableTd>New York</TableTd>
                                    <TableTd>40</TableTd>
                                    <TableTd>2009/06/25</TableTd>
                                    <TableTd>$675,000</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Caesar Vance</TableTd>
                                    <TableTd>Pre-Sales Support</TableTd>
                                    <TableTd>New York</TableTd>
                                    <TableTd>21</TableTd>
                                    <TableTd>2011/12/12</TableTd>
                                    <TableTd>$106,450</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Doris Wilder</TableTd>
                                    <TableTd>Sales Assistant</TableTd>
                                    <TableTd>Sydney</TableTd>
                                    <TableTd>23</TableTd>
                                    <TableTd>2010/09/20</TableTd>
                                    <TableTd>$85,600</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Angelica Ramos</TableTd>
                                    <TableTd>Chief Executive Officer (CEO)</TableTd>
                                    <TableTd>London</TableTd>
                                    <TableTd>47</TableTd>
                                    <TableTd>2009/10/09</TableTd>
                                    <TableTd>$1,200,000</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Gavin Joyce</TableTd>
                                    <TableTd>Developer</TableTd>
                                    <TableTd>Edinburgh</TableTd>
                                    <TableTd>42</TableTd>
                                    <TableTd>2010/12/22</TableTd>
                                    <TableTd>$92,575</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Jennifer Chang</TableTd>
                                    <TableTd>Regional Director</TableTd>
                                    <TableTd>Singapore</TableTd>
                                    <TableTd>28</TableTd>
                                    <TableTd>2010/11/14</TableTd>
                                    <TableTd>$357,650</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Brenden Wagner</TableTd>
                                    <TableTd>Software Engineer</TableTd>
                                    <TableTd>San Francisco</TableTd>
                                    <TableTd>28</TableTd>
                                    <TableTd>2011/06/07</TableTd>
                                    <TableTd>$206,850</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Fiona Green</TableTd>
                                    <TableTd>Chief Operating Officer (COO)</TableTd>
                                    <TableTd>San Francisco</TableTd>
                                    <TableTd>48</TableTd>
                                    <TableTd>2010/03/11</TableTd>
                                    <TableTd>$850,000</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Shou Itou</TableTd>
                                    <TableTd>Regional Marketing</TableTd>
                                    <TableTd>Tokyo</TableTd>
                                    <TableTd>20</TableTd>
                                    <TableTd>2011/08/14</TableTd>
                                    <TableTd>$163,000</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Michelle House</TableTd>
                                    <TableTd>Integration Specialist</TableTd>
                                    <TableTd>Sydney</TableTd>
                                    <TableTd>37</TableTd>
                                    <TableTd>2011/06/02</TableTd>
                                    <TableTd>$95,400</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Suki Burks</TableTd>
                                    <TableTd>Developer</TableTd>
                                    <TableTd>London</TableTd>
                                    <TableTd>53</TableTd>
                                    <TableTd>2009/10/22</TableTd>
                                    <TableTd>$114,500</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Prescott Bartlett</TableTd>
                                    <TableTd>Technical Author</TableTd>
                                    <TableTd>London</TableTd>
                                    <TableTd>27</TableTd>
                                    <TableTd>2011/05/07</TableTd>
                                    <TableTd>$145,000</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Gavin Cortez</TableTd>
                                    <TableTd>Team Leader</TableTd>
                                    <TableTd>San Francisco</TableTd>
                                    <TableTd>22</TableTd>
                                    <TableTd>2008/10/26</TableTd>
                                    <TableTd>$235,500</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Martena Mccray</TableTd>
                                    <TableTd>Post-Sales support</TableTd>
                                    <TableTd>Edinburgh</TableTd>
                                    <TableTd>46</TableTd>
                                    <TableTd>2011/03/09</TableTd>
                                    <TableTd>$324,050</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Unity Butler</TableTd>
                                    <TableTd>Marketing Designer</TableTd>
                                    <TableTd>San Francisco</TableTd>
                                    <TableTd>47</TableTd>
                                    <TableTd>2009/12/09</TableTd>
                                    <TableTd>$85,675</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Howard Hatfield</TableTd>
                                    <TableTd>Office Manager</TableTd>
                                    <TableTd>San Francisco</TableTd>
                                    <TableTd>51</TableTd>
                                    <TableTd>2008/12/16</TableTd>
                                    <TableTd>$164,500</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Hope Fuentes</TableTd>
                                    <TableTd>Secretary</TableTd>
                                    <TableTd>San Francisco</TableTd>
                                    <TableTd>41</TableTd>
                                    <TableTd>2010/02/12</TableTd>
                                    <TableTd>$109,850</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Vivian Harrell</TableTd>
                                    <TableTd>Financial Controller</TableTd>
                                    <TableTd>San Francisco</TableTd>
                                    <TableTd>62</TableTd>
                                    <TableTd>2009/02/14</TableTd>
                                    <TableTd>$452,500</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Timothy Mooney</TableTd>
                                    <TableTd>Office Manager</TableTd>
                                    <TableTd>London</TableTd>
                                    <TableTd>37</TableTd>
                                    <TableTd>2008/12/11</TableTd>
                                    <TableTd>$136,200</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Jackson Bradshaw</TableTd>
                                    <TableTd>Director</TableTd>
                                    <TableTd>New York</TableTd>
                                    <TableTd>65</TableTd>
                                    <TableTd>2008/09/26</TableTd>
                                    <TableTd>$645,750</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Olivia Liang</TableTd>
                                    <TableTd>Support Engineer</TableTd>
                                    <TableTd>Singapore</TableTd>
                                    <TableTd>64</TableTd>
                                    <TableTd>2011/02/03</TableTd>
                                    <TableTd>$234,500</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Bruno Nash</TableTd>
                                    <TableTd>Software Engineer</TableTd>
                                    <TableTd>London</TableTd>
                                    <TableTd>38</TableTd>
                                    <TableTd>2011/05/03</TableTd>
                                    <TableTd>$163,500</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Sakura Yamamoto</TableTd>
                                    <TableTd>Support Engineer</TableTd>
                                    <TableTd>Tokyo</TableTd>
                                    <TableTd>37</TableTd>
                                    <TableTd>2009/08/19</TableTd>
                                    <TableTd>$139,575</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Thor Walton</TableTd>
                                    <TableTd>Developer</TableTd>
                                    <TableTd>New York</TableTd>
                                    <TableTd>61</TableTd>
                                    <TableTd>2013/08/11</TableTd>
                                    <TableTd>$98,540</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Finn Camacho</TableTd>
                                    <TableTd>Support Engineer</TableTd>
                                    <TableTd>San Francisco</TableTd>
                                    <TableTd>47</TableTd>
                                    <TableTd>2009/07/07</TableTd>
                                    <TableTd>$87,500</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Serge Baldwin</TableTd>
                                    <TableTd>Data Coordinator</TableTd>
                                    <TableTd>Singapore</TableTd>
                                    <TableTd>64</TableTd>
                                    <TableTd>2012/04/09</TableTd>
                                    <TableTd>$138,575</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Zenaida Frank</TableTd>
                                    <TableTd>Software Engineer</TableTd>
                                    <TableTd>New York</TableTd>
                                    <TableTd>63</TableTd>
                                    <TableTd>2010/01/04</TableTd>
                                    <TableTd>$125,250</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Zorita Serrano</TableTd>
                                    <TableTd>Software Engineer</TableTd>
                                    <TableTd>San Francisco</TableTd>
                                    <TableTd>56</TableTd>
                                    <TableTd>2012/06/01</TableTd>
                                    <TableTd>$115,000</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Jennifer Acosta</TableTd>
                                    <TableTd>Junior Javascript Developer</TableTd>
                                    <TableTd>Edinburgh</TableTd>
                                    <TableTd>43</TableTd>
                                    <TableTd>2013/02/01</TableTd>
                                    <TableTd>$75,650</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Cara Stevens</TableTd>
                                    <TableTd>Sales Assistant</TableTd>
                                    <TableTd>New York</TableTd>
                                    <TableTd>46</TableTd>
                                    <TableTd>2011/12/06</TableTd>
                                    <TableTd>$145,600</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Hermione Butler</TableTd>
                                    <TableTd>Regional Director</TableTd>
                                    <TableTd>London</TableTd>
                                    <TableTd>47</TableTd>
                                    <TableTd>2011/03/21</TableTd>
                                    <TableTd>$356,250</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Lael Greer</TableTd>
                                    <TableTd>Systems Administrator</TableTd>
                                    <TableTd>London</TableTd>
                                    <TableTd>21</TableTd>
                                    <TableTd>2009/02/27</TableTd>
                                    <TableTd>$103,500</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Jonas Alexander</TableTd>
                                    <TableTd>Developer</TableTd>
                                    <TableTd>San Francisco</TableTd>
                                    <TableTd>30</TableTd>
                                    <TableTd>2010/07/14</TableTd>
                                    <TableTd>$86,500</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Shad Decker</TableTd>
                                    <TableTd>Regional Director</TableTd>
                                    <TableTd>Edinburgh</TableTd>
                                    <TableTd>51</TableTd>
                                    <TableTd>2008/11/13</TableTd>
                                    <TableTd>$183,000</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Michael Bruce</TableTd>
                                    <TableTd>Javascript Developer</TableTd>
                                    <TableTd>Singapore</TableTd>
                                    <TableTd>29</TableTd>
                                    <TableTd>2011/06/27</TableTd>
                                    <TableTd>$183,000</TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd>Donna Snider</TableTd>
                                    <TableTd>Customer Support</TableTd>
                                    <TableTd>New York</TableTd>
                                    <TableTd>27</TableTd>
                                    <TableTd>2011/01/25</TableTd>
                                    <TableTd>$112,000</TableTd>
                                </TableTr>
                            </TableBody>
                        </Table>
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