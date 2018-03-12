//constructor for an Entry;
export function Entry(inputTitle, inputBody) {
  this.title = inputTitle;
  this.body = inputBody;
  this.date = Date.now();
}
//<----------------------------------CRUD METHODS------------------------------------>
// //CREATE
// Entry.prototype.CreateEntry = function(inputEntry){
//   allEntries.push(inputEntry);
// };
// //READ
// //Get entire list;
// Entry.prototype.GetAllEntries = function(){
//   return allEntries;
// };
// //Get entry at a particular index;
// Entry.prototype.GetEntryById = function(inputId){
//   const arrayId = findById(inputId);
//   return allEntries[arrayId];
// };
// //UPDATE
// Entry.prototype.UpdateEntryById = function(inputId, inputTitle, inputBody){
//   const arrayId = findById(inputId);
//   allEntries[arrayId].title = inputTitle;
//   allEntries[arrayId].body = inputBody;
// };
// //DESTROY
// Entry.prototype.DeleteEntryById = function(inputId){
//   const arrayId = findById(inputId);
//   Remove(arrayId);
//<--------------------------------END OF CRUD METHODS--------------------------------------->
//<---------------------------------PROTOTYPE METHODS---------------------------------------->
//Return number of words in entry
Entry.prototype.GetWords = function(inputBody){
  let wordCount = 0;
  let operateOnMe = inputBody.split("");
  for(var i = 0; i < operateOnMe.length; i ++){
    wordCount++;
  }
  return wordCount;
};
//Return number of vowels
Entry.prototype.GetVowels = function(inputBody){
  let vowelCount = 0;
  let operateOnMe = inputBody.split("");
  for(var i = 0; i < operateOnMe.length; i ++){
    if(inputBody[i] == "a" || inputBody[i] == "i" || inputBody[i] == "e" || inputBody[i] == "o" || inputBody[i] == "u"){
      vowelCount ++;
    }
  }
  return vowelCount;
};
//https://stackoverflow.com/questions/18558417/get-first-word-of-string
Entry.prototype.GetWords = function(inputBody, numberOfWords){
  var words = inputBody.split(" ");
  var outputWords = [];
  for(var i = 0; i < numberOfWords; i ++){
    outputWords.push(words[i]);
  }
  return outputWords;
};
//<--------------------------------END OF PROTOTYPE METHODS--------------------------------------->
//<------------------------------------HELPER METHODS--------------------------------------->
//Reference: https://blog.mariusschulz.com/2016/07/16/removing-elements-from-javascript-arrays
// Entry.prototype.Remove = function(element){
//   const index = allEntries.indexOf(element);
//   if(index !== -1) {
//     array.splice(index,1);
//   }
// };
// Entry.prototype.FindById = function(inputId){
//   for(var i = 0; i < allEntries.length; i ++){
//     if(allEntries[i].id == inputId)
//     {
//       return inputId;
//     }
//   }
//   return -1;
// }
//<------------------------------END OF HELPER METHODS--------------------------------------->
