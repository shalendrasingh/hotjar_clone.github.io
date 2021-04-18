
var personal_btn=document.getElementById("personal_btn");
var business_btn=document.getElementById("business_btn");
var agency_btn=document.getElementById("agency_btn");
var business_data=document.getElementById('business');
var perosnal_data=document.getElementById('personal');
var agency_data=document.getElementById('agency');
var data_plan=document.getElementById('plan');
  var acc = document.getElementsByClassName("accordian");
  for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
          // toggle bet adding and removing 
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      })
  }

  var slider=document.getElementById("slider");
  var output=document.getElementById("slider-data");
  output.innerHTML=slider.value;

   var check_box1=document.getElementById("check_box1");
   var slider_value=Number(output.innerHTML);
  
  // if(slider_value<20000){
     
  //   check_box1.checked=true;
  // }

  // to show the selected value on slider to output
  slider.oninput=function(){
      output.innerHTML=this.value;
  }

  var try_button=document.getElementsByClassName('tryit');
  function change_red(event){
      var item=event.target;
      item.style.backgroundColor="red";
      item.style.color="white";
  }
  for(var i=0;i<try_button.length;i++){
      try_button[i].addEventListener('click',change_red);
  }
  function personal(event){
      
      perosnal_data.style.display='flex';
      business_data.style.display='none';
      agency_data.style.display='none';
      data_plan.style.background = `linear-gradient(blue,pink)`;
      event.target.style.background=`linear-gradient(blue,pink)`;
      
  }
  function business(event){
      // var business_data=document.getElementById('business');
      business_data.style.display='block';
      agency_data.style.display='none';
      perosnal_data.style.display='none';
      data_plan.style.background = `linear-gradient(pink,yellow)`;
      event.target.style.background=`linear-gradient(pink,yellow)`;
  }
  function agency(event){
     
      agency_data.style.display='block';
      perosnal_data.style.display='none';
      business_data.style.display='none';
      data_plan.style.background = `linear-gradient(blue,skyblue)`;
      event.target.style.background=`linear-gradient(skyblue,blue)`;
  }
  personal_btn.addEventListener('click',personal);
  business_btn.addEventListener('click',business);
  agency_btn.addEventListener('click',agency);
