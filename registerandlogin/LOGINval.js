var username = document.loginform.username;
var pass = document.loginform.pass.value;

function validateLog(){
    
    if(username.value == ""){
        alert("نام کاربری را وارد کنید");
        return false;
    }
    else if(pass.value == ""){
        alert("کلمه عبور را وارد کنید");
        return false;
    }
    else if(pass.value != ""){
        var p = document.getElementById('pass').value,
        errors = [];
        if (p.length < 8) {
            errors.push("Your password must be at least 8 characters"); 
        }
        if (p.search("^[a-z]+$") < 0 ) {
            errors.push("Your password must contain at least one LowerCase letter.");
        }
        if (p.search("^[A-Z]+$") < 0 ) {
            errors.push("Your password must contain at least one UpperCase letter.");
        }
        if (p.search(/[0-9]/) < 0) {
            errors.push("Your password must contain at least one digit."); 
        }
        if (errors.length > 0) {
            alert(errors.join("\n"));
            return false;
        }
        return true;
    }
    else{
        return true;
    }
}