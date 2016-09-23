"use strict"

console.log("hello world");

window.onload = function() {

  var outerDiv = document.getElementById('outer-box');
  var body = document.getElementById('body');
  var colorArray = ['#bbef94', '#54b36a', '#a3fff4', '#92e7ef', '	#ff9f9f', '#c98263', '#8b675e', '#49403c', '#292727', 'white'];
  var userPicksColor;

  createDivGrid(12,20);
  createClickEventForGrid('click');

  var outerColorDiv = document.createElement('div');
  outerColorDiv.className = "outer-color-div";
  body.appendChild(createColorPicker(colorArray.length, 'click'));
  //console.log(outerDiv)

//function creates divs for grid
  function createDivGrid(outerBoxes, innerBoxes) {
    for (let i = 0; i < outerBoxes; i++) {
      var outInnerBox = document.createElement('div');
      outInnerBox.className = "out-inner-box";

      for (let j = 0; j < innerBoxes; j++) {
        var innerBox = document.createElement('div');
        innerBox.className = "inner-boxes";
        outInnerBox.appendChild(innerBox);
        console.log(outInnerBox);
      }
      outerDiv.appendChild(outInnerBox);
    }
  }

//function creates an event listner for pixel boxes
  function createClickEventForGrid(eventName){
    outerDiv.addEventListener(eventName, function(event){
      if(event.target.className === 'inner-boxes'){
        event.target.style.backgroundColor = userPicksColor;
      } else {
        console.log("NOPE");
      }//target is most specific element
    });
  }


//function creates color pallete and adds an event listener
  function createColorPicker(numberOfBoxes, eventName){
    for (let i = 0; i < numberOfBoxes; i++) {
      let colorDivs = document.createElement('div');
      colorDivs.className = 'color-boxes color-box-' + (i+1);
      colorDivs.style.backgroundColor = colorArray[i];
      outerColorDiv.appendChild(colorDivs);
    }
    outerColorDiv.addEventListener(eventName, function(event){
      userPicksColor = event.target.style.backgroundColor;
      console.log(userPicksColor);
    });

    return outerColorDiv;
  }


//add a label and input type
  var colorLabel = document.createElement('label');
  colorLabel.className = "color-label";
  colorLabel.textContent = 'Pick a color of your own!';
  var inputColor = document.createElement('input');
  inputColor.type = 'color';
  inputColor.value = '#ffffff';
  colorLabel.appendChild(inputColor);
  outerColorDiv.appendChild(colorLabel);

  inputColor.addEventListener('input', function(event){
    userPicksColor = inputColor.value;
    console.log(userPicksColor);
  });
};

//
