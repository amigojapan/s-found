//main

var number_of_tries, magic_number, value;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}

/**
 * Describe this function...
 */
function guess(value) {
  number_of_tries = number_of_tries + 1;
  if (number_of_tries == 10) {
    echo((String('10 tries! you lose! the numer was:') + String(magic_number)));
  } else {
    if (value < magic_number) {
      echo('Too low.');
      input_trigger_label('entry','what is your guess?:',ON_INPUT);
    }
    if (value > magic_number) {
      echo('Too high.');
      input_trigger_label('entry','what is your guess?:',ON_INPUT);
    }
    if (value == magic_number) {
      echo('you got it!');
    }
  }
}


function ON_STARTUP(){
  magic_number = mathRandomInt(1, 100);
  number_of_tries = 0;
  echo('computer: I have chosen a number from 1 to 100, you have 10 tries');
  input_trigger_label('entry','what is your guess?:',ON_INPUT);
}
function ON_INPUT(){
  if ((label) == 'entry') {
    guess((user_answer));
  }
}