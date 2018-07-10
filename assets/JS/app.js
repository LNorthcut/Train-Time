var config = {
    apiKey: "AIzaSyCwBI5f-ZBgoW1YtytqMTKMjQWJgLwtQaM",
    authDomain: "train-time-28e10.firebaseapp.com",
    databaseURL: "https://train-time-28e10.firebaseio.com",
    projectId: "train-time-28e10",
    storageBucket: "train-time-28e10.appspot.com",
    messagingSenderId: "435701617491"
  };
  firebase.initializeApp(config);


var database = firebase.database();

var trainname = "";
var destination = "";
var firsttime = "";
var frequency = "";

$("#addtrains").on("click", function(event){
    event.preventDefault();

    trainname = $("#train-input").val().trim();
    destination = $("#destination-input").val().trim();
    firsttime = $("#firsttrain-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    console.log("Train name: " + trainname);
    console.log("Destination: " + destination);
    console.log("First time: " + firsttime);
    console.log("Frequency: " + frequency);

    $("train-input").val("");
    $("destination-input").val("");
    $("firsttrain-input").val("");
    $("frequency-input").val("");

    database.ref().push({
        trainname: trainname,
        destination: destination,
        firsttime: firsttime,
        frequency: frequency,
    });






});