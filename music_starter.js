let firstRun = true;
let drumImage;
let backgrounImage;
let trumpetImage;
let trumpetImage1;
let trumpetImage2;
let notes = [];
let noteSpawnRate = 60;
// vocal, drum, bass, and other are volumes ranging from 0 to 100


function shadow(size){
  drawingContext.shadowOffsetX = size;
  drawingContext.shadowOffsetY = -size;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'black';
}

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(100)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;

   
    if (firstRun){
      rectMode(CENTER)
      imageMode(CENTER)
      drumImage = loadImage('drumer.png');
      backgrounImage = loadImage('background.png');
      trumpetImage = loadImage('trumpet.png');
      trumpetImage1 = loadImage('trumpet.png');
      trumpetImage2 = loadImage('trumpet.png');
      bassImage = loadImage('bass.png');
      redMusicImage = loadImage('redMusic.png');
      greenMusicImage = loadImage('greenMusic.png');
      blueMusicImage = loadImage('blueMusic.png');
      rainbowMusicImage = loadImage('rainbowMusic.png');
      firstRun = false;
    }

    

    //Background
    push()
    tint(120);
    backgrounImage.resize(1920, 1080);
    image(backgrounImage, 960, 540);
    pop()

    //Drummer
    push();
    shadow(20);
    translate(300,800)
    let newDrum = map(drum, 0, 100, 1, 2, true);
    if (drum >= 50){
      //drumImage.resize(drum + 500, drum/4 + 500);
  
      scale(newDrum - .5, newDrum - .5)
      }
    image(drumImage, 0, 0);

    print(newDrum);
    pop();


    //Bass
    push()
    translate(500, 600);
    let newBass = map(bass, 0, 100, 1, 1.3, true);
    let newNotes = map(bass, 0, 100, -50, 50, true);
    push();
    scale(1, newBass);
    image(bassImage, bass/4, bass/4);
    pop()
    
    if (bass > 60 && frameCount % noteSpawnRate === 0) {
      // Generate a random x-coordinate around the bass player
      let randomX = bass + random(-50, 100); // Adjust the range based on your preference
  
      // Generate a random note
      let note = {
        x: randomX,
        y: bass - 100,
        speed: random(2, 5), // Adjust the speed of the note
        image: randomNoteImage(), // Function to get a random note image
        size: random(0.1, 0.5) // Adjust the range for smaller sizes
      };
  
      // Add the note to the array
      notes.push(note);
    }
  
    // Display and move notes
    for (let i = notes.length - 1; i >= 0; i--) {
      let note = notes[i];
  
      // Scale the note image based on the size property
      let scaledWidth = note.image.width * note.size;
      let scaledHeight = note.image.height * note.size;
      image(note.image, note.x - scaledWidth / 2, note.y - scaledHeight / 2, scaledWidth, scaledHeight);
  
      // Move the note upwards
      note.y -= note.speed;
  
      // Remove notes that go off-screen
      if (note.y < -600) {
        notes.splice(i, 1);
      }
    }

  
  // Function to get a random note image
  function randomNoteImage() {
    let images = [redMusicImage, greenMusicImage, blueMusicImage, rainbowMusicImage];
    return random(images);
  }
  pop()


    //Trumpet
    push()
    shadow(20);
    translate(1500, 800);
    let newTrumet = map(other, 0, 100, -50, 50, true);
    let newTrumetRotate = map(other, 0, 100, -50, 50, true);
    let newTrumetColor = map(other, 0, 100, -50, 100, true);
    if(other > 65){
      push()
      tint(90, 90, 30);
      translate(-70, 30)
      image(trumpetImage, newTrumet, newTrumet/2);
      pop()
      push()
      tint(0, 50, 110);
      translate(70, 30)
      image(trumpetImage, newTrumet, newTrumet/2);
      pop()
  }
    push()
    if(other>70){
      rotate((other - 70) * 2.5)
    }

    if(other > 65){
        image(trumpetImage, newTrumet, newTrumet/2)
        pop()
    } else {
      push()
      tint(90, 90, 30);
      translate(-70, 30)
      image(trumpetImage, 0, 0);
      pop()
      push()
      tint(0, 50, 110);
      translate(70, 30)
      image(trumpetImage, 0, 0);
      pop()
      image(trumpetImage, 0, 0);
      
      
       
    }
    pop()
    if (other > 70){
      translate(1500, 800);
      noStroke()
    fill(320, 350, 0, newTrumetColor);
    triangle(-250, 300, 0, -1000, 300, 300);
    }

    
    
    
      
    

    





  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);
  }