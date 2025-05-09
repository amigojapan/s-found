function UP_KEY_PRESSED(){
    foward(10);
  
  }
  function DOWN_KEY_PRESSED(){
    foward(-10);
  
  }
  function LEFT_KEY_PRESSED(){
    turn_right(-10);
  
  }
  function RIGHT_KEY_PRESSED(){
    turn_right(10);
  
  }
  function ON_STARTUP(){
    set_current_sprite_name("arrow");
  }