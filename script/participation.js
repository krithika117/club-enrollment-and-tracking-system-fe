firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        logout();
      location.replace("login.php")
    }
    
  })
  
  function logout() {
    firebase.auth().signOut()
    sessionStorage.email = '';
    sessionStorage.stat = ''
    sessionStorage.clear()
    location.replace("login.php")
  }
  
  if(sessionStorage.stat!='0'){
    logout();
}

var email = sessionStorage.email
$(document).ready(function () {
    // var email = "nss@gmail.com";
   
    view_participation();
    function view_participation() {
        
    
        var server = "http://127.0.0.1:5000";
        $.ajax({
            method: "POST",
            url: server + "/participation/view",
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                'email':email,
            }),
            dataType: 'json',
            success: function (data) {
                count = data.response.length;
                console.log(count);
                $('tbody').empty();
                               
                if (data.response.length == 0) {
                    document.querySelector('#prompt').classList.remove('d-none');
                    $('#prompt').empty();
                    $('#prompt').append("<img src='../dist/images/smilep.svg' width='150'><br>Looks like you're yet start participating :)");
                  } else {
                    document.querySelector('#prompt').classList.add('d-none');
                for (var i = 0; i < data.response.length; i++) {
                    var row = $('<tr><td>' +
                        data.response[i].name +
                        '</td><td>' +
                        // data.response[i].regNo +
                        // '</td><td>' +
                        data.response[i].eventName +
                        '</td><td>' +
                        
                        data.response[i].club +
                        '</td><td>' +
                        data.response[i].attendance+
                        '</td></tr>');
                    $('tbody').append(row);
                    console.log('done')
                }}
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error: ' + textStatus + ' - ' + errorThrown);
            }

        });
    }

 
 
});