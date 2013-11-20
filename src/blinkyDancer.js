var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.oldStep = Dancer.prototype.step;
  // this.timeBetweenSteps = timeBetweenSteps;
  // this.step;
  this.left = left;
  this.top = top;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

BlinkyDancer.prototype.lineup = function (left){
  var top = this.top;
  Dancer.prototype.setPosition.call(this, top, left);
};