//constructor for an Entry;
export function Entry(inputTitle, inputBody) {
  this.id = allEntries.length;
  this.title = inputTitle;
  this.body = inputBody;
  this.date = Date.now();
};
//<----------------------------------CRUD METHODS------------------------------------>
//CREATE
Entry.prototype.CreateEntry = function(inputEntry){
  allEntries.push(inputEntry);
};
//READ
//Get entire list;
Entry.prototype.GetAllEntries = function(){
  return allEntries;
};
//Get entry at a particular index;
Entry.prototype.GetEntryById = function(inputId){
  const arrayId = findById(inputId);
  return allEntries[arrayId];
};
//UPDATE
Entry.prototype.UpdateEntryById = function(inputId, inputTitle, inputBody){
  const arrayId = findById(inputId);
  allEntries[arrayId].title = inputTitle;
  allEntries[arrayId].body = inputBody;
};
//DESTROY
Entry.prototype.DeleteEntryById = function(inputId){
  const arrayId = findById(inputId);
  Remove(arrayId);
};
//<--------------------------------END OF CRUD METHODS--------------------------------------->
//<---------------------------------PROTOTYPE METHODS---------------------------------------->
//Return number of words in entry
Entry.prototype.GetWords = function(inputId){
  const arrayId = findById(inputId);
  let wordCount = 0;

  return allEntries[arrayId].body.length;
};
//Return number of vowels
Entry.prototype.GetVowels = function(inputId){
  const arrayId = findById(inputId);
  let vowelCount = 0;
  let currentBody = allEntries[arrayId].body;
  for(var i = 0; i < currentBody.length; i ++){
    if(currentBody[i] == "a" || currentBody[i] == "i" || currentBody[i] == "e" || currentBody[i] == "o" || currentBody[i] == "u"){
      vowelCount ++;
    }
  }
  return vowelCount;
};
//Return first word of sentence
Entry.prototype.FirstWord = function(inputId){
  return FirstWordById(inputId, 1);
};
//Only display first 8 words
Entry.prototype.FirstEight = function(inputId){
  return FirstWordById(inputId, 8);
};
//<--------------------------------END OF PROTOTYPE METHODS--------------------------------------->
//<------------------------------------HELPER METHODS--------------------------------------->
//Reference: https://blog.mariusschulz.com/2016/07/16/removing-elements-from-javascript-arrays
Entry.prototype.Remove = function(element){
  const index = allEntries.indexOf(element);
  if(index !== -1) {
    array.splice(index,1);
  }
};
Entry.prototype.FindById = function(inputId){
  for(var i = 0; i < allEntries.length; i ++){
    if(allEntries[i].id == inputId)
    {
      return inputId;
    }
  }
  return -1;
}
//https://stackoverflow.com/questions/18558417/get-first-word-of-string
Entry.prototype.GetWords = function(inputId, numberOfWords){
  const arrayId = findById(inputId);
  let currentBody = allEntries[arrayId].body;
  var words = currentBody[i].split(" ");
  var outputWords = [];
  for(var i = 0; i < numberOfWords; i ++){
    outputWords.push(words[numberOfWords]);
  }
  return outputWords;
}
//<------------------------------END OF HELPER METHODS--------------------------------------->
