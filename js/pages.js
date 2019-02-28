/* Retrieve pages for an authenticated user on index page. */

var add_page_html =
  "<div class='col-4'>" +
    "<div id='page-new' class='card'>" +
      "<span id='new-page-btn'><img src='./octicons-8.4.2/build/svg/plus.svg' width='20%'></span>" +
    "</div>" +
  "</div>";

var db = firebase.firestore();
var uid = Cookies.get('uid');
var user_ref = db.collection('users').doc(uid);

var pages_html = ''

user_ref.get().then(function (doc){
  if (doc.exists) {
    // do something with doc.date() data
  }
})

user_ref.collection('pages').get().then(function (snapshot){
  snapshot.docs.forEach(function (doc){
    if (doc.exists) {
      pages_html +=
        "<div class='col-4'>" +
          "<div id='page-" + doc.id + "' class='card'>" +
            "<span>" + doc.data().name + "</span>" +
          "</div>" +
        "</div>";
    }
  })
  $('#pages .row').html(pages_html + add_page_html);
}).then(function (){
  document.getElementById('new-page-btn').addEventListener('click', function(){
    $('#new-page-modal').modal('show')
  })
})
