// rosco1.js identidad digital version 2023 contenido/datos  
// ver. 1.2 
// permite una respuesta con dos alternativas (feb 2022)
//     permite también meter palabras con espacio en blanco 
// admite dos posibles valores de resultados: new WOrd puede tener 5 o 6 argumentos
//
// -----------------------------------------------------------------------------

var words = [
	new Word(0, "A", "Empieza por A:", " Si enviamos por redes sociales mensajes  de amenaza e insultos a una persona, eso es...", "Acoso", "Acosar"),
	new Word(1, "B", "Empieza por B:", " Muchas veces encontramos personas sospechosas y que son molestos en redes sociales, lo que hay que hacer es... ", "Bloquear", "bloquearlos"),
	new Word(2, "C", "Empieza por C:", " Para usar correo electrónico (email) es importante acordarse de tu usuario y...", "Contraseña","password"),
	new Word(3, "D", "Empieza por D:", " En Internet debemos  cuidar nuestra Identidad...", "Digital"),
	new Word(4, "E", "Empieza por E:", " Algunas redes sociales nos permiten conocer ofertas de empresas y podemos solicitar un...", "Empleo"),
	new Word(5, "F", "Empieza por F:", " Nombre de una de las redes sociales mas populares que sirve para encontrar amigos y publicar cosas de tu vida", "Facebook"),
	new Word(6, "G", "Contiene la G:", " Es importante saber que todos los que te siguen en una red social no son tus... ", "Amigos"),
	new Word(7, "H", "Empieza por H:", " A las personas que pueden robar tu identidad y datos en internet se llaman (en inglés)", "Hacker", "Hackers"),
	new Word(8, "I", "Empieza por I:", "Red social muy popular entre jóvenes que ofrece la posibilidad de compartir fotografías con otros usuarios y poder recibir comentarios y likes de tus seguidores", "INSTAGRAM"),
	new Word(9, "J", "Empieza por J:", " Usar internet y las redes sociales se debe hacer de forma seria y responsable, no es un...", "Juego","jugar"),
	new Word(10, "L", "Empieza por L:", " Hay que tener cuidado con la privacidad con el móvil y saber donde estoy, porque muchas aplicaciones comparten mi...", "Localizacion","lugar"),
	new Word(11, "M", "Empieza por M:", " Hay que aprender a utilizar internet y las redes sociales, y no debemos tenerles... ", "Miedo"),
	new Word(12, "N", "Empieza por N:", " Si llega a tus manos información íntima de otra persona y te dicen de compartirla en tus redes, debes decir ...", "No"),
	new Word(13, "Ñ", "Contiene la Ñ:", " Piénsate dos veces enviar un  mensaje ofensivo insultando a un amigo, puede hacerle mucho...", "Daño"),
	new Word(14, "O", "Empieza por O:", " Los mensajes ofensivos que se envían por redes sociales aunque  a veces se puedan borrar, la persona que lo recibe no lo puede...", "Olvidar",""),
	new Word(15, "P", "Empieza por P:", " Cuando escribas un mensaje público, revisa bien lo que has puesto y piensa en los demás antes de...", "Publicar"),
	new Word(16, "Q", "Empieza por Q:", " Es mejor que no guardes videos o imágenes en tu móvil que sean desagradables para evitar enviarlas por error o sin...", "Querer"),
	new Word(17, "R", "Empieza por R:", " La palabra clave para comunicarse bien en Internet es el...", "Respeto"),
	new Word(18, "S", "Empieza por S:", " En Internet debemos ser muy cuidadosos con lo que publicamos, sobre todo en las redes...", "Sociales"),
	new Word(19, "T", "Empieza por T:", " No juzgues un mensaje a primera vista, puede ser un malentendido, sé...", "Tolerante"),
	new Word(20, "U", "Empieza por U:", " Aprende a usar las redes sociales para mejorar tu visibilidad y puedas encontrar nuevos amigos y empleo, no te quedes el..", "Ultimo"),
	new Word(21, "V", "Empieza por V:", " Los mensajes que se envían por redes sociales se pueden compartir rápidamente y hacerse...", "Virales","viral"),
	new Word(22, "W", "Empieza por W:", " No hay que abusar de enviar mensajes por el móvil a grupos o personas usando ", "Whatsapp"),
	new Word(23, "Y", "Empieza por Y:", " El mas perjudicado de usar mal Internet y la redes sociales soy...", "Yo"),
	new Word(24, "Z", "Empieza por Z:", " Muchas veces, puedes encontrar noticias que se pone en internet para llamar tu atención para meterte páginas maliciosas, eso es como si para que camine un burro, le pones delante una...", "Zanahoria")
];

// Functions
// -----------------------------------------------------------------------------

function Word(idNumber, letter, hint, definition, word, alte) {
	this.idNumber = idNumber;
	this.letter = letter;
	this.hint = hint;
	this.definition = definition;
	this.word = word;
	this.correct = null;
    this.alternate = alte;
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

    
    // compueba 1a opcion 1 
	if ( userAnswer == words[pos].word.toLowerCase() ) {
		words[pos].correct = true;
		$(".circle .item").eq(words[pos].idNumber).addClass("item--success")  

       }
    else {
    
    // comprueba si hay respueta alternativa correcta (añadido mgea)
    if ( (words[pos].alternate !=null) &&
         ( userAnswer == words[pos].alternate.toLowerCase() ) ) {
        
		    words[pos].correct = true;
		    $(".circle .item").eq(words[pos].idNumber).addClass("item--success")  
        } 
        
    
    else {
		words[pos].correct = false;
		$(".circle .item").eq(words[pos].idNumber).addClass("item--failure");
     //   if(words[pos].alternate==null) alert ("nulo");
        if(words[pos].alternate!=null) // dos alternativas
             alert("Respuesta correcta: " + words[pos].word.toUpperCase() + "  o tambien: "+ words[pos].alternate.toUpperCase());
          else alert("Respuesta correcta: " + words[pos].word.toUpperCase() ); 
	}
     
    }  // FIN DE COMPROBACION 
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
    $("footer").addClass("hidden");
	$("#js--question-controls").removeClass("hidden");
	$("#js--close").removeClass("hidden");
	showDefinition(count);
	countdown();
});

$("#js--new-game--notime").click(function() {
	$("#js--ng-controls").addClass("hidden");
	$("#js--question-controls").removeClass("hidden");
    $("footer").addClass("hidden");
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
	if (keycode == "190") {    // (mgea) cambiado de espacio a PUNTO keycode.info  
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
