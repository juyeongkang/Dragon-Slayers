
let randomIndex;
let button;
let animating = false;
let face = [];
let imageCounter = 1;
let first =


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
  textSize(21);
  fill(33, 247, 5);
  imageMode(CENTER);
  frameRate(12);

  text("Kðrêå hå§ å lðñg hï§†ðr¥ å§ å ñå†ïðñ åñÐ ï† ", 60, 100);
  text("hå§ ÐêvêlðþêÐ å µñïqµê ñå†ïðñål ïÐêñ†ï†¥ µñÐêr ", 60, 70);
  text("†hê Çðñ£µ¢ïµ§ †råÐï†ïðñ §êêïñg †hê ñå†ïðñ å§ ", 60, 40);
  text("åñ êx†êñÐêÐ £ðrm ð£ £åmïl¥. Hðwêvêr,§µ¢h å ¢ðñ¢êþ†ïðñ ð£ ñå†ïðñål ïÐêñ†ï†¥ hå§ ßêêñ  ", 60, 210);
  text("§µ¢h å ¢ðñ¢êþ†ïðñ ð£ ñå†ïðñål ïÐêñ†ï†¥ hå§ ßêêñ", 60, 130);
  text("k໐rēค hคŞ ค l໐ຖງ hiŞt໐rฯ คŞ ค ຖคti໐ຖ คຖ໓ it hคŞ ໓ēงēl໐pē໓ ค นຖi๑นē.", 60, 180);
  text("ຖคti໐ຖคl i໓ēຖtitฯ นຖ໓ēr thē ¢໐ຖfน¢iนŞ trค໓iti໐ຖ Şēēiຖງ thē.", 60, 240);
  text("ຖคti໐ຖ คŞ คຖ ēxtēຖ໓ē໓ f໐r๓ ໐f fค๓ilฯ h໐ຟēงēr, Şน¢h ค ¢໐ຖ¢ēpti໐ຖ ໐f ຖคti໐ຖคl.", 60, 270);
  text("i໓ēຖtitฯ hคŞ ๖ēēຖ ¢hคຖງiຖງ นຖ໓ēr rคpi໓lฯ ¢hคຖງiຖງ ¢ir¢น๓Ştคຖ¢ēŞ Şน¢h คŞ ງl໐๖คliຊคti໐ຖ.", 60, 300);
  text("ᏦᎧᏒᏋᏗ ᏂᏗᏕ Ꮧ ᏝᎧᏁᎶ ᏂᎥᏕᏖᎧᏒᎩ ᏗᏕ Ꮧ ᏁᏗᏖᎥᎧᏁ ᏗᏁᎴ ᎥᏖ ᏂᏗᏕ ᎴᏋᏉᏋᏝᎧᎮᏋᎴ Ꮧ .", 60, 330);
  text("ᏬᏁᎥᎤᏬᏋ ᏁᏗᏖᎥᎧᏁᏗᏝ ᎥᎴᏋᏁᏖᎥᏖᎩ ᏬᏁᎴᏋᏒ ᏖᏂᏋ ፈᎧᏁᎦᏬፈᎥᏬᏕ ᏖᏒᏗ.", 60, 360);
  text("¢håñgïñg µñÐêr råþïÐl¥ ¢håñgïñg ¢ïr¢µm§†åñ¢ê§ §µ¢h å§ glðßålïzå†ïðñ.", 60, 390);
  text("What is my Korean identity?", 270, 460);
  text("What is my Korean identity?", 250, 490);
  text("What is my Korean identity?", 230, 520);
  text("What is my Korean identity?", 210, 550);
  text("What is my Korean identity?", 190, 580);
  text("What is my Korean identity?", 170, 610);
  text("What is my Korean identity?", 150, 640);
  text("What is my Korean identity?", 130, 670);








  button = createButton("Get My Identity");
  button.mousePressed(buttonPressed);
  button.style("padding","50px,40px");
  button.style("background-color", "#35f50a");

}

function draw()
{
  if (animating == true)
  {
    clear();
    image(face[imageCounter], width / 2, height / 2);

    if (imageCounter < face.length - 1)
    {
      imageCounter++;
      console.log(imageCounter);
    } else
    {
      imageCounter = 1;
    }
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
