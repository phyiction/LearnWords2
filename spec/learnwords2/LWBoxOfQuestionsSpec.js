"use strict";

var BoxOfQuestions = require('../../src/BoxOfQuestions');
var LWdb = require('../../src/LWdb');
var wordlist = require('../../data/wordlist-en-ge.js'); 

var LW;

describe("BoxOfQuestions", function() {
    
  beforeEach(function() {

    	LW = function(){

		var db = new LWdb('learnWords');
        	// FIXME
		// db.loadWords(....)

		var box = new BoxOfQuestions(db);

		return box
        }();
        
  });


  it("should be able to create a BoxOfQuestions object", function() {

    expect(LW).not.toBe(null);
    expect(LW).not.toBe(undefined);

    expect(LW).toBeObject();

    expect(LW.db.name).toBeString("learnWords");
    expect(LW.db.numberOfWords()).toBeNumber(0);

  });



  it("should be able to load questions", function() {

    var previousNumberOfWords = LW.db.numberOfWords();
  
    LW.db.loadWords(wordlist);

    expect(LW.db.numberOfWords()).toBe(previousNumberOfWords + wordlist.length);

  
  });



  xit("should be able to process configuration information", function() {
    // the configuration 
    var aConfigObj = {"algorithm": "Leiter", "boxes": 5};
    LW.config(aConfigObj);     

    // expect code here
    fail("Implement me!");
  });




  xit("should be able to choose a next question, give options for answers and process the answer", function() {
    var q, a, opt, aChoice;

    q = LW.currQuestion();
    a = LW.currAnswer();
    opt = LW.currAnswerOptions(); // includes the correct answer
   
    LW.processAnswer(aChoice);  // after this there will be a new current question.

    // add expect code here
    fail("Implement me!");

  });


  xit("should be able to give status information", function() {
    // the configuration 
  
    var r = LW.status();
   
    // add expect code here    
    fail("Implement me!");

  });

});
