		var time = 30;
		var resetTime;
		var questions = ["What is my favorite animal?", "Where is my favorite place to visit?", "What is my favorite sport to play?", "Which instrument do I play?", "What did I major in at college?", "How many pets do I have?", "What is my favorite holiday?", "What is my favorite season?"];

		var answers = [["A. tiger", " B. giraffe", " C. elephant", " D. whale"], ["A. Myrtle Beach", " B. Nashville", " C. Disney World", " D. Charleston, SC"], ["A. soccer", " B. basketball", " C. swimming", " D. tennis"], ["A. mandolin", " B. trumpet", " C. piano", " D. guitar"], ["A. philosophy", " B. physics", " C. biology", " D. economics"], ['A. 1', ' B. 2', ' C. 3', ' D. 4'], ["A. Easter", " B. Thanksgiving" , " C. Christmas", " D. Independence Day"], ["A. Winter", " B. Spring", " C. Summer", " D. Fall"]];
		var answerCounter = 0;
		var wrongAnswer = 0;
		var correctAnswers = ['d', 'c', 'a', 'd', 'b', 'a', 'c', 'c'];
		var playerAnswers = [];

		var reset = function() {
			answerCounter=0;
			playerAnswers=[];
			time =30;
			clearInterval(countDown);
			location.reload();
		}

		var display = function() {

		for (var i = 0; i < questions.length; i++) {
			

    		$('#questions').append(questions[i] + '<br>' + '<input type="text" class="answerChoice' + i + '"></input>' + '<br>' + answers[i].join(" ") + '<br>' + '<br>');	
    	};

    		$('#questions').append('<div><input id="submitAnswers" type="submit"></input></div>');
    	}

    	var hideDisplay = function() {$('#questions').empty();
    	$('#timer').empty();}

    	var countDown = function() {
    	setInterval(function(){ time--;
    		$('#timer').html(time);}, 1000);

    	setTimeout(function(){
    		alert("Sorry, your time is up.");
    		reset();
    	}, time*1000);

    	}

    	

    	var start = function() {
    		$('#start').click(function() {
    			countDown();
    			display();
    			submit();

    		})
    	}


    	//start the countdown;
    	start();

    var submit = function() {

    
    	
    $('#submitAnswers').click(function() { 
    	playerAnswers.push($(".answerChoice0").val() );
    	playerAnswers.push($(".answerChoice1").val() );
    	playerAnswers.push($(".answerChoice2").val() );
    	playerAnswers.push($(".answerChoice3").val() );
    	playerAnswers.push($(".answerChoice4").val() );
    	playerAnswers.push($(".answerChoice5").val() );
    	playerAnswers.push($(".answerChoice6").val() );
    	playerAnswers.push($(".answerChoice7").val() );
    	console.log(answerCounter);
    	console.log(correctAnswers);
    	console.log(playerAnswers);

    	for (var j = 0; j < correctAnswers.length; j++) {
    		if (correctAnswers[j] == playerAnswers[j]) {
    			answerCounter++;
    			console.log(answerCounter);
    			
    		}

    		else { wrongAnswer++;
    		console.log(wrongAnswer);}

    	}
    	confirm("You got " + answerCounter + " answers correct!");
    	reset();
    	console.log(playerAnswers);

    });

   	}