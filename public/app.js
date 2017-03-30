var makeRequest = function(url, callback){
  //create a new HMLHTTPrequest object
  var request = new XMLHttpRequest();

  //set type of request, and the url
  request.open("GET", url);

  //set the callback th`t we want to use when the request is comlete
  request.onload = callback;

//write an onerror function too

  //send the request
  request.send();
};

var requestComplete = function(){
  if(this.status !== 200){
    return;
  }

  // grab the respomse text
  var jsonString = this.responseText;
  var albums = JSON.parse(jsonString);

  populateList(albums);
}


var populateList = function(albums){

var albums = albums.albums.items;


  albums.forEach(function(album){
    var ul = document.querySelector('#results');
    var li = document.createElement('li');
    li.setAttribute("class", "list-group-item");
    var aLink = document.createElement('a');
    aLink.innerText = album.name;
    aLink.href = album.url;
    li.appendChild(aLink);
    ul.appendChild(li);
    // li.innerText = album.name;
  });
};

var app = function(){
  var inputBox = document.querySelector('#search-query').value;
  inputBox.addEventListener("search", makeRequest(url, requestComplete));
  var url1 = 'https://api.spotify.com/v1/search?q=';
  var url2 = '&type=album';
  var searchTerm = 'blue';
  url = url1+searchTerm+url2;
  // makeRequest(url, requestComplete);
  // console.log("this " + x);
  inputBox.onsearch = function(){
    makeRequest(url, requestComplete);
  inputBox.addEventListener("search", makeRequest(url, requestComplete));

  
  }
}

window.onload = app;