function MainMenue(){
  Phaser.Scene.call(this, {key: 'mainMenue'});
}

MainMenue.prototype = Object.create(Phaser.Scene.prototype);


MainMenue.prototype.init = function(data){
  console.log(data);
}

MainMenue.prototype.preload = function(){

}

MainMenue.prototype.create = function() {
  this.add.image(0, 0, 'background').setOrigin(0);
}

MainMenue.prototype.update = function() {

}

let mainMenue = new MainMenue();
