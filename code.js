var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["47085f3e-bfc9-4733-8d94-a7cdfa4ece7f","a7a1c7a4-b1bc-46b2-b7d0-5e132d88e694"],"propsByKey":{"47085f3e-bfc9-4733-8d94-a7cdfa4ece7f":{"name":"400px-Kunai_yondaime.svg.png_1","sourceUrl":"assets/v3/animations/g_9IubX-WtSAs_-s7QqZlYqPRaNFE7IQeG0G8E6GCLs/47085f3e-bfc9-4733-8d94-a7cdfa4ece7f.png","frameSize":{"x":400,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"nDKCJEaXNz6DJSRhzppJqOFHF99a_UJG","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":100},"rootRelativePath":"assets/v3/animations/g_9IubX-WtSAs_-s7QqZlYqPRaNFE7IQeG0G8E6GCLs/47085f3e-bfc9-4733-8d94-a7cdfa4ece7f.png"},"a7a1c7a4-b1bc-46b2-b7d0-5e132d88e694":{"name":"boruto","sourceUrl":"assets/v3/animations/g_9IubX-WtSAs_-s7QqZlYqPRaNFE7IQeG0G8E6GCLs/a7a1c7a4-b1bc-46b2-b7d0-5e132d88e694.png","frameSize":{"x":783,"y":1021},"frameCount":1,"looping":true,"frameDelay":4,"version":"OATb1VTgrcCDi1SeJWdw1ZAwKkBnZO95","loadedFromSource":true,"saved":true,"sourceSize":{"x":783,"y":1021},"rootRelativePath":"assets/v3/animations/g_9IubX-WtSAs_-s7QqZlYqPRaNFE7IQeG0G8E6GCLs/a7a1c7a4-b1bc-46b2-b7d0-5e132d88e694.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var boruto;
var kunai;

kunai=createSprite(300,300,500,300)
kunai.setAnimation("400px-Kunai_yondaime.svg.png_1")
boruto=createSprite(200,300,500,300)
boruto.setAnimation("boruto")
boruto.scale=0.3
kunai.scale=0.5


function draw(){
drawSprites();  
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
