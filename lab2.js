  var button=document.getElementsByClassName('button')[0];
      button.addEventListener('click', function(event){
      event.preventDefault();
      var showMe = document.getElementsByClassName('hide')[0];
          showMe.setAttribute('style', 'display:block');
          button.setAttribute('style', 'display:none');
          function appearance(element, speed)
	  {
		  setInterval(function(){ element.style.opacity = +element.style.opacity + 0.05;}, speed);
		  
	  }
		  appearance(showMe, 100);
	                                      }
		  
		  )
	
  

var send = document.getElementsByClassName('send_button')[0];
var ness = document.getElementsByClassName('required');
console.log(ness);
send.addEventListener('click', function(){
        event.preventDefault();
            for (var i=0; i<ness.length; i++){
                 ness[i].classList.add('req');
                                             }
    
                                          }
                      )

