export default function sketch(s) {
  let img_arms;
  let img_red;
  let img_yellow;
  let img_blue;
  let mask_red;
  let mask_yellow;
  let mask_blue;
  let ar;
  let colourRed = 5;
  let colourYellow = 60;
  let colourBlue = 240;
  const cycleSpeed = 2;

  s.preload = () => {
    // img_arms = s.loadImage("assets/emoni-img-arms.png");
    img_arms = s.loadImage('https://live.staticflickr.com/65535/51742071212_27bd347738_o.png')

    // img_red = s.loadImage("assets/emoni-img-red.png");
    // mask_red = s.loadImage("assets/emoni-mask-red.png");
    img_red = s.loadImage("https://live.staticflickr.com/65535/51744895183_4b431fafbf_o.png");
    mask_red = s.loadImage("https://live.staticflickr.com/65535/51744895103_55b9ecce29_o.png");

    // img_blue = s.loadImage("assets/emoni-img-blue.png");
    // mask_blue = s.loadImage("assets/emoni-mask-blue.png");
    img_blue = s.loadImage("https://live.staticflickr.com/65535/51745294799_e3aee4fd8a_o.png");
    mask_blue = s.loadImage("https://live.staticflickr.com/65535/51744652116_69fd73c291_o.png");

    // img_yellow = s.loadImage("assets/emoni-img-yellow.png");
    // mask_yellow = s.loadImage("assets/emoni-mask-yellow.png");
    img_yellow = s.loadImage("https://live.staticflickr.com/65535/51744895168_93f572efc4_o.png");
    mask_yellow = s.loadImage("https://live.staticflickr.com/65535/51744895088_e7b5623f75_o.png");
  };

  s.setup = () => {
    s.frameRate(60);

    setTimeout(() => {
      if (s.windowWidth >= s.windowHeight) {
        s.createCanvas(s.windowHeight / ar, s.windowHeight);
      } else {
        s.createCanvas(s.windowWidth, s.windowWidth / ar);
      }
    }, 100);

    img_red.mask(mask_red);
    img_blue.mask(mask_blue);
    img_yellow.mask(mask_yellow);
  };

  s.draw = () => {
    s.background(s.color("#0e0e0e"));
    setSizeRatio();

    // Color cyclers
    //
    colourRed += cycleSpeed;
    if (colourRed > 360) {
      colourRed = 0;
    }
    colourYellow += cycleSpeed;
    if (colourYellow > 360) {
      colourYellow = 0;
    }
    colourBlue += cycleSpeed;
    if (colourBlue > 360) {
      colourBlue = 0;
    }
  };

  s.windowResized = () => {
    setTimeout(() => {
      if (s.windowWidth >= s.windowHeight) {
        s.resizeCanvas(s.windowHeight / ar, s.windowHeight);
      } else {
        s.resizeCanvas(s.windowWidth, s.windowWidth / ar);
      }
      s.colorMode(s.RGB);
      s.background(255);
    }, 1);

    setSizeRatio();
  };

  // Set size and aspect ratio
  //
  let setSizeRatio = () => {
    if (s.windowWidth >= s.windowHeight) {
      ar = img_arms.height / img_arms.width;
    } else {
      ar = img_arms.width / img_arms.height;
    }

    if (s.windowWidth >= s.windowHeight) {
      s.colorMode(s.RGB);
      s.tint(255);
      s.image(img_arms, 0, 0, s.windowHeight / ar, s.windowHeight);

      // Set tints to cycle through the color wheel
      // using hue, saturation and brightness
      //
      tintsAndImgs(colourRed, img_red)
      tintsAndImgs(colourYellow, img_yellow)
      tintsAndImgs(colourBlue, img_blue)
    } else {
      s.colorMode(s.RGB);
      s.tint(255);
      s.image(img_arms, 0, 0, s.windowWidth, s.windowWidth / ar);

      tintsAndImgs(colourRed, img_red, true)
      tintsAndImgs(colourYellow, img_yellow, true)
      tintsAndImgs(colourBlue, img_blue, true)
    }
  };

  let tintsAndImgs = (tint, img, vert) => {
    s.colorMode(s.HSB);
    s.tint(tint, 40, 100);
    if (vert) {
      s.image(img, 0, 0, s.windowWidth, s.windowWidth / ar);
    } else {
      s.image(img, 0, 0, s.windowHeight / ar, s.windowHeight);
    }
  }
}
