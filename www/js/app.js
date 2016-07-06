// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller('feedCntl', function(){

  var blogDiv = document.getElementById("feed") //get our div of feed
  
   var url = 'http://daringfireball.net/feeds/articles' //url of rss feed
  feednami.load(url,function(result){
    if(result.error){
      console.log(result.error) //if it doesnt work 
    }
    else{
      var entries = result.feed.entries
      for(var i = 0; i < entries.length; i++){
        var entry = entries[i]


        //create div elemets for entries 
        var div = document.createElement('div')
        div.setAttribute('class','entry')
        div.innerHTML = '<p class="card"><a href="'+entry.link+'" target="_blank">'+entry.title+'</a></p>'
        blogDiv.appendChild(div)
      }
    }
  })
})




.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
