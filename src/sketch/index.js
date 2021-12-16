export default function sketch(s) {
  const canvasScaler = 1.2;
  let img_arms;
  let img_all;
  let img_red;
  let img_yellow;
  let img_blue;
  let ar;

  let colourRed = 5;
  let colourYellow = 60;
  let colourBlue = 240
  let colourIncrement = 2

  let slider;

  s.preload = () => {
    // img_red = s.loadImage("assets/emoni-img-red-transp.png");
    img_red = s.loadImage(
      "https://live.staticflickr.com/65535/51747711756_76b40b56a4_o.png"
    );

    // img_yellow = s.loadImage("assets/emoni-img-yellow-transp.png");
    img_yellow = s.loadImage(
      "https://live.staticflickr.com/65535/51747711746_71e64c4a18_o.png"
    );

    // img_blue = s.loadImage("assets/emoni-img-blue-transp.png");
    img_blue = s.loadImage(
      "https://live.staticflickr.com/65535/51747711776_5c0d43461f_o.png"
    );

    // img_all = s.loadImage("assets/emoni-img-all.png");
    img_all = s.loadImage(
      "https://live.staticflickr.com/65535/51747953783_0a0be03f00_o.png"
    );

    // img_arms = s.loadImage("assets/emoni-img-arms.png");
    img_arms = s.loadImage(
      "https://live.staticflickr.com/65535/51746885712_26914f7af5_o.png"
    );
  };

  s.setup = () => {
    s.frameRate(60);

    setTimeout(() => {
      if (s.windowWidth >= s.windowHeight) {
        s.createCanvas(
          s.windowHeight / ar / canvasScaler,
          s.windowHeight / canvasScaler
        );
      } else {
        s.createCanvas(
          s.windowWidth / canvasScaler,
          s.windowWidth / ar / canvasScaler
        );
      }
    }, 100);

    slider = s.createSlider(0, 720, 0);
    slider.position(s.windowWidth / 2 - 100, 15);
    slider.style("width", "200px");
  };

  // ————————————————————————————————————o Draw -->
  // Draw -->
  //
  s.draw = () => {
    s.background(s.color("#0e0e0e"));
    setSizeRatio();
    colorCycling()
  };

  // ————————————————————————————————————o Window Resizing -->
  // Window Resizing -->
  //
  s.windowResized = () => {
    setTimeout(() => {
      if (s.windowWidth >= s.windowHeight) {
        s.resizeCanvas(
          s.windowHeight / canvasScaler / ar,
          s.windowHeight / canvasScaler
        );
      } else {
        s.resizeCanvas(
          s.windowWidth / canvasScaler,
          s.windowWidth / ar / canvasScaler
        );
      }
      s.colorMode(s.RGB);
      s.background(255);
    }, 1);

    // Reapply Image Sizes and Aspect Ratio
    //
    setSizeRatio();
  };

  // ————————————————————————————————————o Size / Aspect Ratio -->
  // Set Size and Aspect Ratio -->
  //
  const setSizeRatio = () => {
    if (s.windowWidth >= s.windowHeight) {
      ar = img_arms.height / img_arms.width;
    } else {
      ar = img_arms.width / img_arms.height;
    }

    // Wider than Tall -->
    //
    if (s.windowWidth >= s.windowHeight) {
      s.colorMode(s.RGB);
      s.tint(255);
      s.image(
        img_arms,
        0,
        0,
        s.windowHeight / ar / canvasScaler,
        s.windowHeight / canvasScaler
      );

      s.tint(255, 100, 100);
      s.image(
        img_all,
        0,
        0,
        s.windowHeight / ar / canvasScaler,
        s.windowHeight / canvasScaler,
      );

      tinting(colourRed, img_red);
      tinting(colourYellow, img_yellow);
      tinting(colourBlue, img_blue);

    } else {
      // Taller than Wide -->
      //
      s.colorMode(s.RGB);
      s.tint(255);
      s.image(
        img_arms,
        0,
        0,
        s.windowWidth / canvasScaler,
        s.windowWidth / ar / canvasScaler
      );

      s.tint(255, 100, 100);
      s.image(
        img_all,
        0,
        0,
        s.windowWidth / canvasScaler,
        s.windowWidth / ar / canvasScaler
      );

      tinting(colourRed, img_red, true);
      tinting(colourYellow, img_yellow, true);
      tinting(colourBlue, img_blue, true);
    }
  };

  // ————————————————————————————————————o Color Cycling -->
  // Color Cycling -->
  // 
  const colorCycling = () => {
    colourRed = colourRed + colourIncrement
    if (colourRed >= 360) {
      colourRed = 0
    }
    // console.log('colourRed', colourRed)

    colourYellow = colourYellow + colourIncrement
    if (colourYellow >= 360) {
      colourYellow = 0
    }

    colourBlue = colourBlue + colourIncrement
    if (colourBlue >= 360) {
      colourBlue = 0
    }
  }

  // ————————————————————————————————————o Apply Tints -->
  // Apply Tints -->
  //
  let tinting = (tint, img, vert) => {
    s.colorMode(s.HSB);
    s.tint(tint, 100, 100);
    if (vert) {
      s.image(
        img,
        0,
        0,
        s.windowWidth / canvasScaler,
        s.windowWidth / ar / canvasScaler
      );
    } else {
      s.image(
        img,
        0,
        0,
        s.windowHeight / ar / canvasScaler,
        s.windowHeight / canvasScaler
      );
    }
  };
}
