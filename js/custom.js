jQuery(document).ready(function(){

    jQuery(".demoG").ublue_ImageCarousel({
		ubAutoPlay:"off", 		
		ubEffect:"fade", 			
		ubAutoBtn:"off" 			
	});




    // accordiom js
    jQuery('#accordion-demo').accordiom();

    // owl carousel
    jQuery(".owl-carousel").owlCarousel({
        items:1,
        nav:true,
        loop:true,
    });
      










});
function increaseValue(button, limit) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;
    if(limit && value >= limit) return;
    numberInput.innerHTML = value+1;
  }
  
  
  function decreaseValue(button) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;  
    if(value < 1) return;
    numberInput.innerHTML = value-1;
  }