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
    img_arms = s.loadImage("assets/emoni-img-arms.png");

    img_red = s.loadImage("assets/emoni-img-red.png");
    mask_red = s.loadImage("assets/emoni-mask-red.png");

    img_blue = s.loadImage("assets/emoni-img-blue.png");
    mask_blue = s.loadImage("assets/emoni-mask-blue.png");

    img_yellow = s.loadImage("assets/emoni-img-yellow.png");
    mask_yellow = s.loadImage("assets/emoni-mask-yellow.png");
  };

  s.setup = () => {
    s.frameRate(60);
    s.createCanvas(s.windowWidth, s.windowHeight);

    img_red.mask(mask_red);
    img_blue.mask(mask_blue);
    img_yellow.mask(mask_yellow);
  };

  s.draw = () => {
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
    s.resizeCanvas(s.windowWidth, s.windowHeight);

    setTimeout(() => {
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
      s.colorMode(s.HSB);
      s.tint(colourRed, 100, 100);
      s.image(img_red, 0, 0, s.windowHeight / ar, s.windowHeight);
      s.tint(colourYellow, 100, 100);
      s.image(img_yellow, 0, 0, s.windowHeight / ar, s.windowHeight);
      s.tint(colourBlue, 100, 100);
      s.image(img_blue, 0, 0, s.windowHeight / ar, s.windowHeight);
    } else {
      s.colorMode(s.RGB);
      s.tint(255);
      s.image(img_arms, 0, 0, s.windowWidth, s.windowWidth / ar);

      s.colorMode(s.HSB);
      s.tint(colourRed, 100, 100);
      s.image(img_red, 0, 0, s.windowWidth, s.windowWidth / ar);
      s.tint(colourYellow, 100, 100);
      s.image(img_yellow, 0, 0, s.windowWidth, s.windowWidth / ar);
      s.tint(colourBlue, 100, 100);
      s.image(img_blue, 0, 0, s.windowWidth, s.windowWidth / ar);
    }
  };

  // let colorCycler = (theColor) => {
  //   theColor += cycleSpeed;
  //   if (theColor > 360) {
  //     theColor = 0;
  //   }
  // };
}
