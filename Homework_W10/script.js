// Embed bar chart
var vg_1 = "barchart.json";
vegaEmbed("#barchart", vg_1).then(function(result) {
}).catch(console.error); 

// Embed choropleth map
var vg_2 = "choroplethmap.json";  
vegaEmbed("#choropleth", vg_2).then(function(result) {
}).catch(console.error);
