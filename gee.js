function nameChecker(){
    var name;
    name = document.getElementById("Name").value; 
    if(name == "Adrian" ||	name == "adrian" ||	name == "Betschart" ||	name == "betschart"){
       document.getElementById("span2").innerText="You are so fucking gee"; 

    }  else if(name == "Andreas"  ||	name == "andreas" ){
        document.getElementById("span2").innerText="Bro, you're a fucking chad"; 


    }   else if(name == "Ali"  ||	name == "ali" ){
        document.getElementById("span2").innerText="YOU ARE A GOD"; 
        
    } else if(name == "Denis"  ||	name == "denis" ){
        document.getElementById("span2").innerText="You're worse! You're a fucking bully and a homophobe!!"; 
  } else{
        document.getElementById("span2").innerText="Naah bro, you're fine"; 
    }
    }
