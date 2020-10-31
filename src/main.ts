import Phaser from "phaser";
import { HelloPhaserScene } from "./scenes/hello-phaser.scene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: "rgb(18, 85, 85)",
  width: 800,
  height: 600,
  scene: HelloPhaserScene,
};

export default new Phaser.Game(config);
