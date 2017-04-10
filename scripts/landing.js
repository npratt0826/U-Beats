
var revealPoint = function(){
    var animatePoints = document.getElementsByClassName("point");
    for(var i=0; i < animatePoints.length; i++){
        animatePoints[i].style.opacity = 1;
        animatePoints[i].style.transform = "scaleX(1) translateY(0)";
        animatePoints[1].style.msTransform = "scaleX(1) translateY(0)";
        animatePoints[1].style.WebkitTransform = "scaleX(1) translateY(0)";
    
    }
}

   