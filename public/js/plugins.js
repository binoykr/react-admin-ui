
function refreshDatatable(id) {

    $(id).DataTable();

};



function d3LinesChart(value) {

    // reset svg
    d3.select("div.parent").html("");

    // set the dimensions and margins of the graph
    var width = $(value.id).width() - value.margin.left - value.margin.right;
    var height = $(value.id).height() - value.margin.top - value.margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select(value.id)
        .append("svg")
        .attr("width", width + value.margin.left + value.margin.right)
        .attr("height", height + value.margin.top + value.margin.bottom)

        //.attr("preserveAspectRatio", "xMinYMin meet")
        //.attr("viewBox", "0 0 1000 400")

        .append("g")
        .attr("transform",
            "translate(" + value.margin.left + "," + value.margin.top + ")");

    // Add X axis --> it is a date format
    var x = d3.scaleTime()
        .domain(d3.extent(value.values, value.extent))
        .range(value.axis.x.range(width, height));

    var xaxis = svg.append("g")
        .attr("transform", value.axis.x.transform(width, height))
        .call(d3.axisBottom(x));

    xaxis.selectAll("line")
        .style("stroke", value.axis.stroke);
    xaxis.selectAll("path")
        .style("stroke", value.axis.stroke);
    xaxis.selectAll("text")
        .style("stroke", value.axis.text)
        .style("font", value.axis.font);

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, d3.max(value.values, value.max)])
        .range(value.axis.y.range(width, height));

    var yaxis = svg.append("g")
        .call(d3.axisLeft(y));

    yaxis.selectAll("line")
        .style("stroke", value.axis.stroke);
    yaxis.selectAll("path")
        .style("stroke", value.axis.stroke);
    yaxis.selectAll("text")
        .style("stroke", value.axis.text)
        .style("font", value.axis.font);



    value.items.forEach(item => {

        // Add the line
        svg.append("path")
            .datum(item.data)
            .attr("fill", item.fill)
            .attr("stroke", item.stroke)
            .attr("stroke-width", item.strokeWidth)
            .attr("d", d3.line()
                .x(function (d) { return x(item.x(d)) })
                .y(function (d) { return y(item.y(d)) })
            );

    });

    var legend = svg.selectAll('.legend')
        .data(value.legend.data)
        .enter()
        .append('g')
        .attr('class', 'legend')
        .attr('transform', function (d, i) {
            return value.legend.transform(d, i, width, height)
        });

    legend.append('rect')
        .attr("x", value.legend.rect.x(width, height))
        .attr("y", value.legend.rect.y(width, height))
        .attr('width', value.legend.rect.width)
        .attr('height', value.legend.rect.height)
        .style('fill', function (d, i) {
            return d.fill;
        })
        .style('stroke', function (d, i) {
            return d.stroke;
        });

    legend.append('text')
        .attr('x', value.legend.text.x(width, height))
        .attr('y', value.legend.text.y(width, height))
        .style("font", value.legend.text.font)
        .style("fill", value.legend.text.fill)
        .attr("dy", "0")
        //.style("text-anchor", "end")
        .text(function (d) { return value.legend.text.value(d); });

}




function d3LineChart(value) {

    // reset svg

    d3.select("div.parent").html("");

    // set the dimensions and margins of the graph
    var width = $(value.id).width() - value.margin.left - value.margin.right;
    var height = $(value.id).height() - value.margin.top - value.margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select(value.id)
        .append("svg")
        .attr("width", width + value.margin.left + value.margin.right)
        .attr("height", height + value.margin.top + value.margin.bottom)

        //.attr("preserveAspectRatio", "xMinYMin meet")
        //.attr("viewBox", "0 0 1000 400")

        .append("g")
        .attr("transform",
            "translate(" + value.margin.left + "," + value.margin.top + ")");

    // Add X axis --> it is a date format
    var x = d3.scaleTime()
        .domain(d3.extent(value.data, value.extent))
        .range(value.axis.x.range(width, height));

    var xaxis = svg.append("g")
        .attr("transform", value.axis.x.transform(width, height))
        .call(d3.axisBottom(x));

    xaxis.selectAll("line")
        .style("stroke", value.axis.stroke);
    xaxis.selectAll("path")
        .style("stroke", value.axis.stroke);
    xaxis.selectAll("text")
        .style("stroke", value.axis.text)
        .style("font", value.axis.font);

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, d3.max(value.data, value.max)])
        .range(value.axis.y.range(width, height));

    var yaxis = svg.append("g")
        .call(d3.axisLeft(y));

    yaxis.selectAll("line")
        .style("stroke", value.axis.stroke);
    yaxis.selectAll("path")
        .style("stroke", value.axis.stroke);
    yaxis.selectAll("text")
        .style("stroke", value.axis.text)
        .style("font", value.axis.font);


    // Add the line
    svg.append("path")
        .datum(value.data)
        .attr("fill", value.fill)
        .attr("stroke", value.stroke)
        .attr("stroke-width", value.strokeWidth)
        .attr("d", d3.line()
            .x(function (d) { return x(value.x(d)) })
            .y(function (d) { return y(value.y(d)) })
        )
}


function d3BarChart(value) {

    // reset svg
    d3.select("div.parent").html("");

    // set the dimensions and margins of the graph
    var width = $(value.id).width() - value.margin.left - value.margin.right;
    var height = $(value.id).height() - value.margin.top - value.margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select(value.id)
        .append("svg")
        .attr("width", width + value.margin.left + value.margin.right)
        .attr("height", height + value.margin.top + value.margin.bottom);

    var g = svg.append("g")
        .attr("transform",
            "translate(" + value.margin.left + "," + value.margin.top + ")");

    var xScale = d3.scaleBand().range(value.axis.x.range(width, height)).padding(0.4),
        yScale = d3.scaleLinear().range(value.axis.y.range(width, height));

    xScale.domain(value.data.map(function (d) { return value.extent(d); }));
    yScale.domain([0, d3.max(value.data, function (d) { return value.max(d); })]);

    var xaxis = g.append("g")
        .attr("transform", value.axis.x.transform(width, height))
        .call(d3.axisBottom(xScale));

    xaxis.selectAll("line")
        .style("stroke", value.axis.stroke);
    xaxis.selectAll("path")
        .style("stroke", value.axis.stroke);
    xaxis.selectAll("text")
        .style("stroke", value.axis.text)
        .style("font", value.axis.font);

    var yaxis = g.append("g")
        .call(d3.axisLeft(yScale)

            // .tickFormat(function (d) {
            //     return "$" + d;
            // }).ticks(10)

        );


    yaxis.selectAll("line")
        .style("stroke", value.axis.stroke);
    yaxis.selectAll("path")
        .style("stroke", value.axis.stroke);
    yaxis.selectAll("text")
        .style("stroke", value.axis.text)
        .style("font", value.axis.font);


    g.selectAll(".bar")
        .data(value.data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) { return xScale(value.x(d)); })
        .attr("y", function (d) { return yScale(value.y(d)); })
        .attr("fill", value.fill)
        .attr("stroke", value.stroke)
        .attr("stroke-width", value.strokeWidth)
        .attr("width", xScale.bandwidth())
        .attr("height", function (d) { return height - yScale(d.value); });
}

function d3BarChartGroup(value) {

    // reset svg
    d3.select("div.parent").html("");

    // set the dimensions and margins of the graph
    var width = $(value.id).width() - value.margin.left - value.margin.right;
    var height = $(value.id).height() - value.margin.top - value.margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select(value.id)
        .append("svg")
        .attr("width", width + value.margin.left + value.margin.right)
        .attr("height", height + value.margin.top + value.margin.bottom);

    var g = svg.append("g")
        .attr("transform",
            "translate(" + value.margin.left + "," + value.margin.top + ")");

    var xScale0 = d3.scaleBand().range([0, width]).padding(.2)
    var xScale1 = d3.scaleBand()
    var yScale = d3.scaleLinear().range([height, 0])

    var xAxis = d3.axisBottom(xScale0);
    var yAxis = d3.axisLeft(yScale);

    xScale0.domain(value.data.map(d => d.model_name))
    xScale1.domain(['field1', 'field2']).range([0, xScale0.bandwidth()])
    yScale.domain([0, d3.max(value.data, d => d.field1 > d.field2 ? d.field1 : d.field2)])


    var model_name = svg.selectAll(".model_name")
        .data(value.data)
        .enter().append("g")
        .attr("class", "model_name")
        .attr("transform", d => 'translate(' + (xScale0(d.model_name) + value.margin.left) + ', ' + value.margin.top + ')');


    /* Add field1 bars */
    model_name.selectAll(".bar.field1")
        .data(d => [d])
        .enter()
        .append("rect")
        .attr("class", "bar field1")
        .style("fill", "blue")
        .attr("x", d => xScale1('field1'))
        .attr("y", d => yScale(d.field1))
        .attr("width", xScale1.bandwidth())
        .attr("height", d => {
            return height - yScale(d.field1)
        });

    /* Add field2 bars */
    model_name.selectAll(".bar.field2")
        .data(d => [d])
        .enter()
        .append("rect")
        .attr("class", "bar field2")
        .style("fill", "red")
        .attr("x", d => xScale1('field2'))
        .attr("y", d => yScale(d.field2))
        .attr("width", xScale1.bandwidth())
        .attr("height", d => {
            return height - yScale(d.field2)
        });

    // Add the X Axis
    var xaxis = g.append("g")
        .attr("transform", value.axis.x.transform(width, height))
        .call(xAxis);

    xaxis.selectAll("line")
        .style("stroke", value.axis.stroke);
    xaxis.selectAll("path")
        .style("stroke", value.axis.stroke);
    xaxis.selectAll("text")
        .style("stroke", value.axis.text)
        .style("font", value.axis.font);


    // Add the Y Axis
    var yaxis = g.append("g")
        .call(yAxis);

    yaxis.selectAll("line")
        .style("stroke", value.axis.stroke);
    yaxis.selectAll("path")
        .style("stroke", value.axis.stroke);
    yaxis.selectAll("text")
        .style("stroke", value.axis.text)
        .style("font", value.axis.font);
}