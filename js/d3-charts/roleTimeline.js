var earlyYear = 1996;
var currentYear = new Date().getFullYear();

var roleData = [
		{"name" : "Artist", "startDate": 1996, "url": "artist",
		"endDate" : currentYear, "color": "#56222E", "fileName" : "src='images/web-rdy_icons/artist.jpg'"},
		{"name" : "Musician", "startDate": "2000", "url": "musician",
		"endDate" : currentYear, "color": "#763344", "fileName" : "src='images/web-rdy_icons/musician.jpg'"},
		{"name" : "Painter", "startDate": "2005", "url": "painter",
		"endDate" : currentYear, "color": "#6C3433", "fileName" : "src='images/web-rdy_icons/painter.jpg'"},
		{"name" : "Linguist", "startDate": "2005", "url": "linguist",
		"endDate" : currentYear, "color": "#606B81", "fileName" : "src='images/web-rdy_icons/linguist.jpg'"},
		{"name" : "Photographer", "startDate": "2008", "url": "photographer",
		"endDate" : currentYear, "color": "#824648", "fileName" : "src='images/web-rdy_icons/photographer.jpg'"},
		{"name" : "Graphic Designer", "startDate": "2009", "url": "graphic-designer",
		"endDate" : currentYear, "color": "#4D0036", "fileName" : "src='images/web-rdy_icons/graphic-designer.jpg'"},
		{"name" : "Journalist", "startDate": "2009", "url": "journalist",
		"endDate" : currentYear, "color": "#412F6B", "fileName" : "src='images/web-rdy_icons/journalist.jpg'"},
		{"name" : "Social Activist", "startDate": "2009", "url": "social-activist",
		"endDate" : currentYear, "color": "#44336A", "fileName" : "src='images/web-rdy_icons/social-activist.jpg'"},
		{"name" : "Social Scientist", "startDate": "2010", "url": "social-scientist",
		"endDate" : currentYear, "color": "#262561", "fileName" : "src='images/web-rdy_icons/social-scientist.jpg'"},
		{"name" : "Political Economist", "startDate": "2010", "url": "political-economist",
		"endDate" : currentYear, "color": "#181737", "fileName" : "src='images/web-rdy_icons/political-economist.jpg'"},
		{"name" : "Comparative Institutionalist", "startDate": "2010", "url": "comparative-institutionalist",
		"endDate" : currentYear, "color": "#3C5F7D", "fileName" : "src='images/web-rdy_icons/comparative-institutionalist.jpg'"},
		{"name" : "World Historian", "startDate": "2010", "url": "world-historian",
		"endDate" : currentYear, "color": "#181737", "fileName" : "src='images/web-rdy_icons/world-historian.jpg'"},
		{"name" : "Computer Programmer", "startDate": "2010", "url": "computer-programmer",
		"endDate" : currentYear, "color": "#632F5F", "fileName" : "src='images/web-rdy_icons/computer-programmer.jpg'"},
		{"name" : "Cultural Anthropologist", "startDate": "2010", "url": "cultural-anthropologist",
		"endDate" : currentYear, "color": "#171449", "fileName" : "src='images/web-rdy_icons/cultural-anthropologist.jpg'"},
		{"name" : "Sound Designer", "startDate": "2011", "url": "sound-designer",
		"endDate" : currentYear, "color": "#7F406B", "fileName" : "src='images/web-rdy_icons/sound-designer.jpg'"},
		{"name" : "Natural Scientist", "startDate": "2012", "url": "natural-scientist",
		"endDate" : currentYear, "color": "#296A52", "fileName" : "src='images/web-rdy_icons/natural-scientist.jpg'"},
		{"name" : "Engineer", "startDate": "2012", "url": "engineer",
		"endDate" : currentYear, "color": "#775923", "fileName" : "src='images/web-rdy_icons/engineer.jpg'"},
		{"name" : "Back-end Developer", "startDate": "2013", "url": "back-end-developer",
		"endDate" : currentYear, "color": "#767281", "fileName" : "src='images/web-rdy_icons/back-end-developer.jpg'"},
		{"name" : "Front-end Developer", "startDate": "2013", "url": "front-end-developer",
		"endDate" : currentYear, "color": "#31252F", "fileName" : "src='images/web-rdy_icons/front-end-developer.jpg'"},
		{"name" : "Software Engineer", "startDate": "2014", "url": "software-engineer",
		"endDate" : currentYear, "color": "#795731", "fileName" : "src='images/web-rdy_icons/software-engineer.jpg'"},
		{"name" : "Biologist", "startDate": "2015", "url": "biologist",
		"endDate" : currentYear, "color": "#348C35", "fileName" : "src='images/web-rdy_icons/biologist.jpg'"},
		{"name" : "Botanist", "startDate": "2015", "url": "botanist",
		"endDate" : currentYear, "color": "#101B13", "fileName" : "src='images/web-rdy_icons/botanist.jpg'"},
		{"name" : "Affective Engineer", "startDate": "2015", "url": "affective-engineer",
		"endDate" : currentYear, "color": "#796950", "fileName" : "src='images/web-rdy_icons/affective-engineer.jpg'"},
]


var margin = {top: 60, right: 40, bottom: 30, left: 50},
    width = 780 - margin.left - margin.right,
    height = 414 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width])
	.domain([d3.min(roleData, function(d) { return d.startDate; }), d3.max(roleData, function(d) { return d.endDate; })]);

var y = d3.scale.linear()
    .range([height, 0])
	.domain([0, height]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
	.ticks(currentYear - earlyYear)
	.tickFormat(function(d) { return (d); });;

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
	.ticks(0)
	.tickFormat(function(d,i) { return ("Role " + parseInt(i + 1)); });

var svg = d3.select("#roleChart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("text")
        .attr("x", (width / 2))
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .text("Roles Developed");

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("y", 57)
	  .attr("x", 10)
      .attr("dx", ".00em")
      .style("text-anchor", "")
      .html("(Hover/click over bar to see role info)");

  svg.selectAll(".bar")
      .data(roleData)
    .enter().append("rect")
      .attr("class", "bar")
	  .attr("id" , function(d, i) { return y(i); })
      .attr("x", function(d, i) { return x(d.startDate); })
      .attr("width", function(d, i) { return x(d.endDate) - x(d.startDate); })
      .attr("y", function(d, i) { return (height / roleData.length) * i; })
      .attr("height", function(d, i) { return (height / roleData.length) - 5; })
	  .attr("fill", function(d) {
		  return d.color;
		  })
	  .on("mouseenter", function(d) {
		  d3.select(this).attr("fill", "darkGray");
		  })
	  .on("mouseover", function(d) {
		  d3.select("#roleFocus").html(function() {
				  if(d.startDate != currentYear - 1){
				  return "<div style='margin-top: 70px'><a href='#/" + d.url + "'><span><img class='roleIcon-border'" + d.fileName + "/></span></a><br><h2 style='text-align:center'>" + parseInt(currentYear - d.startDate) + " years</h2></div>" ;
				  }
				  else{
				  return "<div style='margin-top: 70px'><a href='#/" + d.url + "'><span><img class='roleIcon-border'" + d.fileName + "/></span></a><br><h2 style='text-align:center'>" + parseInt(currentYear - d.startDate) + " year</h2></div>" ;
				  }
				});
			})
	  .on("click", function(d) {
		  d3.select("#roleFocus").html(function() {
				  if(d.startDate != currentYear - 1){
				  return "<div style='margin-top: 70px'><a href='#/" + d.url + "'><span><img class='roleIcon-border'" + d.fileName + "/></span></a><br><h2 style='text-align:center'>" + parseInt(currentYear - d.startDate) + " years</h2></div>" ;
				  }
				  else{
				  return "<div style='margin-top: 70px'><a href='#/" + d.url + "'><span><img class='roleIcon-border'" + d.fileName + "/></span></a><br><h2 style='text-align:center'>" + parseInt(currentYear - d.startDate) + " year</h2></div>" ;
				  }
				});
			})
	  .on("mouseleave", function(d) {
		  d3.select(this).attr("fill", d.color)
		  })
	  ;
