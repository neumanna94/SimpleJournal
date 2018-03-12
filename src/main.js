import $ from 'jquery';
import '../css/styles.css';
import { Entry } from './../js/Entry.js';
var allEntries = [];
function displayAllEntries(){
  $("#results").text("");
  for(var i = 0; i < allEntries.length; i ++){
    $("#results").append('<div class="col-md-2 result"> <h6> Entry Number: ' + i + ' </h6> <h2>Title:' + allEntries[i].title + '</h2><p> Body: ' + allEntries[i].body + '</p>');
  }
}
$(document).ready(function(){
  $("form#newEntry").submit(function(event) {
    event.preventDefault();
    var titleIn = $("#title").val();
    var bodyIn = $("#body").val();
    var newEntry = new Entry(titleIn, bodyIn);
    allEntries.push(newEntry);
  });
  $("form#functionSelector").submit(function(event) {
    event.preventDefault();
    // var functionSelector = parseInt($("#functionSelector").val());
  });
  $("#refresh").click(function(){
    console.log("Entered Refresh");
    displayAllEntries();
  });
});
