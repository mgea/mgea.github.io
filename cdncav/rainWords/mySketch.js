// Sketch_RainWords v1.0 based on: takawo https://openprocessing.org/sketch/1033440 
let blocks = [];
let graphics;
let letters = "CREACION Y difusion DE NUEVOS CONTENIDOS AUDIOVISUALES...grado de Comunicacion Audiovisual....Facultad de Comunicacion y Documentacion... UNIVERSIDAD DE GRANADA... 2021....  Jordi alberich.... Miguel GEA... Manovich.... JENKINS...Lawrence LESSIG...";
let counter = 0;
let char;

function setup() {
    int maxx = 250;
    int maxy = 250;
	createCanvas(maxx, maxy);
	colorMode(HSB, 360, 100, 100, 100);
	graphics = createGraphics(maxx, maxy);
	graphics.noStroke();
	for (let i = 0; i < maxx * maxy * 3 / 100; i++) {
		let x = random(maxx);
		let y = random(maxy);
		let w = random(3);
		let h = random(3);
		let a = random(TWO_PI);
		graphics.fill(random(255), 30);
		graphics.push();
		graphics.translate(x, y);
		graphics.rotate(a);
		graphics.ellipse(0, 0, w, h);
		graphics.pop();
	}
	matter.init();
	platform = matter.makeBarrier(maxx / 2, maxy, maxx, 100);

}

function makeNekodearu(x, y, d) {
	tSize = random(d / 3, d);
	textSize(tSize);
	textFont("Special Elite");
    
	char = letters.substr(counter++%letters.length, 1);
    // si se quiere todo en mayusculas:
    // char = letters.substr(counter++%letters.length, 1).toUpperCase();
	let b = matter.makeSign(char, x, y);
	b.textSize = tSize;
	blocks.push(b);
}

function mousePressed() {
	makeNekodearu(mouseX, mouseY, random(maxx / 10));
}

function keyPressed() {
  
    fill(255,255,255);
     text("creatividad & remix", 30, 595);
    
    counter=0;
    
    
    
}

function draw() {
	clear();
   
	fill(0);
	noStroke();
	platform.show();

	if (frameCount % 10 == 0) {
		let d = random(maxx/10,width / 5);
		let x = random(d/2,maxx-d/2);
		let y = random(d/2,maxy / 8-d/2);
		makeNekodearu(x, y, d);
	}



	for (let i = blocks.length - 1; i >= 0; i--) {
		let b = blocks[i];
		// print(b);
		let p = b.body.position;
		push();
		translate(p.x, p.y, 0);
		rotate(b.body.angle);
		fill(0, 0, 0);
		textAlign(CENTER, CENTER);
		textStyle(BOLD);
		textSize(b.textSize);
		text(b.text, 0, 0);
		pop();
		if (b.isOffCanvas()) {
			matter.forget(b);
			blocks.splice(i, 1);
		}
	}
	push();
	let g = get();
	clear();
	background(0, 0, 90);
	image(graphics, 0, 0);
	drawingContext.shadowColor = color(0, 0, 0, 33);
	drawingContext.shadowBlur = maxx / 40;
	drawingContext.shadowOffsetX = maxx / 100;
	drawingContext.shadowOffsetY = maxx / 50;
	image(g, 0, 0);
	pop();
   // fill(255,255,255);
 //    text("creatividad & remix", 30, 595);
}