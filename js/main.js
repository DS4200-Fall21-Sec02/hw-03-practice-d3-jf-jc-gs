// write your javascript code here.
// feel free to change the preset attributes as you see fit

let margin = {
    top: 60,
    left: 50,
    right: 30,
    bottom: 35
  },
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;



// first visualization
let svg1 = d3.select('#vis1')
  .append('svg')
  .attr('preserveAspectRatio', 'xMidYMid meet') // this will scale your visualization according to the size of its parent element and the page.
  .attr('width', '100%') // this is now required by Chrome to ensure the SVG shows up at all
  .style('background-color', '#ccc') // change the background color to light gray
  .attr('viewBox', [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))


// create time formatting function
const parseTime = d3.timeFormat("%m/%d/%Y"); 

  
// load in data from CSV and pull out variables
let data1 = d3.csv('data/covid_impact_on_airport_traffic.csv', function(row) {
  const formatDate = d3.timeParse("%Y-%m-%d");
  return {
    PercentOfBaseline: +row.PercentOfBaseline,
    date: formatDate(row.Date),
    airport: row.AirportName
  }
}).then(function(data) {

  // create Y axis
  let maxY = d3.max(data, function(d) {return d.PercentOfBaseline;})
  let yScale = d3.scaleLinear()
                  .domain([0, 100])
                  .range([height, 0]);

  // add y axis to SVG
  svg1.append("g")
  .attr("transform", "translate(" + margin.left + ",10)")
  .call(d3.axisLeft(yScale));

  // create X axis
  let xScale = d3.scaleTime()
    .domain(d3.extent(data, function(d) { return d.date;}))
    .range([0, width]);

  // add x axis to SVG
  svg1.append("g")
    .attr("transform", "translate(" + margin.left + "," + (height + 10) + ")")
    .call(d3.axisBottom(xScale));

  //create popup with information
  var Tooltip = d3.select("#vis1")
                  .append("div")
                  .style("opacity", 0)
                  .attr("class", "tooltip");
           
  

  //add points 
  svg1.append('g')
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return margin.left + xScale(d.date); } )
        .attr("cy", function (d) { return 10+yScale(d.PercentOfBaseline); } )
        .attr("r", 2)
        .style("fill", "#CC0000")
        //add interactivity to show values
        // trigger mouse-over event
        .on('mouseover', function(d, i) {
          // decrease blob size
          d3.select(this).transition()
          .duration('100')
          .attr("r", 7);

          // information popup becomes visible
          Tooltip.transition().duration(200).style("opacity", .9);
          Tooltip.html("<b>" + i.PercentOfBaseline + "%</b><br>"+ parseTime(i.date) + 
                        "<br>" + i.airport)
                  .style("left", (d.pageX) + "px")
                  .style("top", (d.pageY -28) + "px");

        })
        // trigger mouse-leaving event
        .on('mouseout', function(d) {
          //decrease blob size
          d3.select(this).transition()
          .duration('100')
          .attr("r", 2);
          // popup disappears  
          Tooltip.transition().duration(500).style("opacity", 0);
        });

// add labels to chart
var labelY = height/2;
var labelX = margin.left/2 - 5;

// y label 
svg1.append('g')
  .attr('transform', 'translate(' + labelX + ',' + labelY + ")")
  .append('text')
  .attr('text-anchor', 'middle')
  .attr('transform', 'rotate(-90)')
  .text('Percent of Baseline Flights');

// reset label locations
var labelY = height + margin.top;
var labelX = width / 2 + margin.left;

// x label
svg1.append('g')
  .attr('transform', 'translate(' + labelX + ',' + labelY + ")")
  .append('text')
  .attr('text-anchor', 'middle')
  .text('Date (2020)');

});

// second visualization
// Acknowledgement: code is created through the study of the following website:
// https://www.d3-graph-gallery.com/graph/barplot_grouped_basicWide.html
let svg2 = d3.select('#vis2')
  .append('svg')
  .attr('preserveAspectRatio', 'xMidYMid meet') // this will scale your visualization according to the size of its parent element and the page.
  .attr('width', '100%') // this is now required by Chrome to ensure the SVG shows up at all
  .style('background-color', '#ccc') // change the background color to light gray
  .attr('viewBox', [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))

 // load in data 
 d3.csv('data/store_revenues.csv').then( function(data) {

  // list of subgroupings (branches)
  const subgroups = data.columns.slice(1)

  // list of groups (fiscal periods)
  const groups = data.map(d => d.Period)

  // Create X axis
  const x = d3.scaleBand()
      .domain(groups)
      .range([0, width])
      .padding([0.2])
  
  // add X axis to SVG
  svg2.append("g")
    .attr("transform", "translate(" + margin.left + "," + (height + 10) + ")")
    .call(d3.axisBottom(x).tickSize(0));

  // Create Y axis
  const y = d3.scaleLinear()
    .domain([0, 200])
    .range([ height, 0 ]);
  
  // add Y axis to SVG
  svg2.append("g")
    .attr("transform", "translate(" + margin.left + ",10)")
    .call(d3.axisLeft(y));

  // Scale for the sub groupings
  const xSubgroup = d3.scaleBand()
    .domain(subgroups)
    .range([0, x.bandwidth()])
    .padding([0.05])

  // Color identifications for the subgroupings
  const color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(['#e41a1c','#377eb8','#4daf4a', '#800080'])

  // Show the bars
  svg2.append("g")
    .selectAll("g")
    // Add each of the bars to the chart iteratively
    .data(data)
    .join("g")
      .attr("transform", function(d) { return `translate(${x(d.Period)}, 0)`;})
    .selectAll("rect")
    .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
    .join("rect")
      .attr("x", function(d) {return xSubgroup(d.key) + margin.left;})
      .attr("y", function(d) {return (y(d.value) + 10);})
      .attr("width", xSubgroup.bandwidth())
      .attr("height", function(d) {return (height - y(d.value));})
      .attr("fill", function(d) {return color(d.key);})


    // set label parameters
    var labelY = height/2;
    var labelX = margin.left/2 - 5;

    // add label to SVG
    svg2.append('g')
      .attr('transform', 'translate(' + labelX + ',' + labelY + ")")
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('transform', 'rotate(-90)')
      .text('Revenues ($mm)');

    // set label parameters
    var labelY = height + margin.top;
    var labelX = width / 2 + margin.left;

    // add label to SVG
    svg2.append('g')
      .attr('transform', 'translate(' + labelX + ',' + labelY + ")")
      .append('text')
      .attr('text-anchor', 'middle')
      .text('Fiscal Period');

    // add legend
    var lineLegend = svg2.selectAll(".lineLegend").data(subgroups)
     .enter().append("g")
     .attr("class","lineLegend")
     .attr("transform", function (d,i) {
      position = width - margin.right - 50
            return "translate(" + position + "," + ((i*20)+25)+")";
        });
    lineLegend.append("text").text(function (d) {return d;})
     .attr("transform", "translate(15,9)"); //align texts with boxes
    lineLegend.append("rect")
     .attr("fill", function (d, i) {return color(d); })
     .attr("width", 10).attr("height", 10);

});

