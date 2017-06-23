function sendMessage() {

    // The URL to firebase app
    var firebase_url = "https://kelseymeranda-9e3d4.firebaseio.com/messages";

    //Create message
    var message = {
        'name': $("#name").val(),
        'phone': $("#phone").val(),
        'email': $("#email").val(),
        'message': $("#message").val()
    };

    //Push message to Firebase
    var messagesRef = new Firebase(firebase_url);
    var newMessageRef = messagesRef.push();
    newMessageRef.set(message);

    //If you want to know path
    var path = newMessageRef.toString();
    console.log(path);

    //Clear form
    clearFields();
}

function clearFields() {
    $("#name").val('');
    $("#phone").val('');
    $("#email").val('');
    $("#message").val('');
}
