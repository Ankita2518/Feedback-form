function validate() {
    var modal = document.getElementById('myModal');
    var x,y,z;
 for(var j = 1 ; j <= 3 ; j++)
 {
    var radios = document.getElementsByName('ques'+j);
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked)
        { 
          formValid = true;
          
        }
        i++;        
    }

    if (!formValid) {
        // alert('Must check some option in question' +j);
        modal.style.display = "block";
        // break;
    }   
 }

}

var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

//for unchecking a radio button on double click

for(var j = 1 ; j <= 3 ; j++)
{
var myRadios = document.getElementsByName('ques'+j);
var setCheck;
var x = 0;
for(x = 0; x < myRadios.length; x++){

    myRadios[x].onclick = function(){
        if(setCheck != this){
             setCheck = this;
        }else{
            this.checked = false;
            setCheck = null;
    }
    };

}
}




