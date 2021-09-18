var SpeechRecognition = window.webkitSpeechRecognition;
var recogntion = new SpeechRecognition();

function Start(){
    document.getElementById("textbox").innerHTML = "";

    recogntion.Start();
}
recogntion.onresult  = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;

}