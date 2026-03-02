# [Welcome to the temphicad3e.js ](https://github.com/uoxyc/temphicad3e.js/wiki/Home/)


https://uoxyc.github.io/temphicad3e.js/index.html



<img width="1467" height="340" alt="image" src="https://github.com/user-attachments/assets/e990f746-f9f5-48f7-8ef6-30617a638e61" />

https://uoxyc.github.io/temphicad3e.js/temphicad3e.js


```
var width = 960,
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

var arc = d3.svg.arc()
    .innerRadius(width / 10.5 - 60)
    .outerRadius(width / 10.5 - 5)
    .startAngle(0)
    .endAngle(function(d) {
      //  return (d.value / d.size) * 2 * Math.PI; 
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

```



# ci_temp A₽p html [hимик тАбЛи©А℞ мен'Де Лёв]

Temperature Simulation
----------------------
[inde_ხ](https://barionleg.github.io/ci_temp/index.html) by [©urva$TEC](https://github.com/barionleg/CurvasTES/blob/master/index.html)

A small visualization of particles and their reactions to different temperatures created in HTML5 and JavaScript.

A [Pen](https://codepen.io/barionleg/pen/ExrBmBg) by [Bankn8II©$A](https://codepen.io/barionleg) on [CodePen](https://codepen.io).

[License](https://codepen.io/license/pen/ExrBmBg).
