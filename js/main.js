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

let data1 = d3.csv('data/covid_impact_on_airport_traffic.csv', function(row) {
  const formatDate = d3.timeParse("%Y-%m-%d");
  return {
    PercentOfBaseline: +row.PercentOfBaseline
    Date: formatDate(row.Date)
  }
}).then(function(data) {
  console.log(data);

  //create Y axis, print to console the max
  let maxY = d3.max(data, function(d) {return d.PercentOfBaseline;})
  let yScale = d3.scaleLinear()
                  .domain([0, 100])
                  .range([height, 0]);

  svg1.append("g")
  .attr("transform", "translate(" + margin.left + ",0)")
  .call(d3.axisLeft(yScale));

  //add X axis
  let xScale = d3.scaleTime()
    .domain(d3.extend(data, function(d) { return d.Date;}))
    .range([0, width]);

  svg1.append("g")
    .attr("transform", "translate(" + margin.left + "," + height + ")")
    .call(d3.axisBottom(xScale));

  //add points TODO
  svg1.append('g')
        .selectAll("dot")
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xScale(d.Date); } )
        .attr("cy", function (d) { return yScale(d.PercentOfBaseline); } )
        .attr("r", 2)
        .attr("transform", "translate(" + 100 + "," + 100 + ")")
        .style("fill", "#CC0000");

});

// second visualization
let svg2 = d3.select('#vis2')
  .append('svg')
  .attr('preserveAspectRatio', 'xMidYMid meet') // this will scale your visualization according to the size of its parent element and the page.
  .attr('width', '100%') // this is now required by Chrome to ensure the SVG shows up at all
  .style('background-color', '#ccc') // change the background color to light gray
  .attr('viewBox', [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))
