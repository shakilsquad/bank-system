const submitButton =document.getElementById('submit-button').addEventListener('click',function(){
     
      const userEmail = document.getElementById('user-email');
      const email = userEmail.value;
      // console.log(email);
      const userPassword = document.getElementById('user-password');
      const password = userPassword.value;
      // console.log(email,password)
      if (email === 'shakil860@gmail.com' && password ==='1234')  {
            window.location.href='bank.html';
      }
      else{
            alert('Place Inert a Valid UserName && Password')
      }
})