var fname = document.myform.fname;
var lname = document.myform.lname;
var email = document.myform.email;
var phonenumber = document.myform.phonenumber;
var pass = document.myform.psw;
var Cpass = document.myform.Cpass;


function validate(){
    if(fname.value == ""){
        alert("نام را وارد کنید");
        return false;
    }
    else if(lname.value == ""){
        alert("نام خانوادگی را وارد کنید");
        return false;
    }
    else if(email.value == ""){
        alert("ایمیل را وارد کنید");
        return false;
    }
    else if(phonenumber.value == ""){
        alert("شماره تلفن همراه را وارد کنید");
        return false;
    }
    else if(pass.value == ""){
        alert("کلمه عبور را وارد کنید");
        return false;
    }
    else if(Cpass.value == ""){
        alert(" تایید کلمه عبور را وارد کنید");
        return false;
    }
    else if(pass.value != Cpass.value){
        alert(" کلمه عبور شما با تایید کلمه عبور یکی نمی باشد ");
        return false;
    }
    else{
        alert("done");
        return true;
    }
}

function myFunction(y){
    var x = document.getElementById(y);
    if(x.type == "password"){
        x.type = "text";
    }else{
        x.type = "password";
    }
}
