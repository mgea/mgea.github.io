/***********************************************/
/*    FEDO Visual Novel, 2016                    */
/*       to Monogatari.io                         */
/*    Act to Version Monogatary 2.0.0.16beta  16/7/2020 ***/
/* Cambios https://developers.monogatari.io/documentation/v/develop/upgrading-from-v1.4.1 **/
/********************************/


"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* RAMIFICACION NARRATIVA */
/*                                                     */ 
/* https://sketchboard.me/VBl5czywdsZs#/   with Chrome */ 
/* https://www.draw.io/                                */
/* http://utopolis.ugr.es/media/storytelling/fedo      */

/* global storage */

/// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Bienvenidos',
		body: 'Historia de Fedo',
		icon: ''
	}
});






// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', { 
    
    "Title": "Las aventuras de Fedo, 2016",
		"Subtitle": "Novela visual desarrollada para Creación y Difusión de Nuevos contenidos Audiovisuales por:",
		"Message": `
            <p>- María Lopez Soler </p> 
			<p>- Fede Yedra </p>
            <p>- Elena Galán</p> 
			
			<p>Personaje: ¿? </p> 
			<p>Escenario: Facultad de Documentación y Comunicación, Universidad de Granada </p>`
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({
    
    "Snow": {
        "particles": {
            "number": {
                "value": 400,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#fff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img\/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 10,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 500,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "bottom",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "bubble": {
                "distance": 400,
                "size": 4,
                "duration": 0.3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
        "retina_detect": true
    }

});

// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
    grito: "grito.mp3",

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
    "puertaprincipal" : "puertaprincipal01.jpg",
    "hall" : "Hall.jpg",
    "maquinas" : "maquinas.jpg",
    "avid" : "avid.jpg",
    "arriba": "arriba.jpg",
    "exterior": "exterior.jpg",
    "cafeteria": "cafeteria.jpg",
    "pasillo": "Pasillo.jpg",
    "claustro": "claustro.jpg",
    "clase": "clase.jpg",
    "background": "background.jpg",
});



// Define the Characters
monogatari.characters ({

    
    "f": {
		"Name": "Fedo",
		"Color": "#5bcaff",
        "Images": {
            "happy": "fedohappy.png",
            "normal": "fedonormal.png",
            "sad": "fedosad.png",
            "surprised" : "fedosurprised.png",
            "angry" : "fedoangry.png",
            "hurt" : "fedohurt.png"
        }
	}, 
    
     "fran": {
		"Name": "Fran",
		"Color": "#fb0a0f",
        "Images": {
            "normal": "fran.png",
            
        }
	}, 
    "d": {
		"Name": "Desconocido",
		"Color": "#5bcaff",
        "Images": {
            "normal": "desconocido.png",
            
        }
	}, 
    
    "b": {
		"Name": "Bolaños",
		"Color": "#5bcaff",
        "Images": {
            "normal": "bolaños.png",
            
        }
	}, 
    
    "estrella": {
		"Name": "Estrella",
		"Color": "#5bcaff", 
        "Images": {
            "normal": "estrella.png",
            
        }
	}, 
    
    "julio": {
		"Name": "Julio",
		"Color": "#5bcaff",
         "Images": {
            "normal": "julio.png",
            
        }
	}, 
    
    "jordi": {
		"Name": "Jordi",
		"Color": "#5bcaff",
         "Images": {
            "normal": "Jordi.png",
        }
	}, 
    "g": {
		"Name": "Gea",
		"Color": "#5bcaff",
         "Images": {
            "normal": "gea.png",
        }
	}, 
    "super": {
		"Name": "Superperverso",
		"Color": "#5bcaff",
        "Images": {
            "normal": "Superperverso.png",
            
        }
	}, 
    "t": {
		"Name": "Técnico",
		"Color": "#5bcaff"
	}, 
   
    "v": {
		"Name": "Voz",
		"Color": "#5bcaff",
         "Images": {
            "normal": "voz.png",
            
        }
	}, 
    
    
    
    
    
});




monogatari.script ({
	// The game starts here.
    
    
    // The game starts here.
	"Start": [
        "show scene #fff",
        "centered Las Aventuras de Fedo",
    
        "centered Idea original de Maria, Fede y Elena. Comunicacion Audiovisual, Universidad de Granada (2016)",
        "play music doh.mp3",
        "show scene #000",
        "...",
		"f Ufff... suputamadre, vaya cuesta",
        "show scene puertaprincipal with RubberBand",
        "show character f happy center with bounceInUp",
        
        // ___ ATAJO 
        // "jump Clase",  
        // ___ 
        
        
        "f Bueno, al menos ya he llegado..",
        "f Qué ganas de empezar el curso...",
        
        "f  Todos me han dicho que audiovisuales es una carrera muy chula...seguro que aprendo un montón.",
    
        "show character f surprised with wobble",
        "f La verdad es que he llegado un poco pronto...",
        "f podría entrar antes o darme un paseo e investigar",
        "show character f happy with pulse", 
       {
			"Choice": {
				"Dialog": "f Que hago?",
				"Yes": {
					"Text": "Entrar a la Facultad",
					"Do": "jump Hall"
				},
				"No": {
					"Text": "Pasear un rato por el jardín",
					"Do": "jump Jardin"
				}
			}
		},
	],

	"Hall": [
        "show scene hall",
        "show character f happy with bounceInRight",
        "f Wow, qué bonito es esto... A ver, según mi horario",
        "show character f surprised",
        "f Ufff, tengo Derecho...",
        "show character f sad",
        "f Ufff... bueno, no pasa nada, he tenido clases peores.",
        "show character f normal",
        
        {
			"Choice": {
				"Dialog": "f Pero, ¿por dónde se irá??",
				"Yes": {
					"Text": "Ir por el pasillo",
					"Do": "jump Pasillo"
				},
				"No": {
					"Text": "Subir las escaleras",
					"Do": "jump Escaleras"
				}
			}
		},
		
		"end"
	],

	"Pasillo": [

        "show scene maquinas",
        "show character f surprised with bounceInRight",
        "f ¿Y estas máquinas tan antiguas? ¿De dónde habrán salido?",
        {
			"Choice": {
				"Dialog": "f ¿Que hago?",
				"Yes": {
					"Text": "Acercarte a trastear",
					"Do": "jump Maquinas"
				},
				"No": {
					"Text": "Mejor te estás quieto y te vas a clase",
					"Do": "jump Avid"
				}
			}
		},
		"end"
	],
    
    "Maquinas": [

    "show scene black",
    "Fedo se acercó a mirar las máquinas con curiosidad. Extendió una mano y tocó con delicadeza una de ellas.",
    "stop music",
    "play sound golpe.wav",
    "La máquina se deshace en mil pedazos ante sus incrédulos ojos",
    "show character f hurt",
    "f ¿Pero qué...?",
    "show character f surprised",
    "Fedo mira a ambos lados y descubre que un conserje ha visto todo lo que ha ocurrido",
    "show character f sad with shake",
    "jump gameover",
    "end"
	],
    
    
    
     "Avid": [

        "show scene avid",
        "show character f surprised at left with bounceInLeft", 
        "f Emmm… creo que esta no es mi clase…",
        "f ¿Avid? ¿Qué es Avid?",
         "show character fran normal right with bounceInRight",
         "fran ¿No conoces Avid? Avid es el programa de montaje con el que se edita en la facultad…?",
        "fran Si quieres te pongo un ordenador.",
          "show character fran normal right with tada",
        "show character f happy at left",
        {
			"Choice": {
				"Dialog": "f Que hago?",
				"Yes": {
					"Text": "Probar Avid",
					"Do": "jump gameover"
				},
				"No": {
					"Text": "Salir de Clase",
					"Do": "jump SalirClase"
				}
			}
		}, 
	   "end"
	],
    
    
    
    
      "SalirClase": [

        "show scene pasillo",
        "show character f happy with jello",
        "f Creo que esa del fondo es mi clase… ¡Que bien! ¡Voy a llegar a tiempo!",
        "play sound pokemon.mp3",
        "Una estrella salvaje apareció",
        "show character f surprised at left with bounceInRight",
        "show character estrella normal at right with fadeInRightBig",
        "estrella ¡Oye! ¡Ven que te cuente una cosa!",
       
         {
			"Choice": {
				"Dialog": "(Tengo que actuar rápido)",
				"Yes": {
					"Text": "Esquivar a Estrella",
					"Do": "jump Patio"
				},
				"No": {
					"Text": "Quedarse a ver qué tiene que contar",
					"Do": "jump Escuchar"
				}
			}
		},
        "end"
	],
    
    
    
    
    
    
    
    "Patio": [
        "stop music",
        "show scene claustro",
        "show character f sad with bounceInRight",   
        "f ¿Dónde estoy? Creo que me he perdido… Y esas estatuas dan mal rollo…",
        "show character super normal at right with fadeInRightBig",
        "show character f surprised at left ",
        "super ¡Hola! Soy un personaje creado por unos compañeros tuyos…",
        "super Dime… ¿Qué prefieres?",
        "super ¿Tener los dedos tan largos como las piernas o las piernas como los dedos?",
        {
			"Choice": {
				"Dialog": "super Dime… ¿Qué prefieres?",
				"Yes": {
					"Text": "Piernas como dedos",
					"Do": "jump Perverso",
				},
				"No": {
					"Text": "Dedos como piernas",
					"Do": "jump Perverso"
				}
			}
		},
		"end"
	],
    
    
     "Perverso": [
        "show character f sad  at left with shake",
        "show character super normal  at right with shake",
        "play sound puñetazo.mp3",
        "show character f hurt at left with jackInTheBox",   
        "f ¿Qué ha sido eso?",
        "super Esa respuesta es tal perversidad que hasta las estatuas han cobrado vida para pegarte. Será mejor que no vuelvas por aquí",
         "show character f sad at left with rollIn",
         "jump gameover"
	],
    
    
    "Escuchar": [
        "show character estrella normal at right with shake",
        "show character f happy  at left with shake",
        "estrella ¿Tú eres Fedo?", 
        "f Eh, sí. Es mi primer día.",
        "estrella Ah, ya verás, te va a encantar esta carrera.",
        {
			"Choice": {
				"Dialog": "estrella ¿Te gusta la publicidad?",
				"Yes": {
					"Text": "Me parece muy interesante",
					"Do": "jump EscucharMas",
				},
				"No": {
					"Text": "La verdad es que no mucho...",
					"Do": "jump gameover"
				}
			}
		},
       
	],
    
     "EscucharMas": [
        "show character estrella normal at right with shake",
        "show character f happy  at left with shake",
        "estrella  ¡Genial! Yo soy la profesora de Comunicación Publicitaria.",
        "estrella Ya verás qué practicas más divertidas y fáciles de entregar hacemos...",
        {
			"Choice": {
				"Dialog": "estrella Por cierto.. ¿Tienes Twitter?",
				"Yes": {
					"Text": "¡Por supuesto!",
					"Do": "jump EscucharMasMas",
				},
				"No": {
					"Text": "¿Twi - qué?",
					"Do": "jump gameover"
				}
			}
		},
       
	],
    
     "EscucharMasMas": [
        "show character estrella normal at right with shake",
        "show character f happy  at left with shake",
         "estrella Genial, aunque te vas a tener que crear uno como yo te diga para la asignatura",
         "estrella ¡Por cierto! Estoy organizando un concurso de cine publicitario sobre Inclusión Social y Municipios, no me preguntes qué tienen en común", 
         "estrella Deberías apuntarte...",
        
        {
			"Choice": {
				"Dialog": "estrella ¿Que vas a hacer?",
				"Yes": {
					"Text": "¡Claro! A ver si hay suerte",
					"Do": "jump EscucharFinal",
				},
				"No": {
					"Text": "Creo que estoy un poco verde para..",
					"Do": "jump gameover"
				}
			}
		},
       
	],
    
    "EscucharFinal": [
        "show character estrella normal at right with shake",
        "show character f happy  at left with shake",
        "estrella Muy bien. Piensa que hay un total de 1200 euros en premios si ganas todo y vosotros los de audiovisuales sois unos artistas.",
        "estrella Bueno, te dejo, que voy a recibir a la productora de Wisconsin que viene a darnos una charla sobre publicidad y marketing", 
        "hide character estrella",
        "stop music",
        "play music doh.mp3",
        "show character f normal with shake",
        "f Creo que me he librado de una buena… Será mejor que me vaya a clase de una vez por todas",
        "jump Clase",
       
	],
    
    
    
    "Escaleras": [

        "show scene arriba",
        "Fedo va subiendo por las escaleras cuando...",
        "show character f surprised with bounceInLeft", 
        "show character v normal at right" ,
        "v ¡Fedo! ¡Feeedoo!",
        "(Pensando) ¿Eh? Me ha parecido escuchar que me llamaban, pero eso es imposible... Aquí no me conoce nadie aún...",
        "show character f surprised at left with slideInRight", 
        "v ¡Fedo! Eres el alumno nuevo, ¿no? Permíteme que me presente...",
        
        "show character b normal at right",
        "v Soy Bolaños. Jorge Bolaños. El decano.",
        "show character f happy at left with bounceIn",
        "f ¡Ah! Encantado",
        "b Espero que disfrutes de esta carrera tan bonita... Ains...",
        "show character b normal at right with shake",
        "b Por cierto, ¿sabes lo del Jardín del Conocimiento y la Felicidad?", 
         {
			"Choice": {
				"Dialog": "f Que hago?",
				"Yes": {
					"Text": "Si, por supuesto",
					"Do": "jump decano"
				},
				"No": {
					"Text": "Mejor que no, gracias",
					"Do": "jump decano"
				}
			}
		},
        "end"
	],
    
     "decano": [
         "show scene arriba",
         "show character f normal at left",
         "show character b normal at right with shake",
         "b Pues mira, es un proyecto que a mí me encanta...",
         "b Porque es un sitio muy bonito que está desaprovechado",
         "b Imagina un sitio al que ir a sentarte y pensar, mirar Granada, leer, estudiar...",
         "b Yo creo que hemos convencido a la rectora de que es una gran idea",
         "show character b normal at right with flip",
         "b Además, con ese nombre… El Jardín del Conocimiento y la Felicidad...",
          "show character b normal at right with shake",
         "b Es imposible que no funcione",
          "show character b normal at right with shake",
         "show character f sad at left",
         "b Por cierto, ¿sabes lo del Jardín del Conocimiento y la Felicidad?", 
         "f (Pensando) Vaya chapa me está dando... Seguro que voy a llegar tarde a clase como siga escuchándole.",
         "show character b normal at right with shake",
        "f (Pensando) Pero es que parece muy emocionado hablando de su jardín... Si le corto seguro que se enfada...",
        "f (Pensando) Nadie quiere empezar el primer día de Universidad enfadando al Decano... Pero tampoco llegar tarde a la primera clase...",
         {
			"Choice": {
				"Dialog": "f (Pensando) ¿Y ahora qué hago?",
				"Yes": {
					"Text": "Mostrar interés por lo que está hablando",
					"Do": "jump Hablar"
				},
				"No": {
					"Text": "Cortarle de la forma más educada posible",
					"Do": "jump Cortar"
				}
			}
		},
        "end"
	],
    
    
    
    "Hablar": [

    "show scene arriba",
    "show character f happy at left",
    "show character b normal at right",
    "f La verdad es que es muy interesante...",
    "b Sí, ¿verdad?... Ains… Ehmmmmm... ¿Por dónde iba?",
    "show character b normal at right with shake",
    "b Bueno, otro día te la cuento que tengo una reunión con la Delegación de Estudiantes… Ya te hablaré.",
    "show character b normal at right with bounceOutDown",  
    // "hide b with fadeOut ",
    "f Vaya, al final se ha ido…Por poco llego tarde a clase…",

    "jump Avid",
    "end"
	],
    
    "Cortar": [

    "show scene arriba",
    "show character f normal at left with fadeIn" ,
    "show character b normal at right",
    "f Bueno… Debería irme Jorge, que llego tarde a clase…",
    "b Ah, sí, sí, claro… Ains… Por cierto, ¿sabes lo del Jardín?",
    "show character b normal at right with shake",
    "show character f sad at left with fadeIn" ,
    "f ¿Del Conocimiento?",
    "b ¡Y de la Felicidad! Pues eso, que…",
    "show scene black with fadeIn",
    "Media hora más tarde...",
    "show scene arriba with fadeIn",
    "show character f angry at right with hinge",
    "show character b normal at left with FadeIn",  
    "b Bueno, y ese es el resumen… Otro día si quieres te cuento la historia entera…",
    "b Ahora mejor te dejo que llegarás tarde a clase", 
   // "hide b at left with bounceOut",
    "show character b normal at left with bounceOutDown",   
    "show character f happy with bounceIn",
    "f Gracias, Jorge. Un placer.",
    "hide character f happy with fadeOut",
    "show character f angry ",
    "f Mierda, ya ha empezado la clase y como interrumpa, seguro que el profesor se queda con mi cara…",
    "hide character f angry with fadeOut",
    "show character f happy ",
    "f Me iré a dar el paseo del que me he privado antes…",
    "show character f happy  with bounceOutDown",  
    "jump Jardin",        
        
    "end"
	],
    
    "Maquinas": [

    "show scene black",
    "Fedo se acercó a mirar las máquinas con curiosidad. Extendió una mano y tocó con delicadeza una de ellas.",
    "stop music",
    "play sound golpe.wav",
    "La máquina se deshace en mil pedazos ante sus incrédulos ojos",

    "show character f surprised",
    "f ¿Pero qué...?",
    "Fedo mira a ambos lados y descubre que un conserje ha visto todo lo que ha ocurrido",
    "jump gameover",
    "end"
	],
    
    
    "Jardin": [
    "show scene exterior",
    "show character f happy with  slideInDown",
    "Fedo mira a ambos", 
    "f Wow, se ve toda Graná, qué maravilla…",
       "show character f happy with  shake",  
    "f La verdad es que me está dando hambre… ",
    {
			"Choice": {
				"Dialog": "f ¿Me da tiempo a ir a comer algo?",
				"Yes": {
					"Text": "Ir a la cafetería",
					"Do": "jump Cafeteria"
				},
				"No": {
					"Text": "Ir a clase",
					"Do": "jump Avid"
				}
			}
		},
    "end"
	],
    
    
     
     "Cafeteria": [
         
        "show scene black", 
        "f ¿Esto es la cafetería?",
        "stop music",
        "play music grito",
        "show scene cafeteria",    
        "show character julio normal at right with bounceInLeft",
        "show character f surprised at left with pulse",
         {
			"Choice": {
				"Dialog": "julio  ¿Qué te pongo, moreno?",
				"Yes": {
					"Text": "Café   ",
					"Do": "jump Cafe"
				},
				"No": {
					"Text": "Tostada",
					"Do": "jump Tostada"
				}
			}
		},
    "end"
	],
    

    
     "Cafe": [
        "(Julio le sirve amablemente el café)",
         "julio Pues mira, si luego comes menú te invito a otro café!",
         "f Gracias, pero creo que iré a los comedores universitarios. Me han dicho que están bastante bi...",
         "stop music",
         "jump gameover",          
         "end"
	],
    
     "Tostada": [
        "julio Ah, pues las tostadas se las pides a la Mari.",
        "f ¿La Mari?",
        "stop music",
        "jump gameover",          
        "end"
	],
    
    
     "Clase": [
        "show scene clase",
        "show character f happy at left with fadeIn",
        "stop music",
        "play sound celestial.mp3 loop",
        "f ¡Por fin! He tenido que soportar muchas penurias pero creo que esta es mi clase…",
        "show character d normal at right with lightSpeedIn",
        "Hola Fedo…",
        "jordi Soy Jordi...",
        "show particles Snow",
         // "hide d normal at right",
        "show character jordi normal at right with fadein",
        "jordi Bienvenido a esta asignatura… ¿Conoces al Profesor Miguel Gea? Él también te dará clase…",
        "show character g normal at center with fadeInDown",
         "g Smart University! Smart!!!",
         "show character g normal at center with fadeOutDown",
         "jordi Espero que disfrutes y aprendas mucho. Toma asiento.",
         "show scene black with lightSpeedOut",
         "f Creo que esto es el cielo…",
         "hide particles",
         "jump win",         
         "end"
	],
    
    
    
     "gameover": [
        "play sound pacman-dies.mp3",
        "ooooohhh",
        "show scene black",
        "play sound gameover.mp3",   
         "GAME OVER... ¡VUELVE A INTENTARLO!",
         "end"
	],
    
     "win": [
        // "show scene black",
         "show scene background with jello",
        "play sound aleluya.mp3",   
         "¡HAS GANADO!!!!!",
         "end"
	]
    
    
    
});




 
