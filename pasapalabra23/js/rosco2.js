// Variables: Sobre el trabajo 
// -----------------------------------------------------------------------------

var words = [
	new Word(0, "A", "Empieza por A:", " Cuando en el lugar de trabajo alguien te agrede física o verbalmente, eso es...", "Acoso"),
	new Word(1, "B", "Empieza por B:", " En la Web, puedes  encontrar informacion con ayuda de un ... ", "Buscador"),
	new Word(2, "C", "Empieza por C:", " Documentos que firmas cuando consigues un trabajo", "Contrato"),
	new Word(3, "D", "Empieza por D:", " Son las obligaciones que tiene un trabajador en su lugar de trabajo", "Deberes"),
	new Word(4, "E", "Empieza por E:", " Una de las competencias más valoradas por la empresa es el trabajo en ....", "Equipo"),
	new Word(5, "F", "Empieza por F:", " Nombre de una de las redes sociales mas populares que sirve para encontrar amigos y publicar cosas de tu vida", "Facebook"),
	new Word(6, "G", "Empieza por G:", " Buscador más popular de información en internet.. ", "Google"),
	new Word(7, "H", "Empieza por H:", " Conjunto de todos los elementos físicos o materiales de un ordenador en informática )", "Hardware"),
	new Word(8, "I", "Empieza por I:", " Si tenemos un empleo, podremos tener un tipo de vida... ", "Independiente"),
	new Word(9, "J", "Empieza por J:", " Es el horario que tienes en tu trabajo laboral", "Jornada"),
	new Word(10, "L", "Empieza por L:", " Los trabajadores deben cumplir las ____ establecidas", "leyes"),
	new Word(11, "M", "Empieza por M:", " Superpoder que tienen los trabajadores para recordar las cosas que tienen que hacer ", "Memoria"),
	new Word(12, "N", "Empieza por N:", " Documento que recibes mensualmente indicando tu salario", "Nomina"),
	new Word(13, "Ñ", "Contiene la Ñ:", " Persona que trabaja contigo en un puesto de trabajo", "Compañero"),
	new Word(14, "O", "Empieza por O:", " Nombre del tiempo que dedicas a hacer actividades en tu tiempo libre", "Ocio"),
	new Word(15, "P", "Empieza por P:", " Valor que tiene un producto por el que pagas una cantidad de dinero", "Precio"),
	new Word(16, "Q", "Empieza por Q:", " Sentimiento que tienes hacia una persona que tienes en afecto", "Querer"),
	new Word(17, "R", "Empieza por R:", " Compromiso que adquiere  una persona cuando está en un puesto de trabajo", "Responsabilidad"),
	new Word(18, "S", "Empieza por S:", " Cantidad de dinero que recibes por tu trabajo", "Salario"),
	new Word(19, "T", "Empieza por T:", " Actitud de la persona que respeta las opiniones, ideas o actitudes de las demás personas aunque no coincidan con las propias", "Tolerancia"),
	new Word(20, "U", "Empieza por U:", " Institución cuya tarea fundamental es fomentar, estimular y difundir el conocimiento", "Universidad"),
	new Word(21, "V", "Empieza por V:", " Período de descanso en un trabajo ", "Vacaciones"),
	new Word(22, "W", "Empieza por W:", " Conjunto de documentos con información multimedia y enlaces que se pueden recorrer (o navegar) a través de internet ", "Web"),
	new Word(23, "Y", "Empieza por Y:", " Sitio web muy popular dedicado a compartir videos", "Youtube"),
	new Word(24, "Z", "Contiene la Z:", " Proceso a través del cual se modifican y adquieren habilidades, destrezas, conocimientos, conductas y valores", "Aprendizaje")
];

// Functions
// -----------------------------------------------------------------------------

function Word(idNumber, letter, hint, definition, word, alter) {
	this.idNumber = idNumber;
	this.letter = letter;
	this.hint = hint;
	this.definition = definition;
	this.word = word;
	this.correct = null;
    this.alternate=alter;
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
