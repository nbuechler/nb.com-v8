RadarChart.defaultConfig.color = function() {};
RadarChart.defaultConfig.radius = 3;
RadarChart.defaultConfig.w = 300;
RadarChart.defaultConfig.h = 300;

/*
 * 0 - No Practical Proficiency
 * 1 - Elementary Proficiency
 * 2 - Limited Working Proficiency
 * 3 - Minimum Professional Proficiency
 * 4 - Full Professional Proficiency
 * 5 - Native or Bilingual Proficiency
   Read: the ability to read and understand texts written in the language
   Write: the ability to formulate written texts in the language
   Listen: the ability to follow and understand speech in the language
   Speak: the ability to produce speech in the language and be understood by its speakers.
 */
var data = [
  {
    className: 'german', // optional can be used for styling
    axes: [
      {axis: "reading", value: 4},
      {axis: "writing", value: 4},
      {axis: "listening", value: 5},
      {axis: "speaking", value: 4},
    ]
  },
];
function mapData() {
  return data.map(function(d) {
    return {
      className: d.className,
      axes: d.axes.map(function(axis) {
        return {axis: axis.axis, value: axis.value};
      })
    };
  });
}

var chart = RadarChart.chart();
var cfg = chart.config(); // retrieve default config
var svg = d3.select('.allLanguages').append('svg')
  .attr('width', cfg.w + cfg.w + 50)
  .attr('height', cfg.h + cfg.h / 4);
svg.append('g').classed('single', 1).datum(mapData()).call(chart);

// many radars
chart.config({w: cfg.w / 4, h: cfg.h / 4, axisText: false, levels: 0, circles: false});
cfg = chart.config();
function render() {
  setTimeout(render, 1000);
}
render();
