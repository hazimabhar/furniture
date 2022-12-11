function register(e) {
  event.preventDefault();
  let fullname = document.getElementById("fullname").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  let phonenumber = document.getElementById("phonenumber").value;
  let address = document.getElementById("address").value;
  let state = document.getElementById('state').value;
  let postcode = document.getElementById('postcode').value;
  let city = document.getElementById('city').value;
  let fullnameresult = document.getElementById('fullname-result');
  let usernameresult = document.getElementById('username-result');
  let passwordresult = document.getElementById('password-result');
  let emailresult = document.getElementById('email-result');
  let phonenumberresult = document.getElementById('phonenumber-result');
  let addressresult = document.getElementById('address-result');




  let customer = {
    fullname: fullname,
    username: username,
    password: password,
    email: email,
    phonenumber: phonenumber,
    address: address,
    state: state,
    postcode:postcode,
    city:city
  };

  if (fullname == "") {
    fullnameresult.innerHTML = '*fullname must be filled out';
  }
  else
  {
    fullnameresult.innerHTML = '';
  }
  if (username == "") {
    usernameresult.innerHTML = '*username must be filled out';
  }
  else
  {
    usernameresult.innerHTML = '';
  }
  if (password == "") {
    passwordresult.innerHTML = '*password must be filled out';
  }
  else if (password.length <8) {
    passwordresult.innerHTML = '*password must contain more than 8 character';
   }
  else
  {
    passwordresult.innerHTML = '';
  }
   if (email == "") {
    emailresult.innerHTML = '*email must be filled out';
  }
  else
  {
    emailresult.innerHTML = '';
  }
  if (phonenumber == "") {
    phonenumberresult.innerHTML = '*phone number must be filled out';
  }
  else
  {
    phonenumberresult.innerHTML = '';
  }
   if (address == "") {
    addressresult.innerHTML = '*address must be filled out';
  }
  else
  {
    addressresult.innerHTML = '';
  }
  if (state == "state") {
    alert("Choose your state");
    return false;
  }
  if (postcode == "postcode") {
    alert("Choose your postcode");
    return false;
  }
  if (city == "city") {
    alert("Choose your city");
    return false;
  }
  if (fullname != "" && username != "" && password != "" && password.length >= 8 && email != "" && phonenumber != "" && address != "" && state != "state" && postcode != "postcode" && city != "city")
  {
    let json = JSON.stringify(customer);
    localStorage.setItem(username, json);
    alert("Your register is succesfull! You can click to login button below");
  }
}

function login()
{
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let usernameresult = document.getElementById('username-result');
  let passwordresult = document.getElementById('password-result');

  let customer = localStorage.getItem(username);
  let data = JSON.parse(customer);
  if (username==='')
  {
    usernameresult.innerHTML="*wrong username"; 
  } 
  else if(username === data.username && password === data.password)
  {
    location.href="../html/homepage.html";
  }
  else
  {
    passwordresult.innerHTML="*wrong password";
  }



}
