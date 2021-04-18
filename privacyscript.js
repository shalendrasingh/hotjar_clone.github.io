
var button_more1=document.getElementById('more1');

    var button_more2=document.getElementById('more2');
    var button_more3=document.getElementById('more3');
    var button_more4=document.getElementById('more4');
    var button_more5=document.getElementById('more5');
    var button_more6=document.getElementById('more6');
    
    function show_more1(event){
     var pri_label1=document.getElementById('privacy_label1');
     pri_label1.style.display='block';

    }

    function show_more2(event){
     var pri_label2=document.getElementById('privacy_label2');
     pri_label2.style.display='block';

    }

    function show_more3(event){
     var pri_label3=document.getElementById('privacy_label3');
     pri_label3.style.display='block';

    }

    function show_more4(event){
     var pri_label4=document.getElementById('privacy_label4');
     pri_label4.style.display='block';

    }

    function show_more5(event){
     var pri_label5=document.getElementById('privacy_label5');
     pri_label5.style.display='block';

    }

    function show_more6(event){
     var pri_label6=document.getElementById('privacy_label6');
     pri_label6.style.display='block';

    }

    button_more1.addEventListener('click',show_more1);
    button_more2.addEventListener('click',show_more2);
    button_more3.addEventListener('click',show_more3);
    button_more4.addEventListener('click',show_more4);
    button_more5.addEventListener('click',show_more5);
    button_more6.addEventListener('click',show_more6);