# Developer notes

## 2017-01-19 Notes on Anki concept and data model

Anki uses a two SQLite databases for data storage. One for the text information and the other one for media. Both are packed into a zip file which has the extension `apkg`.

Most prominent are the **notes** and the **cards** tables. Notes are for the data and on which the cards are based. The cards are presented to the user as questions and answers.

This issue is about writing a summary of the documentation how the Anki app works. 

It  will serve as a basis for comparing / finding a mapping / requests for the LearnWords file format. It will as well serve as a basis for extending adapting the  LearnWords file format.


Elements used by Anki

- cards
- card templates
- notes
- note types
- fields
- decks
- formatting with HTML/CSS
- study options settings

Anki uses _cards_.

http://ankisrs.net/docs/manual.html#cards
_A question and answer pair is called a **card**._


_Cards_ are made from _notes_.
http://ankisrs.net/docs/manual.html#card-types

_Notes_ have a _type_. The type determines which _fields_ they have.	

Every note type has at least one _card template_. Note fields are placed on the card template.

They are specified as text like this 

    {{FieldName}}.

Cards have a front and a back side. What goes on these sides is specified by the `card templates`.


There are a few _special fields_ that Anki always has available for any card template, for any
note type, in any deck:

* `{{FrontSide}}` – Already shown in the Basic note type above. This is replaced with
a complete copy of whatever is in the front card template. Note that this cannot
be used inside the front template, only in the back template.
* `{{Tags}}` – The tags from this note.
* `{{Type}}` – The type of note that this card was created from.
* `{{Deck}}` – The deck that this card belongs to.
* `{{Card}}` – The name of this card type.


A deck is a group of cards. http://ankisrs.net/docs/manual.html#decks

Anki’s templates and formatting are all done with HTML (Hypertext Markup Language).
For styling CSS is used.


Cards go through several stages in their lifetime: `New`, `Learning`, and `Reviewing`.



Anki has a limit on the number of cards which are new each day and which may be reviewed each day.

Default value for new cards per day: 20
Default value for maximum number of cards to be reviewed each day: 100

These values belong to the study options for each deck.


http://ankisrs.net/docs/manual.html#importing

Notes are designed to represent closely related information, and to
make it easy to reorganize where that information appears on a card.
In the context of language learning, notes are useful for representing
things like a phrase-translation pair, a phrase-translation-reading
triplet, and so on. All of these relationships are 1:1 - a given
phrase has only one

The data field `word` in LW2 corresponds to `front` in Anki. The field `back` to `translate`.

Front and back fields in Anki may contain HTML text. And multimedia inclusion is done as follows

for pictures the HTML tag is used.

     <img src="myimage.jpg">

for sound files this convention 

     [sound:myaudio.mp3]


https://github.com/ewnd9/anki-apkg-export creates an Anki package.


## 2016-12-31 LWdb 1 and LWBoxOfquestions API 2


Spec LWBoxOfquestions
````JavaScript
  it("should support the Box API 2", function() {

    // construction of empty db
    var lw = BoxOfQuestions(LWdb('learnWords')); 

    expect(lw).toHaveString("version");

    expect(lw).toHaveMethod("question");
    expect(lw).toHaveMethod("answer");
    expect(lw).toHaveMethod("moveQuestionForward");
    expect(lw).toHaveMethod("moveQuestionBackwards");

    // synonyms
    expect(lw).toHaveMethod("answerWasCorrect");
    expect(lw).toHaveMethod("answerWasWrong");


    expect(lw).toHaveMethod("importFrom");
    expect(lw).toHaveMethod("wordsToRepeat");


    expect(lw).toHaveMethod("wordsWithStepValue");
    expect(lw).toHaveMethod("addMoreWordsForLearning");
    expect(lw).toHaveMethod("chooseRandomObject");
    expect(lw).toHaveMethod("config");
    expect(lw).toHaveMethod("status");


  });

````


Spec LWdb
````JavaScript
  it("should support API 1", function() {

    expect(lwdb).toBeObject();
    
    expect(lwdb).toHaveString("dbName");
    expect(lwdb.dbName).toBe("LearnWords");

    expect(lwdb).toHaveMethod("getSettings");
    expect(lwdb).toHaveMethod("putSettings");

    expect(lwdb).toHaveMethod("putWord");
    expect(lwdb).toHaveMethod("getWord");

    expect(lwdb).toHaveMethod("removeWords");
    expect(lwdb).toHaveMethod("destroy");

    expect(lwdb).toHaveMethod("persistentStorageOK");
    expect(lwdb).toHaveMethod("isOK");
    expect(lwdb).toHaveMethod("numberOfWords");

    expect(lwdb).toHaveMethod("importFrom");
    expect(lwdb).toHaveMethod("loadWords");

    expect(lwdb).toHaveMethod("keysOfAllWords");
    expect(lwdb).toHaveMethod("allWords");
 

  });

````



## 2016-12-31 Tags property in word list - Import/Export LW2 CSV file into Anki


The word entry object type has been extended to include a `tags` field.

Below are screen shots how this file type may be imported into Anki.

![Import dialog box](Anki_Desktop_2_CSV_Import_en-ge_2016-12.png)

Anki main window after CSV import

![Main window after CSV import](Anki_Desktop_Main_Window_After_CSV_Import_2016-12.png)


![Browse view of imported file](Anki_Desktop_2_Browse_View_en-ge_deck_2016-12.png)

## Anki SQLite database export of LW2 CSV data

see [Log file](../data/anki/anki-db.log)


## 2016-12-01 LWdb 1 API


Part of LearnWords1 LWdb API (master branch)

````JavaScript
// API as provided by LearnWords1
LWdb.prototype.readItem = function(key) {
  // something 
  throw new Error("not yet implemented");

};

LWdb.prototype.removeItem = function(key) {
  // something 
  throw new Error("not yet implemented");

};

LWdb.prototype.storeItem = function(key, value) {
  // something 
  throw new Error("not yet implemented");
};

LWdb.prototype.init = function(key) {
  // something 
  throw new Error("not yet implemented");
};
````


## 2016-12-01 LWdb API

From: https://github.com/e1r0nd/LearnWords/issues/58 and wiki page


### LearnWords2016 branch

Branch https://github.com/hhzl/LearnWords/tree/LearnWords2016/js/utils


**Alphabetical**
````
 grep ": function(" LWdb2016.js | sort

destroy: function(){
dumpWords: function(aKeyPrefix) {
get: function(key){
getSettings: function(){
init: function(dbName){
isEmpty: function(key){
isLocalStorageAvailable: function() {
loadWords: function(theWords) {
put: function(key, value){
putSettings: function(theSettingsObj){
remove: function(key){
removeObjects: function(aKeyPrefix){
removeWords: function(){
````

**By categories**

db related
````
destroy: function(){
init: function(dbName){
isEmpty: function(key){
isLocalStorageAvailable: function() {
````

objects (words) related
````
dumpWords: function(aKeyPrefix) {
get: function(key){
loadWords: function(theWords) {
put: function(key, value){
remove: function(key){
removeObjects: function(aKeyPrefix){
removeWords: function(){
````

settings related
````
getSettings: function(){
putSettings: function(theSettingsObj){
````



### Master branch

**Alphabetical**
````
grep ": function(" LWdbMaster.js | sort

destroy: function(){
dumpWords: function(aKeyPrefix) {
getSettings: function(){
init: function(dbName){
isEmpty: function(key){
isLocalStorageAvailable: function() {
loadWords: function(theWords) {
putSettings: function(theSettingsObj){
readItem: function(key){
removeItem: function(key){
removeObjects: function(aKeyPrefix){
removeWords: function(){
storeItem: function(key, value){
````

**By categories**

db related
````
destroy: function(){
init: function(dbName){
isEmpty: function(key){
isLocalStorageAvailable: function() {
````

objects (words) related
````
dumpWords: function(aKeyPrefix) {
loadWords: function(theWords) {
readItem: function(key){
removeWords: function(){
removeItem: function(key){
removeObjects: function(aKeyPrefix){
storeItem: function(key, value){

````

Settings related
````
getSettings: function(){
putSettings: function(theSettingsObj){
````

For differences see https://github.com/e1r0nd/LearnWords/issues/58


### LW2 Master branch

````
grep "function(" LWdb.js | sort
````

15 methods

````
LWdb.prototype.allWords = function() {
LWdb.prototype.destroy = function(anObject) {
LWdb.prototype.getSettings = function() {
LWdb.prototype.getWord = function(anInteger) {
LWdb.prototype.importFrom = function(theWords) {
LWdb.prototype.isOK = function() {
LWdb.prototype.keysOfAllWords = function() {
LWdb.prototype.loadWords = function(theWords) {
LWdb.prototype.numberOfWords = function() {
LWdb.prototype.open = function() {
LWdb.prototype.persistentStorageOK = function() {
LWdb.prototype.put = function(word) {
LWdb.prototype.putSettings = function(anObject) {
LWdb.prototype.removeWords = function() {
LWdb.prototype.wdKeyFor = function(anInteger) { 
````


By method categories

DB related

````
LWdb.prototype.destroy = function(anObject) {
LWdb.prototype.isOK = function() {
LWdb.prototype.open = function() {
LWdb.prototype.persistentStorageOK = function() {
````

Words related

````
LWdb.prototype.allWords = function() {
LWdb.prototype.getWord = function(anInteger) {
LWdb.prototype.importFrom = function(theWords) {
LWdb.prototype.keysOfAllWords = function() {
LWdb.prototype.loadWords = function(theWords) {
LWdb.prototype.numberOfWords = function() {
LWdb.prototype.put = function(word) {
LWdb.prototype.removeWords = function() {
LWdb.prototype.wdKeyFor = function(anInteger) { 
````


Settings releated

````
LWdb.prototype.getSettings = function() {
LWdb.prototype.putSettings = function(anObject) {
````


Compatibility with LW1 (not included anymore)
````
LWdb.prototype.readItem = function(key) {
LWdb.prototype.removeItem = function(key) {
LWdb.prototype.storeItem = function(key, value) {
````
