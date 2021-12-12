export default function sketch(s) {
  let ewithin;
  let emask;
  let ar;
  let startColor = s.color(255, 255, 255);
  let newColor = s.color(s.random(255), s.random(255), s.random(255), 126);
  let amt = 0;

  s.preload = () => {
    // ewithin = s.loadImage("assets/emoni-within.jpg");
    // emask = s.loadImage("assets/emoni-within-mask.png");

    ewithin = s.loadImage("https://live.staticflickr.com/65535/51740197162_7e08a7cc41_b.jpg");
    emask = s.loadImage("https://live.staticflickr.com/65535/51741661129_c7aae754a3_o.png");
  };

  s.setup = () => {
    s.frameRate(60);
    s.createCanvas(s.windowWidth, s.windowHeight);

    if (s.windowWidth >= s.windowHeight) {
      ar = ewithin.height / ewithin.width;
    } else {
      ar = ewithin.width / ewithin.height
    }
    ewithin.mask(emask);
  };

  s.draw = () => {
    amt += 0.01;
    if (amt >= 1) {
      amt = 0.0;
      startColor = newColor;
      newColor = s.color(s.random(255), s.random(255), s.random(255));
    }

    s.tint(s.lerpColor(startColor, newColor, amt));

    if (s.windowWidth >= s.windowHeight) {
      s.image(ewithin, 0, 0, s.windowHeight / ar, s.windowHeight);
    } else {
      s.image(ewithin, 0, 0, s.windowWidth, s.windowWidth / ar);
    }
  };

  s.windowResized = () => {
    setTimeout(() => {
      s.background(255, 255, 255)
    }, 1)
    s.resizeCanvas(s.windowWidth, s.windowHeight);

    if (s.windowWidth >= s.windowHeight) {
      ar = ewithin.height / ewithin.width;
    } else {
      ar = ewithin.width / ewithin.height
    }

    if (s.windowWidth >= s.windowHeight) {
      s.image(ewithin, 0, 0, s.windowHeight / ar, s.windowHeight);
    } else {
      s.image(ewithin, 0, 0, s.windowWidth, s.windowWidth / ar);
    }
  }

  s.mousePressed = () => {
    newColor = s.color(s.random(255), s.random(255), s.random(255));
  };
}
