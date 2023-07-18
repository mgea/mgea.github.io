// rosco4.js identidad digital-> redes sociales version 2023 contenido/datos  
// ver. 1.2 
// permite una respuesta con dos alternativas (feb 2022)
//     permite también meter palabras con espacio en blanco 
// admite dos posibles valores de resultados: new WOrd puede tener 5 o 6 argumentos
//
// -----------------------------------------------------------------------------

var words = [
	new Word(0, "A", "Empieza por A:", " Se llama al uso sin control de redes sociales, cuando se pierde mucho tiempo conectado y dejas de hacer una vida normal porque no puedes parar...", "Adiccion", "Adicto"),
	new Word(1, "B", "Empieza por B:", " Un tipo de publicación digital en la que uno o más autores publican con frecuencia contenido sobre un tema determinado  ", "Blog"),
	new Word(2, "C", "Empieza por C:", " Conversación instantánea por internet basada en el envío de mensajes textuales", "Chat","chats"),
	new Word(3, "D", "Empieza por D:", " Plataforma de Google en la nube que almacena y comparte archivos", "Drive"),
	new Word(4, "E", "Empieza por E:", " Graficos que pueden acompañar al texto en los mensajes para expresar emociones o como meme", "Emoji"),
	new Word(5, "F", "Empieza por F:", " Las personas que nos siguen en una red social se llaman (en ingles)..", "Follower", "Followers"),
	new Word(6, "G", "Empieza por G:", " Cuenta de correo electrónico que te permite acceder a muchas aplicaciones de Google", "Gmail"),
	new Word(7, "H", "Empieza por H:", " Información y rastro que dejas en las red de las cosas que haces y de lo que cuentan de tí (dos palabras)", "HUELLA DIGITAL"),
	new Word(8, "I", "Empieza por I:", " Persona que es muy famosa en  una red social y que mucha gente sigue por por sus comentarios o forma de vestir e influir en los demás ", "INFLUENCER"),
	new Word(9, "J", "Contiene la J:", " Una red social muy interesante para encontrar trabajo y publicar tu curriculum es... ", "INFOJOBS","INFOJOB"),
	new Word(10, "K", "Contiene la K:", " Archivo que se guarda en ordenador y en móvil para almacenar las preferencias y demás información que se utiliza en las páginas web que se visitan. Todos los sitios que visitas te preguntan si las aceptas... ", "COOKIES","COOKIE"),
	new Word(11, "L", "Empieza por L:", " Red social muy conocida para crear tu curriculum y búsqueda de empleo ", "LINKEDIN"),
	new Word(12, "M", "Contiene la M:", " Se llama así al correo no deseado que nos envían por coreo, y que llamamos correo basura (en inglés)", "SPAM"),
	new Word(13, "N", "Comienza por N:", " Información que aparece en la  pantalla de tu móvil para mostrar recordatorios y nuevas entradas de mensajes las redes sociales. A veces son molestas y se deberían quitar.", "NOTIFICACION", "NOTIFICACIONES"),
	new Word(14, "O", "Contiene la O:", " Persona que se encarga de administrar las redes sociales, creando contenido y supervisando su buen funcionamiento (dos palabras en ingles)", "Community manager",),
	new Word(15, "P", "Empieza por P:", " Panel de control en facebook para configurar el contenido que no es público", "Privacidad"),
	new Word(16, "Q", "Empieza por Q:", " Código con forma cuadrada que almacenan información (página web, texto) y que se pueden leer con una aplicación usando la cámara del móvil ", "QR"),
	new Word(17, "R", "Empieza por R:", " Publicación en formato de video corto que se puede ver en Instagram o Facebook", "REEL", "REELS"),
	new Word(18, "S", "Empieza por S:", " Fotografía de uno mismo hecha con el móvil con el único fin de exponerla en las redes sociales", "Selfie", "Selfi"),
	new Word(19, "T", "Empieza por T:", " Red social para compartir vídeos de corta duración muy famosa entre jóvenes de todo el mundo", "TikTok", "Tik Tok"),
	new Word(20, "U", "Empieza por U:", " Nombre de usuario para acceder a las redes sociales (en ingles)", "USERNAME"),
	new Word(21, "V", "Empieza por V:", " Aplicación o código malintencionado que se emplea para ejecutar actividades destructivas en un ordenador a través de internet", "Virus"),
	new Word(22, "W", "Empieza por W:", " Cuando no sepas algo, busca su definición en este sitio web... ", "WIKIPEDIA"),
	new Word(23, "Y", "Empieza por Y:", " Lugar en internet muy popular para subir y compartir videos ", "YOUTUBE"),
	new Word(24, "Z", "Empieza por Z:", " Persona que en las películas se llaman muertos vivientes. También es el nombre que se da a los ordenadores que se controlan de forma remota por un hacker al ser infectados por un virus", "ZOMBIE", "Zombi")
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
