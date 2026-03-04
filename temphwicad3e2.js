var width = 1100,
    height = 500;

var fields = [{
        value: 365,
        size: 365,
        label: "y",
        update: function(date) {
            return date.getYear();
        }
    },
    {
        value: 13,
        size: 13,
        label: "m",
        update: function(date) {
            return date.getMonth();
        }
    },
   {
       value: 7,
       size: 7,
      label: "w",
      update: function(date) {
          return date.getWeeks();
         }
   },
    {
        value: 24,
        size: 24,
        label: "h",
        update: function(date) {
            return date.getHours();
        }
    },
    {
        value: 60,
        size: 60,
        label: "m",
        update: function(date) {
            return date.getMinutes();
        }
    },
    {
        value: 60,
        size: 60,
        label: "s",
        update: function(date) {
            return date.getSeconds();
        }
    },
];

var monthLength = [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28];

function addWeeks (weeks, date = new Date()) {  
  date.setDate(date.getDate() + weeks * 7)

  return date
  }


var arc = d3.svg.arc()
    .innerRadius(width / 10.5 - 60)
    .outerRadius(width / 10.5 - 5)
    .startAngle(0)
    .endAngle(function(d) {
      //  return (d.value / d.size) * 2 * 3.142857142857143;
          return (d.value / d.size) * 2 * 3.142857142857143;
    });

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var field = svg.selectAll(".field")
    .data(fields)
    .enter().append("g")
    .attr("transform", function(d, i) {
        return "translate(" + (i * 2 + 1.25) / 10.5 * width + "," + height / 2 + ")";
    })
    .attr("class", "field");

field.append("path")
    .attr("class", "path path--background")
    .attr("d", arc);

var path = field.append("path")
    .attr("class", "path path--foreground");

var label = field.append("text")
    .attr("class", "label")
    .attr("dy", ".35em");

(function update() {
    var now = new Date();

    field
        .each(function(d) {
            d.previous = d.value, d.value = d.update(now);
        });

    path.transition()
        .ease("elastic")
        .duration(750)
        .attrTween("d", arcTween);
    ù:
        label
        .text(function(d) {
            return d.value + d.label;
        });

    setTimeout(update, 1000 - (now % 1000));
})();

function arcTween(b) {
    var i = d3.interpolate({
        value: b.previous
    }, b);
    return function(t) {
        return arc(i(t));
    };
}
