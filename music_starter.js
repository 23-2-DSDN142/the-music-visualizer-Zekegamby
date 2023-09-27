let firstRun = true;
let drumImage;
let backgrounImage;
let trumpetImage;
let trumpetImage1;
let trumpetImage2;
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
    let newDrum = map(drum, 0, 100, -50, 50, true);
    image(drumImage, newDrum, newDrum/2);
    print(newDrum);
    pop();


    //Trumpet
    push()
    shadow(20);
    translate(1500, 800);
    let newTrumet = map(other, 0, 100, -50, 50, true);
    let newTrumetRotate = map(other, 0, 100, -35, 50, true);
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
      rotate(newTrumetRotate)
    }
    // if(other>69){
    //   rotate(2)
    // }
    // if(other>70){
    //   rotate(2)
    // }
    // if(other>71){
    //   rotate(1)
    // }
    // if(other>72){
    //   rotate(1)
    // }
    // if(other>73){
    //   rotate(1)
    // }
    // if(other>74){
    //   rotate(1)
    // }
    // if(other>75){
    //   rotate(1)
    // }
    // if(other>80){
    //   rotate(5)
    // }
    // if(other>85){
    //   rotate(5)
    // }
    // if(other>90){
    //   rotate(5)
    //
    // }
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
    if (other > 65){
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