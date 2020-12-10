let randomIndex;
let button;
let animating = false;
let face = [];
let imageCounter = 1;
let first = 0


[
  {
  first: "Ju",
  middle: "-Yeong",
  last: "Kang",
  meaning: "The glory of the Lord."
  },
  {
  first: "Ji ",
  middle: "-Hye",
  last: "Choi",
  meaning:"Grace."
  },
  {
  first: "Jae",
  middle: "-Min",
  last:  "Lee",
  meaning:"Brilliant and bright person."
  },
  {
  first: "Hyeon",
  middle: "-Seo",
  last: "Kim",
  meaning:"Noble person."
  },
  {
  first: "Yeon",
  middle: "-Jae",
  last: "Park",
  meaning:"Shining gem stone."
  },
  {
  first: "Hyo",
  middle: "-Jin",
  last:"Jo",
  meaning:"Sincere virtue."
  },
  {
  first: "Do",
  middle: "-Bin",
  last:"Yun",
  meaning:"bless from ancestors."
  },
  {
  first: "Soo",
  middle: "-Jong",
  last:"Han",
  meaning:"Talented in many things."
  },
  {
  first: "Jong",
  middle: "-Rim",
  last:"Jung",
  meaning:"enjoying the world."
  },
  {
  first: "Dong",
  middle: "-Won",
  last:"Seo",
  meaning:"Rising sun from the east."
  }
];

function setup()
{

  for (let i = 1; i <= 10; i++)
  {
    face[i] = loadImage(`assets/face_${i}.png`)
  }
  textFont('VT323');
  textStyle(BOLD);
  createCanvas(700, 700);
  background(0, 0, 0);
  textSize(25);
  fill(33, 247, 5);
  imageMode(CENTER);
  frameRate(12);


  text("In the dragons' Ages you go on a journey to kill dragons", 60, 240);
  text(" to get the Dragon Slayer title", 52, 280);


  button = createButton("Begin your journey");
  button.mousePressed(buttonPressed);
  button.position(280,650);
  button.style("padding","50px,40px");
  button.style("background-color", "#35f50a");

}

function draw()
{
  if (animating == true)
  {
    clear();
    image(face[imageCounter], width / 2, height / 2);
    console.log("imageCounter:" + imageCounter)
    if (imageCounter < face.length - 1)
    {
      imageCounter++;
  //    console.log("imageCouter:" + imageCounter);
    } else
    {
      imageCounter = 1;
//      console.log("secondimgCouter:" + imageCounter);
    }
  //  console.log("final: " + imageCounter)
  }
}

function randomizer()
{
  animating = false;

  if (first[0])
  {
  //background(random(200, 255));
  clear();
    randomIndex = int(random(first.length));
    text(`Hi, ${first[randomIndex].first} ${first[randomIndex].middle} ${first[randomIndex].last}`, 100, 200);
    text(`your Korean name means ${first[randomIndex].meaning}`, 100, 230);
    print("randomIndex: " + randomIndex)

    image(random(face), width / 2, height / 2);
    first.splice(randomIndex, 1);
  } else
  {
      background(0, 0, 0);
      text("Explore again!", 120, 120);
  }
}

function buttonPressed()
{
  animating = true;
  setTimeout(randomizer, 2000);
}
