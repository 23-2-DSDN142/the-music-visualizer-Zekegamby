let firstRun = true;
let drumImage;
let pianoImage
let handsImage
let backgrounImage;
let trumpetImage;
let trumpetImage1;
let singerImage;
let trumpetImage2;
let bassImage;
let redMusicImage;
let greenMusicImage;
let blueMusicImage;
let rainbowMusicImage;
var x;

let bassNotes = [];
let trumpetNotes = [];

let noteSpawnRate = 40;
let TrumpetnoteSpawnRate = 40;
let noteMin = 0.08;
let noteMax = 0.15;

function shadow(size) {
  drawingContext.shadowOffsetX = size;
  drawingContext.shadowOffsetY = -size;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'black';
}


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(100);
  textFont('Helvetica');
  rectMode(CENTER);
  textSize(24);


  let bar_spacing = height / 10;
  let bar_height = width / 12;
  let bar_pos_x = width / 2;

  if (firstRun) {
    rectMode(CENTER);
    imageMode(CENTER);
    drumImage = loadImage('drumer.png');
    handsImage = loadImage('hands.png');
    pianoImage = loadImage('piano.png'); //image by ken Dalley
    backgrounImage = loadImage('background.png');
    trumpetImage = loadImage('trumpet.png');
    trumpetImage1 = loadImage('trumpet.png');
    singerImage = loadImage('singers.png')
    trumpetImage2 = loadImage('trumpet.png');
    bassImage = loadImage('bass.png');
    redMusicImage = loadImage('redMusic.png');
    greenMusicImage = loadImage('greenMusic.png');
    blueMusicImage = loadImage('blueMusic.png');
    rainbowMusicImage = loadImage('rainbowMusic.png');
    firstRun = false;
  }

  // Background
  push();
  tint(120);
  backgrounImage.resize(1920, 1080);
  image(backgrounImage, 960, 540);
  pop();

  // Drummer
  push();
  shadow(20);
  translate(200, 800);
  let newDrum = map(drum, 0, 100, 1, 2, true);
  if (drum >= 50) {
    scale(newDrum - 0.5, newDrum - 0.5);
  }
  image(drumImage, 0, 0);
  pop();

// Piano
let newPiano = map(other, 40, 100, -50, 100, true);
let newPianoColor = map(other, 0, 100, 0, 100, true);
push()
translate(1200, 300);
image(pianoImage, 0, 0);
push();
translate(newPiano, newPiano/5);
rotate(newPiano/10);
image(handsImage, 0, 0);
pop()

if (other > 40) {
  push();
  scale(1.3, 1.3)
  translate(-50, 500);
  noStroke();
  fill(100, 0, 200, newPianoColor);
  triangle(-250, 300, 0, -1000, 300, 300);
  pop();
}
pop();


  // Bass
  push();
  translate(500, 600);
  let newBass = map(bass, 0, 100, 1, 1.3, true);
  let newNotes = map(bass, 0, 100, -50, 50, true);
  let newBassColor = map(bass, 0, 100, -50, 100, true);
  push();
  scale(1, newBass);
  image(bassImage, bass / 4, bass / 4);
  pop();

  if (bass > 60) {
    push();
    translate(50, 200);
    noStroke();
    fill(320, 100, 100, newBassColor);
    triangle(-250, 300, 0, -1000, 300, 300);
    pop();
  }

  if (bass > 60 && frameCount % noteSpawnRate === 0) {
    let randomX = bass + random(-50, 100);
    let note = {
      x: randomX,
      y: bass - 100,
      speed: random(2, 5),
      image: randomNoteImage(),
      size: random(noteMin, noteMax),
    };
    bassNotes.push(note);
  }

  // Display and move bass notes
  for (let i = bassNotes.length - 1; i >= 0; i--) {
    let note = bassNotes[i];
    let scaledWidth = note.image.width * note.size;
    let scaledHeight = note.image.height * note.size;
    image(
      note.image,
      note.x - scaledWidth / 2,
      note.y - scaledHeight / 2,
      scaledWidth,
      scaledHeight
    );
    note.y -= note.speed;

    if (note.y < -600) {
      bassNotes.splice(i, 1);
    }
  }

  pop();


  //singer
  push();
  let newSingerColor = map(vocal, 0, 100, 0, 100, true);
  scale(0.8, 0.8);
  translate(1100, 1000);
  newVocal = map(vocal, 40, 100, 1, 1.5, true);
  push()
  scale(1, newVocal); // Always scale the singer image based on the vocal value
  image(singerImage, 0, 0);
  pop()

  if (vocal > 40) {
    push();
    scale(1.3, 1.3)
    translate(0, 0);
    noStroke();
    fill(100, 350, 200, newSingerColor);
    triangle(-250, 300, 0, -1000, 300, 300);
    pop();
  }
  pop();



  // Trumpet
  push();
  shadow(20);
  translate(1500, 800);
  let newTrumpet = map(other, 0, 100, -50, 50, true);
  let newTrumpetRotate = map(other, 0, 100, -50, 50, true);
  let newTrumpetColor = map(other, 0, 100, -50, 100, true);
  let trumpetNoteSpeed = map(other, 0, 100, -3, 15, true);
  let trumpetScale = map(other, 70, 100, 1, 1.2, true);
  TrumpetnoteSpawnRate = 100 - other;

  if (other > 65) {
    push();
    tint(90, 90, 30);
    translate(-70, 30);
    image(trumpetImage, newTrumpet, newTrumpet / 2);
    pop();
    push();
    tint(0, 50, 110);
    translate(70, 30);
    image(trumpetImage, newTrumpet, newTrumpet / 2);
    pop();
  }
 

push()
  // Adjust the TrumpetnoteSpawnRate based on the "other" value
  TrumpetnoteSpawnRate = map(other, 70, 100, 80, 50, true);

  if (other > 78 && other < 82) {
    print("Generating trumpet note");
    let randomX = other + random(-50, 100);
    let note = {
      x: randomX - 50,
      y: other - 100,
      speed: map(other, 70, 100, 5, 20, true),
      image: randomNoteImage(),
      size: random(noteMin, noteMax) * trumpetScale,
    };
    trumpetNotes.push(note);
  }

  for (let i = trumpetNotes.length - 1; i >= 0; i--) {
    let note = trumpetNotes[i];
    let scaledWidth = note.image.width * note.size;
    let scaledHeight = note.image.height * note.size;
    image(
      note.image,
      note.x - scaledWidth / 2,
      note.y - scaledHeight / 2,
      scaledWidth,
      scaledHeight
    );
    note.y -= note.speed;

    if (note.y < -800) {
      trumpetNotes.splice(i, 1);
    }
  }
  pop()

  if (other > 70) {
    rotate((other - 70) * 2.5);
  }


  if (other > 65) {
    image(trumpetImage, newTrumpet, newTrumpet / 2);
  } else {
    push();
    tint(90, 90, 30);
    translate(-70, 30);
    image(trumpetImage, 0, 0);
    pop();
    push();
    tint(0, 50, 110);
    translate(70, 30);
    image(trumpetImage, 0, 0);
    pop();
    image(trumpetImage, 0, 0);
  }
  pop();

  if (other > 70) {
    translate(1500, 800);
    noStroke();
    fill(320, 350, 0, newTrumpetColor);
    triangle(-250, 300, 0, -1000, 300, 300);
  }


function randomNoteImage() {
  let images = [redMusicImage, greenMusicImage, blueMusicImage, rainbowMusicImage];
  return random(images);
}




  }
