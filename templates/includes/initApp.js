initApp = function () {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User signed in
      Cookies.set('username', user.displayName)
      Cookies.set('uid', user.uid)
    } else {
      // User signed out
      window.location.href = './welcome.html'
    }
  }, function(error) {
    console.log(error)
  })
}
window.addEventListener('load', function() { initApp() })
