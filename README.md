Tutorial of how to make a RSS feed using Feednami which is an alternative to google api which no longer works. This is a basic example and can be improved.

First go ahead and make a new ionic project

$ npm install -g cordova ionic

 $ ionic start exampleProject blank

Now find index.html and insert...

<script src="https://storage.googleapis.com/feednami-static/js/feednami-client-v1.0.1.js"></script>

Into the header, then in <ion-content> below Ionic Blank Starter insert a new div

<div id ="feed" ng-controller="feedCtrl"> </div>

Open app.js, now we are going to make the controller from Feednami that will get our rss feed.

.controller('feedCntl', function(){
  
   var url = 'http://daringfireball.net/feeds/articles'
     feednami.load(url,function(result){
    if(result.error){
      console.log(result.error)
    }
    else{
      var entries = result.feed.entries
      for(var i = 0; i < entries.length; i++){
        var entry = entries[i]
        console.log(entry.title)
      }
    }
  })
})

Now run the app using $ Ionic serve --lab in cmd line. Then right click inspect  and the feed will appear in the console. Now we need the function to get that feed and make new divs for every title.
Go back to app.js and add these changes to the function.


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


And there you have it one rss feed thanks to the people at feednami. You can style it up in the css anyway you like and just add or change the class in the function here '<p class="card">.

Useful links

make twitter rss feed - Twitter-rss

find rss feed of wordpress - wp-rss

let me know what you think in the comments below any improvements welcome :)
