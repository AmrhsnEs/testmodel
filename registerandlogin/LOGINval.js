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

function validate()
{
    var name = document.getElementById("name").value;  
    var Password = document.getElementById("pass").value;  
    var news = document.getElementById("chk").value;  
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (!isNaN(name[0]) || name < 0 || name > 9) 
    {
        alert("نام کاربری با عدد شروع نشود");
        name.focus();    
        return false; 
    }  
    
    else if(Password.match(upperCaseLetters) || Password.match(lowerCaseLetters) || Password.match(numbers))
    {
        alert("عدد حروف بزرگ حروف کوچیک ");
        Password.focus();    
        return false; 
    } 
    else 
    {
        alert("اطلاعات با موفقیت ارسال شد");
        return true;
    }
  
}
  
  