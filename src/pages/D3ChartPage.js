import React from 'react';

import PageContent from '../components/dashboard/PageContent'
import Row from '../components/dashboard/Row'
import DataTable from '../components/table/DataTable'

import PagePanel from '../components/dashboard/panel/PagePanel'
import PagePanelBody from '../components/dashboard/panel/PagePanelBody'
import PagePanelHead from '../components/dashboard/panel/PagePanelHead'
import PagePanelIcon from '../components/dashboard/panel/PagePanelIcon'

class D3ChartPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }

        this.formatDate = this.formatDate.bind(this);
        this.populateAll = this.populateAll.bind(this);
        this.sampleSingleData = this.sampleSingleData.bind(this);
        this.sampleGroupedData = this.sampleGroupedData.bind(this);
        this.populateGrouped = this.populateGrouped.bind(this);
        this.colours = this.colours.bind(this);
        this.populateBarChart = this.populateBarChart.bind(this);
        this.sampleSingleBarData = this.sampleSingleBarData.bind(this);
        this.populateBarChartGrouped = this.populateBarChartGrouped.bind(this);
        this.sampleBarGroupedData = this.sampleBarGroupedData.bind(this);

    }

    componentDidMount() {
        let self = this;

        var data1 = this.sampleGroupedData();
        self.populateGrouped(data1);

        var data2 = this.sampleSingleData();
        self.populateAll(data2);

        var data3 = this.sampleSingleBarData();
        self.populateBarChart(data3);

        var data4 = this.sampleBarGroupedData();
        self.populateBarChartGrouped(data4);
    }


    populateAll(data) {

        window.d3LineChart({
            id: "#chart_1",
            margin: { top: 10, right: 30, bottom: 30, left: 60 },
            fill: 'none',
            stroke: "steelblue",
            strokeWidth: "1px",
            data: data,
            axis: {
                x: {
                    transform: function (width, height) {
                        return "translate(0," + height + ")";
                    },
                    range: function (width, height) {
                        return [0, width];
                    }
                },
                y: {
                    range: function (width, height) {
                        return [height, 0];
                    }
                },
                stroke: "#818896",
                fill: "none",
                text: "#818896",
                font: "10px Arial"
            },
            extent: function (d) { return d.date; },
            max: function (d) { return d.value; },
            x: function (d) { return d.date },
            y: function (d) { return d.value }
        });

    }


    populateGrouped(data) {

        window.d3LinesChart({
            id: "#chart_2",
            margin: { top: 10, right: 30, bottom: 30, left: 60 },
            items: data.items,
            axis: {
                x: {
                    transform: function (width, height) {
                        return "translate(0," + height + ")";
                    },
                    range: function (width, height) {
                        return [0, width - 100];
                    }
                },
                y: {
                    range: function (width, height) {
                        return [height, 0];
                    }
                },
                stroke: "#818896",
                fill: "none",
                text: "#818896",
                font: "10px Arial"
            },
            legend: {
                transform: function (d, i, width, height) {
                    return 'translate(' + 0 + ',' + (i * 20) + ')';
                },
                rect: {
                    width: 10,
                    height: 10,
                    x: function (width, height) {
                        return width - 100;
                    },
                    y: function (width, height) {
                        return 0;
                    }
                },
                text: {
                    x: function (width, height) {
                        return width - 80;
                    },
                    y: function (width, height) {
                        return 10;
                    },
                    value: function (d) {
                        return d.value;
                    },
                    font: "10px arial",
                    fill: "#818896"
                },
                data: data.legends,
            },
            values: data.values,
            extent: function (d) { return d.date; },
            max: function (d) { return d.value; },
        });

    }


    populateBarChart(data) {

        window.d3BarChart({
            id: "#chart_3",
            margin: { top: 10, right: 30, bottom: 30, left: 60 },
            fill: 'steelblue',
            stroke: "steelblue",
            strokeWidth: "1px",
            data: data,
            axis: {
                x: {
                    transform: function (width, height) {
                        return "translate(0," + height + ")";
                    },
                    range: function (width, height) {
                        return [0, width];
                    }
                },
                y: {
                    range: function (width, height) {
                        return [height, 0];
                    }
                },
                stroke: "#818896",
                fill: "none",
                text: "#818896",
                font: "10px Arial"
            },
            extent: function (d) { return d.date; },
            max: function (d) { return d.value; },
            x: function (d) { return d.date },
            y: function (d) { return d.value }
        });
    }

    populateBarChartGrouped(data) {

        window.d3BarChartGroup({
            id: "#chart_4",
            margin: { top: 10, right: 30, bottom: 30, left: 60 },
            fill: 'steelblue',
            stroke: "steelblue",
            strokeWidth: "1px",
            data: data,
            axis: {
                x: {
                    transform: function (width, height) {
                        return "translate(" + 0 + "," + height + ")";
                    },
                    range: function (width, height) {
                        return [0, width];
                    }
                },
                y: {
                    range: function (width, height) {
                        return [height, 0];
                    }
                },
                stroke: "#818896",
                fill: "none",
                text: "#818896",
                font: "10px Arial"
            },
            extent: function (d) { return d.date; },
            max: function (d) { return d.value; },
            x: function (d) { return d.date },
            y: function (d) { return d.value }
        });
    }

    render() {

        return (
            <PageContent>
                <Row>
                    <PagePanel cols="col-xxl-6 col-lg-6" >
                        <PagePanelHead title="Single Line">
                        </PagePanelHead>
                        <PagePanelBody>
                            <div id="chart_1" style={{ height: "300px" }}></div>
                        </PagePanelBody>
                    </PagePanel>
                    <PagePanel cols="col-xxl-6 col-lg-6" >
                        <PagePanelHead title="Multipe Line & Legend">
                        </PagePanelHead>
                        <PagePanelBody>
                            <div id="chart_2" style={{ height: "300px" }}></div>
                        </PagePanelBody>
                    </PagePanel>
                </Row>
                <Row>
                    <PagePanel cols="col-xxl-6 col-lg-6" >
                        <PagePanelHead title="Bar Chart">
                        </PagePanelHead>
                        <PagePanelBody>
                            <div id="chart_3" style={{ height: "300px" }}></div>
                        </PagePanelBody>
                    </PagePanel>
                    <PagePanel cols="col-xxl-6 col-lg-6" >
                        <PagePanelHead title="Bar Chart Grouped">
                        </PagePanelHead>
                        <PagePanelBody>
                            <div id="chart_4" style={{ height: "300px" }}></div>
                        </PagePanelBody>
                    </PagePanel>
                </Row>
            </PageContent>
        );

    }


    sampleSingleData() {
        let self = this;

        return [
            { date: self.formatDate("2020-05-17 09:10:20"), value: 100 },
            { date: self.formatDate("2020-05-17 09:12:20"), value: 200 },
            { date: self.formatDate("2020-05-17 09:40:20"), value: 300 },
            { date: self.formatDate("2020-05-17 09:55:20"), value: 600 },
            { date: self.formatDate("2020-05-17 10:10:20"), value: 700 },
            { date: self.formatDate("2020-05-17 10:10:20"), value: 400 },
            { date: self.formatDate("2020-05-17 10:12:20"), value: 250 },
            { date: self.formatDate("2020-05-17 10:40:20"), value: 110 },
            { date: self.formatDate("2020-05-17 10:55:20"), value: 120 },
        ];
    }

    sampleGroupedData() {

        let self = this;

        var legends = [
            { value: "Application 1", fill: 'steelblue', stroke: "steelblue", strokeWidth: 1.5 },
            { value: "Application 2", fill: 'red', stroke: "steelblue", strokeWidth: 1.5 }
        ]

        var values = [
            { date: self.formatDate("2020-05-17 09:10:20"), value: 200 },
            { date: self.formatDate("2020-05-17 09:12:20"), value: 100 },
            { date: self.formatDate("2020-05-17 09:40:20"), value: 300 },
            { date: self.formatDate("2020-05-17 09:55:20"), value: 600 },
            { date: self.formatDate("2020-05-17 10:10:20"), value: 150 },
            { date: self.formatDate("2020-05-17 09:10:20"), value: 50 },
            { date: self.formatDate("2020-05-17 09:12:20"), value: 70 },
            { date: self.formatDate("2020-05-17 09:40:20"), value: 90 },
            { date: self.formatDate("2020-05-17 09:55:20"), value: 400 },
            { date: self.formatDate("2020-05-17 10:10:20"), value: 40 },
        ]

        var items = [
            {
                fill: 'none',
                stroke: "steelblue",
                strokeWidth: 1.5,
                data: [
                    { date: self.formatDate("2020-05-17 09:10:20"), value: 200 },
                    { date: self.formatDate("2020-05-17 09:12:20"), value: 100 },
                    { date: self.formatDate("2020-05-17 09:40:20"), value: 300 },
                    { date: self.formatDate("2020-05-17 09:55:20"), value: 600 },
                    { date: self.formatDate("2020-05-17 10:10:20"), value: 150 },
                ],
                x: function (d) { return d.date },
                y: function (d) { return d.value }
            },
            {
                fill: 'none',
                stroke: "red",
                strokeWidth: 1.5,
                data: [
                    { date: self.formatDate("2020-05-17 09:10:20"), value: 50 },
                    { date: self.formatDate("2020-05-17 09:12:20"), value: 70 },
                    { date: self.formatDate("2020-05-17 09:40:20"), value: 90 },
                    { date: self.formatDate("2020-05-17 09:55:20"), value: 400 },
                    { date: self.formatDate("2020-05-17 10:10:20"), value: 40 },
                ],
                x: function (d) { return d.date },
                y: function (d) { return d.value }
            }
        ]

        return { values: values, items: items, legends: legends };
    }

    formatDate(date) {
        return window.d3.timeParse("%Y-%m-%d %H:%M:%S")(date);
    }

    colours() {
        return ["ORCHID", "GOLD", "ORANGERED", "LIMEGREEN", "HOTPINK", "MEDIUMVIOLETRED", "DARKVIOLET"];
    }

    sampleSingleBarData() {
        let self = this;

        return [
            { date: 2011, value: 45 },
            { date: 2012, value: 47 },
            { date: 2013, value: 52 },
            { date: 2014, value: 70 },
            { date: 2015, value: 75 },
            { date: 2016, value: 78 },
        ];
    }

    sampleBarGroupedData() {
        let self = this;

        return [
            {
                "model_name": "f1",
                "field1": 19,
                "field2": 83
            },
            {
                "model_name": "f2",
                "field1": 67,
                "field2": 93
            },
            {
                "model_name": "f3",
                "field1": 10,
                "field2": 56
            },
        ];
    }
}

export default D3ChartPage;