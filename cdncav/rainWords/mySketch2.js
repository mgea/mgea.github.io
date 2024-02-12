let blocks = [];
let graphics;
let letters = "吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番｜獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始であろう。この時妙なものだと思った感じが今でも残っている。第一毛をもって装飾されべきはずの顔がつるつるしてまるで薬缶だ。その後猫にもだいぶ逢ったがこんな片輪には一度も出会わした事がない。のみならず顔の真中があまりに突起している。そうしてその穴の中から時々ぷうぷうと煙を吹く。どうも咽せぽくて実に弱った。これが人間の飲む煙草というものである事はようやくこの頃知った。この書生の掌の裏でしばらくはよい心持に坐っておったが、しばらくすると非常な速力で運転し始めた。書生が動くのか自分だけが動くのか分らないが無暗に眼が廻る。胸が悪くなる。到底助からないと思っていると、どさりと音がして眼から火が出た。それまでは記憶しているがあとは何の事やらいくら考え出そうとしても分らない。";
let counter = 0;
let char;

function setup() {
	createCanvas(800, 800);
	colorMode(HSB, 360, 100, 100, 100);
	graphics = createGraphics(width, height);
	graphics.noStroke();
	for (let i = 0; i < width * height * 3 / 100; i++) {
		let x = random(width);
		let y = random(height);
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
	platform = matter.makeBarrier(width / 2, height, width, 100);

}

function makeNekodearu(x, y, d) {
	tSize = random(d / 4, d);
	textSize(tSize);
	textFont("serif");
	char = letters.substr(counter++%letters.length, 1).toUpperCase();
	let b = matter.makeSign(char, x, y);
	b.textSize = tSize;
	blocks.push(b);
}

function mousePressed() {
	makeNekodearu(mouseX, mouseY, random(width / 10));
}

function draw() {
	clear();

	fill(0);
	noStroke();
	platform.show();

	if (frameCount % 10 == 0) {
		let d = random(width/10,width / 5);
		let x = random(d/2,width-d/2);
		let y = random(d/2,height / 8-d/2);
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
	drawingContext.shadowBlur = width / 40;
	drawingContext.shadowOffsetX = width / 100;
	drawingContext.shadowOffsetY = width / 50;
	image(g, 0, 0);
	pop();
}