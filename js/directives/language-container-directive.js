// NOTE: nbApp is defined in app.js
nbApp.directive("languageContainerDirective", function() {
    return {
        restrict : 'E',
        templateUrl : 'js/templates/language-container.html',
        scope: {
          color: "@",
          language: "@",
          reading: "@",
          writing: "@",
          listening: "@",
          speaking: "@"
        },
        link: function(scope, element, attrs) {
          scope.color = attrs.color;
          scope.language = attrs.language;
          scope.reading = attrs.reading;
          scope.writing = attrs.writing;
          scope.listening = attrs.listening;
          scope.speaking = attrs.speaking;

          scope.$watch('language', function(nV, oV) {
            if(nV){
                RadarChart.defaultConfig.color = function() {};
                RadarChart.defaultConfig.radius = 3;
                RadarChart.defaultConfig.w = 200;
                RadarChart.defaultConfig.h = 200;

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
                    className: attrs.language, // optional can be used for styling
                    axes: [
                      {axis: "Reading", value: attrs.reading},
                      {axis: "Writing", value: attrs.writing},
                      {axis: "Listening", value: attrs.listening},
                      {axis: "Speaking", value: attrs.speaking},
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
                var svg = d3.select('.' + attrs.language).append('svg')
                  .attr('width', cfg.w + cfg.w + 50)
                  .attr('height', cfg.h + cfg.h / 4);
                svg.append('g').classed('single', 1).datum(mapData()).call(chart);

                // many radars
                chart.config({w: cfg.w / 4, h: cfg.h / 4, axisText: false, levels: 0, circles: true});
                cfg = chart.config();

                console.log('Rendering new language Radar Viz! --> ' + attrs.language);
            }
          })

        }
    };
});
