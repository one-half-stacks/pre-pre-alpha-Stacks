document.getElementById('sign-up-submit').addEventListener('click', function(){
  var email = document.getElementById('sign-up-email').value
  var password = document.getElementById('sign-up-password').value
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error){
    console.log('sign up error')
  }).then(function (){
    console.log('signed up')
    window.location.href = './index.html'
  })
})
