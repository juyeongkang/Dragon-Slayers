let img;
let randomIndex;
let button;
let button2;
let attack_button;
let animating = false;
let animating2 = false;
let imgs = [];
let imgs2 = [];
let enemy;
let imageCounter = 1;
let job;
let weapon;
let first;
let names = ['Abel.', 'Anais.', 'Cara.', 'Ashes'];
let weapons = ['Magic Wand', 'Short Sword', 'Long Sword', 'Bow'];
let jobs = ['Thief', 'Magician', 'Archer', 'Worrier']

function preload() {
  img = loadImage('assets/main.jpg');
}

function setup() {
  for (let i = 1; i <= 4; i++) {
    imgs[i] = loadImage(`assets/heros/hero_${i}.png`);
  }

  for (let i = 1; i <= 4; i++) {
    imgs2[i] = loadImage(`assets/weapon/weapon_${i}.png`);

  }
  enemy = loadImage(`assets/dragon/dragon.png`);

  createCanvas(1500, 1000)

  var scale = 0.8;
  imageMode(CENTER);
  image(img, 0.5 * width, 0.5 * height, scale * width, scale * img.height * width / img.width)
  frameRate(12);

  textFont('VT323');
  textStyle(BOLD);
  textSize(25);
  fill(209, 138, 44);
  text("In the dragons' Ages you go on a journey to kill dragons", 730, 240);
  text(" to get the Dragon Slayer title.", 850, 280);

  button = createButton("Begin your journey");
  button.style("background-color", "#961e1e");
  button.style("font-family", "VT323")
  button.style("font-size", "20px")
  button.style("padding", "50px,40px");
  button.mousePressed(buttonPressed);
  button.position(1200, 400);
}

function draw() {
  if (animating == true && animating2 == false) {
    clear();
    image(imgs[imageCounter], width / 2, height / 2);

    if (imageCounter < imgs.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 1;
    }

  } else if (animating == false && animating2 == true) {
    clear();
    image(imgs2[imageCounter], width / 2, height / 2);

    if (imageCounter < imgs2.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 1;
    }

  }
}

function randomizer1() {
  animating = false;
  animating2 = false;
  clear();

  let name = random(names);
  text("Hello word, my name is " + name, 500, 300);
  first = name;

  button = createButton("Identify your classes")
  button.style("background-color", "#961e1e");
  button.style("font-family", "VT323")
  button.style("font-size", "20px")
  button.style("padding", "50px,40px");
  button.mousePressed(buttonPressed2);
  button.position(1200, 400);
}

function randomizer2() {
  animating = false;
  clear();
  randomIndex = int(random(1, 5));
  image((imgs[randomIndex]), width / 2, height / 2);

  job = randomIndex;

  textFont('VT323');
  textStyle(BOLD);
  textSize(25);

  if (randomIndex == 1) {
    text("Your class is " + jobs[0] + ".", 550, 600)
  } else if (randomIndex == 2) {
    text("Your class is " + jobs[1] + ".", 550, 600)
  } else if (randomIndex == 3) {
    text("Your class is " + jobs[2] + ".", 550, 600)
  } else if (randomIndex == 4) {
    text("Your class is " + jobs[3] + ".", 550, 600)
  }

  button = createButton("Pick up equipment")
  button.style("background-color", "#961e1e");
  button.style("font-family", "VT323")
  button.style("font-size", "20px")
  button.style("padding", "50px,40px");
  button.mousePressed(buttonPressed3);
  button.position(1200, 400);
}

function randomizer3() {
  animating = false;
  animating2 = false;
  clear();

  randomIndex = int(random(1, 5));

  image((imgs2[randomIndex]), width / 2, height / 2);

  weapon = randomIndex;

  textFont('VT323');
  textStyle(BOLD);
  textSize(25);

  if (randomIndex == 1) {
    text("Your main weapon is " + weapons[0] + ".", 550, 650)
  } else if (randomIndex == 2) {
    text("Your main weapon is " + weapons[1] + ".", 550, 650)
  } else if (randomIndex == 3) {
    text("Your main weapon is " + weapons[2] + ".", 550, 650)
  } else if (randomIndex == 4) {
    text("Your main weapon is " + weapons[3] + ".", 550, 650)
  }

  button = createButton("Let's kill the Dragon.");
  button.style("background-color", "#961e1e");
  button.style("padding", "50px,40px");
  button.style("font-family", "VT323")
  button.style("font-size", "20px")
  button.mousePressed(buttonPressed4);
  button.position(1200, 400);

  button2 = createButton("Decide your class and your weapons again.");
  button2.style("background-color", "#961e1e");
  button2.style("padding", "50px,40px");
  button2.style("font-family", "VT323")
  button2.style("font-size", "20px")
  button2.mousePressed(resetButton);
  button2.position(1200, 600);
}

function dragon() {
  animating = false;
  animating2 = false;

  clear();

  image(imgs[job], 500, 500);
  image(enemy, 900, 500);


  attack_button = createButton("Attack");
  attack_button.style("background-color", "#961e1e");
  attack_button.mousePressed(buttonPressed5);
  attack_button.style("padding", "50px,40px");
  attack_button.position(900, 400);
}

function attack() {
  let final = ["Your name is " + first + " and your class is " + jobs[job - 1] +".\nYou killed the dragon with your weapon " + weapons[weapon - 1] + "\n and won the Dragon Slayer title."
  , "Your name is "  + first + " and your class is " + jobs[job - 1] +".\nYour weapon " + weapons[weapon - 1] + " you had a fierce battle with the dragon,\nbut was killed by the dragon.",
  "Your name is " + first + ".\nYour class is " + jobs[job - 1] +". Your weapon is " + weapons[weapon - 1] + " you had a fierce battle with the dragon,\nbut the dragon was seriously injured and fled to another world."];

  let ends = random(final);

  textFont('VT323');
  textStyle(BOLD);
  textSize(25);
  textLeading(30);
  text(ends, 300, 650);

  button = createButton("Try again?")
  button.style("background-color", "#961e1e");
  button.mousePressed(resetbutton2);
  button.style("padding", "50px,40px");
  button.position(500, 500);

}
function buttonPressed() {
  button.hide();
  animating = false;
  animating2 = false;
  setTimeout(randomizer1, 20);
}

function buttonPressed2() {
  button.hide();
  animating = true;
  setTimeout(randomizer2, 1000);
}

function buttonPressed3() {
  button.hide();
  animating = false;
  animating2 = true;
  setTimeout(randomizer3, 1000);
}

function buttonPressed4() {
  button.hide();
  button2.hide();
  animating = false;
  animating2 = false;
  setTimeout(dragon, 50);
}

function buttonPressed5() {
  setTimeout(attack, 100);
}

function resetButton() {
    button.hide();
    button2.hide();
    setTimeout(setup, 40);
}

function resetbutton2() {
  button.hide();
  button2.hide();
  attack_button.hide();
  setTimeout(setup, 40);
}
