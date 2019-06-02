function LoadScene(){
  Phaser.Scene.call(this, {key: "loadScene"});
}

LoadScene.prototype = Object.create(Phaser.Scene.prototype);

LoadScene.prototype.init = function(){

}

LoadScene.prototype.preload = function(){

  this.load.spritesheet('menu', '/game/assets/menu.png', {
    frameHeight: 229,
    frameWidth: 35
  });

  this.load.image('background', '/game/assets/background.png');

  let loadingBar = this.add.graphics({
    fillStyle:{
      color: 0xffffff
    }
  });

  this.load.on('progress', (percent)=>{
    loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50)
    console.log(percent);
  });

  this.load.on('complete', ()=>{
    console.log("loading done");
  });

}

LoadScene.prototype.create = function(){
  this.scene.start('mainMenue', "Hello from Load Scene");
}

LoadScene.prototype.update = function(){

}

let loadScene = new LoadScene();
