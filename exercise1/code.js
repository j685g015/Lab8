function password()
{
  var pass1 = newPassword.password.value;
  var pass2 = newPassword.rePassword.value;
  if (pass1 == pass2 && (pass1.length < 8 || pass2.length < 8))
  {
    alert("Error: password must be at least 8 characters in length");
  }
  else if (pass1 != pass2 && (pass1.length >= 8 && pass2.length >= 8))
  {
    alert("Error: fields do not match");
  }
  else if (pass1 != pass2 && (pass1.length < 8 || pass2.length < 8))
  {
    alert("Error: fields do not match and password must be at least 8 characters in length");
  }
  else if (pass1 == pass2 && (pass1.length >= 8 && pass2.length >= 8))
  {
    alert("Password Validated");
  }
}
