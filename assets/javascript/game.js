My = {};
My.WordArray =[];
My.WordUArray = [];

My.Lives = 5;
My.NuminWordBank = Words.Length;

My.Word = "sample";
My.WordU = "";

// Function Starts here: //

// This Pulls the word from the word bank randomly//
My.PullWord = function(){ 
	My.Word = Words.List[(Math.floor(Math.random()*My.NuminWordBank))];
}

// This sets underline when page is refreshed, giving the player the number of letters that are in the word//
My.SetUnderline = function(){
	My.PullWord();
	for(i = 0; i < My.Word.length; i++){
		My.WordArray[i] = My.Word.charAt(i);
		My.WordUArray[i] = "_";
	}
	My.WordU = My.WordUArray.join("_");
	document.getElementById("WORD").innerHTML = My.WordU;
	document.getElementById("numLetters").innerHTML = My.Word.length;
}


// This updates the "WORD" with the right letter if player guess right//
My.UpdateLetter = function(letter){
	My.Changes = 0;
	for(i = 0; i < My.Word.length; i++){
		My.WordArray[i] = My.Word.charAt[i];
		if (My.Word.charAt(i) == letter) {
			My.WordUArray[i] = letter;
			My.Changes += 1;
		}
	};
// This will decrease players lives(Total of 5) if they dont hit the right letter//
	if (My.Changes < 1) {
		My.Lives -=1;
		document.getElementById("lives").innerHTML = My.Lives;
	}
// 
	My.WordU = My.WordUArray.join("");
	document.getElementById("WORD").innerHTML = My.WordU;

	My.Word1 = My.WordArray.join("");
	My.Word2 = My.WordUArray.join("");

// If player guessed all of the letters correctly; an alert "You win" will pop//
	if (My.Word1 === My.Word2) {
		alert("YOU WIN! Your next word is...");
		window.location.reload();
	}
// If player guessed all the letters wrong and player has no lives left; "You lose Try Again" Alert will pop up//
	if (My.Lives < 1) {
		document.getElementById("WORD").innerHTML == My.Word1;
		alert("You Lose! Try Again :)");
		window.location.reload();
	}
};

My.PullWord();
My.SetUnderline();





