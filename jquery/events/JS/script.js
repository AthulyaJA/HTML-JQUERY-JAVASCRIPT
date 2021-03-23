/*$('#btn1').click(

 function fun1()
 {
	 $('#first').fadeToggle(3000);
	 
 }
 
 )*/
 
 /*$(document).ready(function()
 {
	 $('#btn1').click(fun1);
	 
	 function fun1()
	 
	 {
		 $('#first').fadeToggle();
		 
	 }
 }
 );*/
 /*$(document).ready(function()
 {
	 //$('#btn1').click(fun1);//single click
	 //$('#btn1').dblclick(fun1);//double click
	 /*$('#first').mouseenter(fun1);
	  $('#first').mouseleave(fun);*/
	 /* $('#first').hover(fun1,fun);
	  
	  
	 
	 
	 function fun1()
	 
	 {
		 $('#p').fadeOut();
		 
	 }
	 function fun()
	 
	 {
		 $('#p').fadeIn();
		 
	 }
	 
	 
 }
 );*/
 
 /* $(document).ready(function(){
	  
  $('#hide').click(fun1);
  $('#show').click(fun);
  
  function fun1()
  {
	  $('#first').hide();
	 
  }
  function fun()
  {
	 
	  $('#first').show();
  }
  
  }
  );*/
  
  /*$(document).ready(function()
  {
	  
	  $('#hide').click(function()
	  {
		$('#first').hide();  
	  });
	  $('#show').click(function()
	  {
		$('#first').show();  
	  });
	  
	  
	  $('#showhi').click(function()
	  {
		$('#first').toggle();  
	  });
	  $('#slideup').click(function()
	  {
		$('#first').slideUp();  
	  });
	  $('#slidedown').click(function()
	  {
		$('#first').slideDown();  
	  });
	  *//*$('#sdown').click(function()
	  {
		$('#first').toggle();  
	  });
	  
	  
  });*/
  
  /*$(document).ready(function()
  {
	  
	  
	  $('#ani').click(function()
	  {
		$('#box').animate({
			left:'150px',opacity:'0.4'
		},2000);  
	  });
  });*/
 /* $(document).ready(function()
  {
	  $('#tog').click(fun1);
	  
	  
	  
	  function fun1()
	 
	 {
		 $('#p').toggle(2000,function(){//call back funcation
			 alert("hello");
			 
		 });
		 
		 
	 }
	 
	 
});*/
 $(document).ready(function()
  {
	  /*$('#slideup').click(function()
	  {
		$('#first').slideUp(2000);  
	  });
	  $('#slidedown').click(function()
	  {
		$('#first').slideDown(2000);  
	  });
	  
	  $('#slideup').click(function()
	  {
		$('#first').fadeIn(2000);  
	  });
	  $('#slidedown').click(function()
	  {
		$('#first').fadeOut(2000);  
	  });*/
	  $('#sdown').click(function()
	  {
	  $('#first').slideUp().slideDwon().fadeIn().fadeOut();
	  
	  
	  
  })
  });		