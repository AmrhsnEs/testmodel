var username = document.loginform.username;
var pass = document.loginform.pass;
function validateLog(){
    if(username.value == ""){
        alert("نام کاربری را وارد کنید");
        return false;
    }
    else if(pass.value == ""){
        alert("کلمه عبور را وارد کنید");
        return false;
    }
    else{
        return true;
    }
}