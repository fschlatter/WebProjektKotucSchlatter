var check = function() {
    if (document.getElementById('password').value == document.getElementById('passwordConfirm').value) 
    {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'Passwords matching';
      document.getElementById('submit_btn').disabled = false;
    } 
    else 
    {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'Passwords not matching';
      document.getElementById('submit_btn').disabled = true;
    }
  }