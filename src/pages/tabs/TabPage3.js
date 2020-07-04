import React from 'react';

import PageTabPane from '../../components/dashboard/panel/PageTabPane'
import InfoBox from '../../components/dashboard/InfoBox'
import InfoBoxItem from '../../components/dashboard/InfoBoxItem'

class TabPage3 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
  
            <PageTabPane id="tab3" labelledby="tab3-tab">
                
                    <InfoBox title="Application 4" label={{ value: "DOWN", class: "label-danger" }}>
                        <InfoBoxItem label="ID">1004</InfoBoxItem>
                        <InfoBoxItem label="Application">my-service-4</InfoBoxItem>
                        <InfoBoxItem label="Last Updated">Saturday, 4 July 2020</InfoBoxItem>
                        <InfoBoxItem label="Build">

                            <p class="m-0">Artifact: my-service-app-4</p>
                            <p class="m-0">Name: My Service Application 4</p>
                            <p class="m-0">Group: com.developerhelperhub.sample</p>
                            <p class="m-0">Version: 1.0.1</p>
                            <p class="m-0">Time: Saturday, 4 July 2020 10:54 pm</p>

                        </InfoBoxItem>
                    </InfoBox>

            </PageTabPane>
        );
    }

}

export default TabPage3;