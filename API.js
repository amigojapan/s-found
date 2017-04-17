//API to dump the contents of the JS stuff
var statement_number=0;
var variable_type;
var cycle=0;
var debuglog="";
//var end_update_loop=false;//you need to test for this in any kind of loop and event you have in your program
function dump_all(){ 
    //list all variable values
    cycle++;
    for(var o in window) { 
      if(window.hasOwnProperty(o)){
          debuglog+="cycle number:"+cycle+" statement_number:"+statement_number+" "+o+":"+eval(window.o);
      } 
    }
    /*
    for(o in window){ 
        if(window[o] === variable_type){
            console.log("cycle number:"+cycle+" statement_number:"+statement_number+" "+o+":"+eval(window.o));
        }
    }
    */
    if(num_cycles==cycle) console.log("END_HERE");
}
/*
} catch(err) {
    if(err=="end"){
        console.log("ended testing normally");
        
        end_update_loop=true;
        //loop thru all DOM elements
        var all = document.getElementsByTagName("*");
        for (var i=0, max=all.length; i < max; i++) {
            // this hack gets rid of event listeners
            var old_element = all[i];
            var new_element = old_element.cloneNode(true);
            old_element.parentNode.replaceChild(new_element, old_element);
        }
        
    } else {
        console.log("ERROR in eval:" + err);
        debugger;
    }
}
*/