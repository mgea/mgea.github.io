// Variables: Sobre el trabajo 
// -----------------------------------------------------------------------------

var words = [
	new Word(0, "A", "Empieza por A:", " Complejo monumental muy famoso creado durante el Reino Nazarí", "alhambra"),
	new Word(1, "B", "Contiene la B:", " Barrio musulmán más antiguo de Granada  ", "albaicin","albaizin"),
	new Word(2, "C", "Empieza por C:", " Lugar de junto a la Catedral donde están enterrados los reyes Catolicos", "Capilla Real"),
	new Word(3, "D", "Empieza por D:", " Rio que pasa por Granada ", "darro"),
	new Word(4, "E", "Empieza por E:", " Nombre de una Puerta de Granada que da acceso a una calle con el mismo nombre", "elvira"),
	new Word(5, "F", "Empieza por F:", " Nombre de un famoso poeta y ademas es el nombre de un parque", "federico"),
	new Word(6, "G", "Empieza por G:", " Jardines situados en el recinto del palacio nazarí ", "generalife"),
	new Word(7, "H", "Empieza por H:", " Lugar creado por los Reyes Católicos para cuidar a enfermos ", "Hospital Real"),
	new Word(8, "I", "Empieza por I:", " Nombre de la reina que conquistó el Reino de Granada a los nazaríes", "isabel"),
	new Word(9, "J", "Contiene la J:", " Lugar de valles y barrancos junto a Sierra Nevada llena de pueblos con encanto", "Alpujarra"),
	new Word(10, "L", "Empieza por L:", " Nombre de un Fraile beatificado de Granada que se celebra cada 9 de febrero", "Leopoldo"),
	new Word(11, "M", "Empieza por M:", " Nombre de la mujer granadina que murio decapitada por defender la Republica ", "Mariana Pineda"),
	new Word(12, "N", "Empieza por N:", " Nombre de santo que es de un famoso mirador con vistas a la Alhambrao", "Nicolas"),
	new Word(13, "Ñ", "Contiene la Ñ:", " Dulce típico andaluz que se consume por Semana Santa y que también es un dulce típico en Granada", "Pestiño"),
	new Word(14, "O", "Empieza por O:", " El Darro es un río cuyo nombre proviene del metal que antiguamente se encontraba en su cauce", "oro"),
	new Word(15, "P", "Empieza por P:", " Postre típico de Granada con nombre en homenaje a un Papa", "pionono"),
	new Word(16, "Q", "Empieza por Q:", " Pueblo con un pantano muy grande que suministra agua a Granada", "quentar"),
	new Word(17, "R", "Empieza por R:", " Plato de origen árabe popular en Granada que consiste en una ensalada hecha con naranjas peladas y troceadas con aceite.", "Remojon"),
	new Word(18, "S", "Empieza por S:", " Barrio típico donde hay zambras de flamenco y cuevas", "Sacromonte"),
	new Word(19, "T", "Empieza por T:", " Pequeña porcion de comida gratis cuando pides una consumición", "Tapa"),
	new Word(20, "U", "Empieza por U:", " Nombre corto para hacer referencia a la Universidad de Granada", "UGR"),
	new Word(21, "V", "Empieza por V:", " Pico de montaña en Sierra nevada que es de los más altos de España ", "Veleta"),
	new Word(22, "W", "Empieza por W:", " Autor de los famosos CUENTOS DE LA ALHAMBRA que escribió cuando estaba de estancia en la misma en el siglo XIX ", "Washinton Irving"),
	new Word(23, "Y", "Contiene la Y:", " Fruta tipica de la costa tropica que es verde por fuera y tiene muchas pepitas  ", "Chirimoya"),
	new Word(24, "Z", "Contiene la Z:", " Nombre de la antigua Universidad Nazarí que está junto a Catedral", "Madraza")
];

// Functions
// -----------------------------------------------------------------------------

function Word(idNumber, letter, hint, definition, word, correct, correct2) {
	this.idNumber = idNumber;
	this.letter = letter;
	this.hint = hint;
	this.definition = definition;
	this.word = word;
	this.correct = null;
}

function showDefinition(pos) {
	$("#js--hint").html(words[pos].hint);
	$("#js--definition").html(words[pos].definition);
    $("#js--score").html(remainingWords);
    /*** mgea resaltar circulo **/
    $(".circle .item").eq(words[pos].idNumber).addClass("item--resaltado"); // poner resaltado circulo
}

var remainingWords = 25;

function checkAnswer(pos) {
	var userAnswer = $("#js--user-answer").val().toLowerCase();
  
  $(".circle .item").eq(words[pos].idNumber).removeClass("item--resaltado");  // quitar resaltado circulo
	if (userAnswer == words[pos].word.toLowerCase()) {
		words[pos].correct = true;
		$(".circle .item").eq(words[pos].idNumber).addClass("item--success");

	} else {
		words[pos].correct = false;
		$(".circle .item").eq(words[pos].idNumber).addClass("item--failure");
        alert(words[pos].word); // mostrar correcta
	}
     
	remainingWords--;
    // decrementar palabras restantes
	// $("js--score").html(remainingWords);
   	return count++;
}

function pasapalabra(pos) {
       $(".circle .item").eq(words[pos].idNumber).removeClass("item--resaltado");  // quitar resaltado circulo
	var w = words.splice(pos, 1)[0];
//    $(".circle .item").eq(words[pos].idNumber).removeClass("item--resaltado");
	words.push(w);

}

function continuePlaying() {
	if (count != 25) {
		$("#js--user-answer").val("");
		showDefinition(count);
	} else {
		endGame();
	}
}

var seconds;
var temp;

function countdown() {
	seconds = $("#js--timer").html();
	seconds = parseInt(seconds, 10);
	if (seconds == 1) {
		temp = $("#js--timer");
		temp.innerHTML = 0;
		endGame();
		return;
	}
	seconds--;
	temp = $("#js--timer");
	temp.html(seconds);
	timeoutMyOswego = setTimeout(countdown, 1000);
}

function endGame() {
	$("#js--question-controls").addClass("hidden");
	$("#js--pa-controls").removeClass("hidden");
	$("#js--end-title").html("Fin de partida!");
	$("#js--end-subtitle").html(showUserScore());
	$("#js--close").addClass("hidden")
}

function showUserScore() {
	var counter = 0;
	for (i = 0; i < words.length; i++) {
		if (words[i].correct == true) {
			counter++;
		}
	}
	return "Has conseguido un total de " + counter + " aciertos.";
}


// Main Program
// ----------------------------------------------------------------------------- */

// New game
var count = 0; // Counter for answered words
$("#js--new-game").click(function() {
	$("#js--ng-controls").addClass("hidden");
	$("#js--question-controls").removeClass("hidden");
	$("#js--close").removeClass("hidden");
	showDefinition(count);
	countdown();
});

$("#js--new-game--notime").click(function() {
	$("#js--ng-controls").addClass("hidden");
	$("#js--question-controls").removeClass("hidden");
	$("#js--close").removeClass("hidden");
	showDefinition(count);
    // quito elemento de tiempo 
        $("#js--timer").removeClass("timer");
        $("#js--timer").html("");
    
//	countdown();
});

// Send the answer
$("#js--send").click(function() {
	checkAnswer(count);
	continuePlaying();
});

// Key bindings for send the answer
$("#js--question-controls").keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == "13") {
		checkAnswer(count);
		continuePlaying();
	}
});

// Skip the word
$("#js--pasapalabra").click(function() {
    pasapalabra(count);
	continuePlaying();
});

// Key bindings for skip the word
$("#js--question-controls").keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == "32") {
		pasapalabra(count);
		continuePlaying();
	}
});

// Play again
$("#js--pa").click(function() {
	location.reload()
});

// End the game
$("#js--close").click(function() {
	endGame();
});
