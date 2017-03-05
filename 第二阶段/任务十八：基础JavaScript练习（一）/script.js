/**
 * 事件绑定函数的兼容性处理
 * @param {[type]} element [description]
 * @param {[type]} event   [description]
 * @param {[type]} handler [description]
 */
function addEvent(element, event, handler) {
  if(element.addEventListener) {
    element.addEventListener(event, handler, false)
  }
  else if(element.attachEvent) {
    element.attachEvent("on"+event, handler);
  }
  else {
    element["on"+event] = handler;
  }
}

window.onload = function() {
  var inputNum = document.getElementById("input-num");
  var panelBtn =document.getElementsByTagName("button");

  var queue = [];

  addEvent(panelBtn[0], "click", function() {
    var input = inputNum.value;
    inputNum.value = null;

    if((/^[0-9]+$/).test(input)) {
      queue.unshift(input);
      render();
    }
    else {
      alert("请输入整数！");
    }
  });

  addEvent(panelBtn[1], "click", function() {
    var input = inputNum.value;
    inputNum.value = null;

    if((/^[0-9]+$/).test(input)) {
      queue.push(input);
      render();
    }
    else {
      alert("请输入整数！");
    }
  });

  addEvent(panelBtn[2], "click", function() {
    if(queue.length !== 0) {
      alert(queue.shift());
      render();
    }
    else {
      alert("队列已空");
    }
  });

  addEvent(panelBtn[3], "click", function() {
    if(queue.length !== 0) {
      alert(queue.pop());
      render();
    }
    else {
      alert("队列已空");
    }
  });

  function render() {

  }
}

