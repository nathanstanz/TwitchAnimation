/*var main = function() {
    $('.panel').animate({marginLeft: '0px'}, 3000).delay(3000);
    $('.panel').animate({marginLeft: '-385px'}, 3000);
}; */


var twitchPanelAnimation = function() {
    $('.twitch-panel').animate({marginLeft: '0px'}, 3000).delay(3000);
    $('.twitch-panel').animate({marginLeft: '-385px'}, 3000).delay;
    setInterval(twitchPanelAnimation, 270000);
}; 



var twitterPanelAnimation = function() {
    $('.twitter-panel').animate({marginLeft: '0px'}, 3000).delay(3000);
    $('.twitter-panel').animate({marginLeft: '-385px'}, 3000);
    setInterval(twitterPanelAnimation, 270000);
}; 



var questionPanelAnimation = function() {
    $('.question-panel').animate({marginLeft: '0px'}, 3000).delay(3000);
    $('.question-panel').animate({marginLeft: '-385px'}, 3000);
    setInterval(questionPanelAnimation, 270000);
}; 



$(document).ready(function(){
    setTimeout(twitchPanelAnimation, 0);
    setTimeout(twitterPanelAnimation, 90000);
    setTimeout(questionPanelAnimation, 180000);
});

/*$(document).ready(twitchPanelAnimation);

$(document).ready(function(){
    setTimeout(twitterPanelAnimation, 9000);
});

$(document).ready(function(){
    setTimeout(questionPanelAnimation, 18000);
}); */