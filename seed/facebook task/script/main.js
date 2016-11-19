function validateData(){
    var name = document.getElementById("firstname").value;
    var namep=/^[a-zA-Z]{2,16}$/;

    var surname= document.getElementById("surname").value;

    var  email = document.getElementById("mail").value;
    var emailp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mobilep = /^[0-9]{10,10}$/;

    var  reemail = document.getElementById("remail").value;

    var  password= document.getElementById("pass").value;

    if(name == "") {
        document.getElementById("fnerror").innerHTML = "* required";
        return false;
    }
    else if(!name.match(namep)){
        alert("plz input valid first name");
        return false;
    }

    else{
        document.getElementById("fnerror").innerHTML = "";
    }



    if(surname == "") {
        document.getElementById("lnerror").innerHTML = "* required";
        return false;
    }
    else if(!name.match(namep)){
        alert("plz input valid last name");
        return false;
    }
    else{
        document.getElementById("lnerror").innerHTML = "";
    }



    if(email == "") {
        document.getElementById("eerror").innerHTML = "* required";
        return false;
    }
    else if(!email.match(emailp) && !email.match(mobilep)){
        alert("plz input valid email id or mobile no.");
        return false;
    }
    else{
        document.getElementById("eerror").innerHTML = "";
    }



    if(reemail == "") {
        document.getElementById("reerror").innerHTML = "* required";
        return false;
    }
    else if(email != reemail){
        alert("the email/mobile no. you enterd is not match with previous email/mobile no.");
        return false;
    }
    else{
        document.getElementById("reerror").innerHTML = "";
    }


    if(password == "") {
        document.getElementById("perror").innerHTML = "* required";
        return false;
    }
    else{
        document.getElementById("perror").innerHTML = "";
    }

    if(document.getElementById("day").selectedIndex == 0) {
        document.getElementById("doberror").innerHTML ="* plz input day";
        return false;
    }

    else if(document.getElementById("month").selectedIndex == 0) {
        document.getElementById("doberror").innerHTML ="* plz input month";
        return false;
    }

    else if(document.getElementById("year").selectedIndex == 0) {
        document.getElementById("doberror").innerHTML ="* plz input year";
        return false;
    }
    else{
        document.getElementById("doberror").innerHTML = "";
    }

    document.write("<h1 style='text-align:center; color:blue'>You are Successfully signup</h1>");
}

function validateLogin(){
    var email= document.getElementById("email").value;
    var emailp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mobilep = /^[0-9]{10,10}$/;

    var password=document.getElementById("password").value;


    if(email == "") {
        document.getElementById("eerror").innerHTML = "* required";
        return false;
    }
    else if(!email.match(emailp) && !email.match(mobilep)){
        alert("plz input valid email id or mobile no.");
        return false;
    }
    else{
        document.getElementById("eerror").innerHTML = "";
    }

    document.write("<h1 style='text-align:center; color:blue'>You are logged in now go to the real website.<a href='http://facebook.com'>facebook</a></h1>");
}