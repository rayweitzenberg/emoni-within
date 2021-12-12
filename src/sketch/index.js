export default function sketch(s) {
  let backgroundColor;
  let ewithin;
  let ar;

  s.preload = () => {
    ewithin = s.loadImage("assets/emoni-within.jpg");
  };

  s.setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);
    backgroundColor = s.color(s.random(255), s.random(255), s.random(255));

    ar = ewithin.height / ewithin.width;
    s.image(ewithin, 0, 0, s.windowWidth, s.windowWidth * ar);
  };

  s.draw = () => {
    // s.background(backgroundColor);
  };

  s.mousePressed = () => {
    backgroundColor = s.color(s.random(255), s.random(255), s.random(255));
  };
}
