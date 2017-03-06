/**
 * 事件绑定函数的兼容性处理
 * @param {[type]} element [description]
 * @param {[type]} event   [description]
 * @param {[type]} handler [description]
 */
function addEvent(element, event, handler) {
  if (element.addEventListener) {
    element.addEventListener(event, handler, false)
  } else if (element.attachEvent) {
    element.attachEvent("on" + event, handler);
  } else {
    element["on" + event] = handler;
  }
}

window.onload = function() {
  var inputNum = document.getElementById("input-num");
  var panelBtn = document.getElementsByTagName("button");
  var visual = document.getElementById("visual");

  var queue = [];

  addEvent(panelBtn[0], "click", function() {
    var input = inputNum.value;
    inputNum.value = null;

    if ((/^[0-9]+$/).test(input)) {
      queue.unshift(input);
      renderChart();
    } else {
      alert("请输入整数！");
    }
  });

  addEvent(panelBtn[1], "click", function() {
    var input = inputNum.value;
    inputNum.value = null;

    if ((/^[0-9]+$/).test(input)) {
      queue.push(input);
      renderChart();
    } else {
      alert("请输入整数！");
    }
  });

  addEvent(panelBtn[2], "click", function() {
    if (queue.length !== 0) {
      alert(queue.shift());
      renderChart();
    } else {
      alert("队列已空");
    }
  });

  addEvent(panelBtn[3], "click", function() {
    if (queue.length !== 0) {
      alert(queue.pop());
      renderChart();
    } else {
      alert("队列已空");
    }
  });

  function renderChart() {
    var innerHTML = "";
    for (var i = 0; i < queue.length; i++) {
      innerHTML += "<div class = 'bar' title = '" + queue[i] + "' style = 'height: " + queue[i]*20 +"px; width: 40px; background-color: green; left: " + 40*(i+1) + "px'>" + "</div>";
    }
    visual.innerHTML = innerHTML;
  }
}