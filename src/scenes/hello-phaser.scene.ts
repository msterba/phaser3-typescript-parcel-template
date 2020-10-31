import * as Phaser from "phaser";

export class HelloPhaserScene extends Phaser.Scene {
  constructor() {
    super("hello-phaser");
  }

  preload() {
    this.load.image("logo", "images/phaser3-logo.png");
  }

  create() {
    const logo = this.add.image(400, 70, "logo");

    this.tweens.add({
      targets: logo,
      y: 350,
      duration: 1500,
      ease: "Sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }
}
