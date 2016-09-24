"use strict"

console.log("hello world");

window.onload = function() {
    let mouseDown = false;
    let colorBrush = 'red';
    let container = document.getElementById('container');

    /* create canvas, pixels for canvas and add event listener */
    var canvas = createContainer('section', 'canvas', container);
    createPixelsBoxes(242, 'pixelBoxes', canvas, 10, 50, 40, 'click');

    /* create canvas, pixels for canvas and add event listener */
    var pallet = createContainer('section', 'pallet', container);
    setColorPallet('div', 'palletBoxes', pallet, '50px', '50px', 'click');


    createColorLabel('input', "color-label", 'input');

    /*Creates a section element*/
    function createContainer(element, className, parent) {
        var el = document.createElement(element);
        el.classList.add(className);
        parent.appendChild(el);
        return el;
        //console.log(container)
    }

    /*Builds a seriies of boxes for the canvas and sets the width and height of each box in the canvas */
    function createPixelsBoxes(num, className, parent, pxSize, width, height, eventName) {
      //let canvas = document.getElementsByClassName('canvas');

        for (let i = 0; i < width; i++) {
          for (let i = 0; i < height; i++) {
            let box = document.createElement('div');
            box.classList.add(className);
            box.style.width = pxSize + 'px';
            box.style.height = pxSize + 'px';
            box.style.backgroundColor = 'white';
            box.addEventListener('mouseover', mouseOverFunction)
            //console.log(box);
            canvas.appendChild(box);
          }  //  console.log(canvas);
        }

        canvas.style.width = ((width) * (pxSize+2)) + 'px';
        canvas.style.height = ((height) * (pxSize+2)) + 'px';

        parent.addEventListener(eventName, function(event) {
            if (event.target.className === 'pixelBoxes') {
                event.target.style.backgroundColor = colorBrush;
                event.target.style.borderColor = colorBrush;
            } else {
                console.log("NOPE");
            } //target is most specific element
        });
    }


    /*Adds color to the pallet out of an array of input colors. */
    function setColorPallet(element, className, parent, width, height, eventName) {
      let colorArray = ['#bbef94', '#54b36a', '#a3fff4', '#92e7ef', '	#ff9f9f', '#c98263', '#8b675e', '#49403c', '#292727', 'white'];

      for (let i = 0; i < colorArray.length; i++) {
          var box = document.createElement(element);
          box.classList.add(className);
          box.style.width = width;
          box.style.height = height;
          box.style.backgroundColor = colorArray[i];
          //console.log(box);
          parent.appendChild(box);
          //  console.log(canvas);
      }

        parent.addEventListener(eventName, setColorBrush);
    }

    function setColorBrush(event) {
        if (event.target === event.currentTarget) {
        } else {
            colorBrush = event.target.style.backgroundColor;
        }
    }



    /*Add an input element that lets the user pick their own color for the pixel boxes. */
    function createColorLabel(elementName, className, eventName) {
      var colorLabel = document.createElement(elementName);
      colorLabel.type = 'color';
      colorLabel.value = '#ffffff';
      colorLabel.classList.add(className);
      pallet.appendChild(colorLabel);
      colorLabel.addEventListener(eventName, function(event){
              colorBrush = event.target.value;
        });
    }

    /*Creates an event listenter for when the mouse is down or up. if the mouse is down. It sets the color of the div to the paint color */
    function mouseOverFunction(event){
      if(!mouseDown){
        return;
      } else {
        event.target.style.backgroundColor = colorBrush;
        event.target.style.borderColor = colorBrush;
      }
      console.log('im working!');
    }

    window.addEventListener('mousedown', function(event) {
        mouseDown = true;
      //  console.log("yep mouse is down");
    });

    window.addEventListener('mouseup', function(event) {
        mouseDown = false;
      //  console.log("yep mouse is down");
    });

}
