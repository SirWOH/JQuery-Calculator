var x = 0,
  y = 0,
  total = 0,
  buttonOne = document.querySelector('#button1'),
  buttonTwo = document.querySelector('#button2'),
  buttonThree = document.querySelector('#button3'),
  buttonFour = document.querySelector('#button4'),
  anwser = document.querySelector('.answer'),
  inputOne = document.querySelector('.input1'),
  inputTwo = document.querySelector('.input2');

window.onload = function(){

  buttonOne.onclick = function(){
    x = parseFloat(inputOne.value);
    y = parseFloat(inputTwo.value);

    total = x + y;

    anwser.innerHTML = total ;
    inputOne.value = '';
    inputTwo.value = '';

    };

    buttonTwo.onclick = function(){
      x = parseFloat(inputOne.value);
      y = parseFloat(inputTwo.value);

      total = x - y;

      anwser.innerHTML = total;
      inputOne.value = '';
      inputTwo.value = '';

      };

      buttonThree.onclick = function(){
        x = parseFloat(inputOne.value);
        y = parseFloat(inputTwo.value);

        total = x * y;

        anwser.innerHTML = total;
        inputOne.value = '';
        inputTwo.value = '';

        };

        buttonFour.onclick = function(){
          x = parseFloat(inputOne.value);
          y = parseFloat(inputTwo.value);

          total = x / y;

          anwser.innerHTML = total;
          inputOne.value = '';
          inputTwo.value = '';

        };

  };
