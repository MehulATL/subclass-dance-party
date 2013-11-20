var Ken = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.oldStep = Dancer.prototype.step;
  // this.timeBetweenSteps = timeBetweenSteps;
  // this.step;
  this.$node = $('<img src= "src/ken.gif" class = "dance ken">');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.setPosition(top,left);
};

Ken.prototype = Object.create(Dancer.prototype);
Ken.prototype.constructor = Ken;
Ken.prototype.step = function(){
  Dancer.prototype.step.call(this);
  //this.$node.toggle();
};

Ken.prototype.lineup = function (left){
  var top = this.top;
  Dancer.prototype.setPosition.call(this, top, left);
};

Ken.prototype.setPosition = function (top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};