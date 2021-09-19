function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName("formError")[0].innerHTML = error;
}

function validateForm() {
    var returnVal = true;
    var name = document.forms['myForm']["fname"].value;
    if (name.length < 3) {
        seterror("name", "*The legnth of name is too short.");
        returnVal = false;
    }
    else if (name.length > 60) {
        seterror("name", "*The legnth of phone is too long.");
        returnVal = false;
    }
    else {
        seterror("name", "");
    }
    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length < 10) {
        seterror("phone", "*The legnth of phone is too short.");
        returnVal = false;
    }
    else if (phone.length > 16) {
        seterror("phone", "*The legnth of phone is too long.");
        returnVal = false;
    }
    else {
        seterror("phone", "");
    }


    var password = document.forms['myForm']["fpassword"].value;
    var cpassword = document.forms['myForm']["fcpassword"].value;
    if (password !== cpassword) {
        seterror("cpassword", "*The password must be same.");
        returnVal = false;
    }

    else {
        seterror("cpassword", "");
    }
    var email = document.forms['myForm']["femail"].value;
    if (email.length > 60) {
        seterror("email", "*The length of email is too long.");
        returnVal = false;
    }

    else {
        seterror("email", "");
    }

    if (password.length < 6) {
        seterror("password", "*The password must be 6 letters long.");
        returnVal = false;
    }

    else {
        seterror("password", "");
    }


    return returnVal;
}