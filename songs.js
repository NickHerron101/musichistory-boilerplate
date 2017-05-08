




// var songs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// songs.unshift("In Bloom - by Nirvana on the album Nevermind");
// songs.push("Fluffy - by Wolf Alice on the album My Love is Cool");

// console.log(songs);


// //looping and replacing
// for (var i = 0; i < songs.length; i++) {
// 	songs[i] = songs[i].replace("*", "");
// 	songs[i] = songs[i].replace(/ > /g, " - ");
// 	songs[i] = songs[i].replace("(", "");
// 	songs[i] = songs[i].replace("!", "");
// 	songs[i] = songs[i].replace("@", "");
// }
// console.log("newArray",songs);

// // putting in new divs for the most part
// songs.forEach(function(element) {
// 	quoteBlock = `<div>${songs[0]}
// 					  </div><br><div>${songs[1]}
// 					  </div><br><div>${songs[2]}
// 					  </div><br><div>${songs[3]}
// 					  </div><br><div>${songs[4]}
// 					  </div><br><div>${songs[5]}
// 					  </div><br><div>${songs[6]}
// 					  </div><br>`;
// });

// // songs.forEach(function(element){
// // 	quoteBlock += `<div>${songs}</div><br>`
// // });
// main.innerHTML = quoteBlock;

// var addMusic = document.getElementById("addMusic");
// var profile = document.getElementById("pro");
// var formFill = document.getElementById("formFill");
// var wrapper = document.getElementById("wrapper");

// addMusic.addEventListener("click", function(event){
// 	formFill.classList.remove("hidden");
// 	wrapper.classList.add("hidden");
// })
// profile.addEventListener("click", function(event){
// 	wrapper.classList.remove("hidden");
// 	formFill.classList.add("hidden");
// })


/// getting values for input boxes
// var addButton = document.getElementById("buttonAdd");
// addButton.addEventListener("click", function(event){
// 	console.log("click",event);
// var songName = document.getElementById("SongName").value;
// var artist = document.getElementById("artist").value;
// var album = document.getElementById("album").value;
// 	console.log("songname",songName);
// 	var newSong ="";
// 	newSong += `<div>${songName}| ${artist} | ${album}</div>`
// 	var main = document.getElementById("main");
// 	console.log("main",main);
// 	main.innerHTML += newSong;
// })

var main = document.getElementById("main");

var dataRequest2 = new XMLHttpRequest();
dataRequest2.addEventListener("load", dataRequest2LoadComplete);
dataRequest2.addEventListener("error", dataRequest2Error);

function dataRequest2LoadComplete(event) {
  console.log("thing data has LOADED");
  var tunes = JSON.parse(event.target.responseText);
  console.log("tuneData",tunes);
  showData(tunes);
}

function showData(stuffToShow) {
	console.log("stuffToShow",stuffToShow);
	var newSongInfo = "";
	for (var i = 0; i<stuffToShow.things.length; i++) {
		console.log("stuffToShow",stuffToShow.things[i]);
		newSongInfo += `<div id=new${i}>${stuffToShow.things[i].name} | ${stuffToShow.things[i].artist} | ${stuffToShow.things[i].album}<button class="delete">delete</button></div>`;
	}
	main.innerHTML += newSongInfo;

	var deleteButton = document.getElementsByClassName("delete");
	for (var j = 0; j < deleteButton.length; j++) {
		deleteButton[j].addEventListener("click", function (event){
			console.log("event",event);
			main.removeChild(event.target.closest('div'));
		});
	}
}
function dataRequest2Error(event) {
  console.log("dataRequest2 has error");
}

dataRequest2.open("GET", "tunes.json");
dataRequest2.send();

///////////////////////////////////////////////////////////////////

var dataRequest = new XMLHttpRequest();
dataRequest.addEventListener("load", dataRequestLoadComplete);
dataRequest.addEventListener("error", dataRequestError);

var tunes2;

function dataRequestLoadComplete(event) {
  console.log("thing data has LOADED");
  tunes2 = JSON.parse(event.target.responseText);
  console.log("tuneData",tunes2);
  // showData(tunes2);
}

var moreButton = document.getElementById("more");
moreButton.addEventListener("click", function(event){
	console.log("click",event);

	showData(tunes2);

});

function showData(stuffToShow) {
	console.log("stuffToShow",stuffToShow);
	var newSongInfo = "";
	for (var i = 0; i<stuffToShow.things.length; i++) {
		console.log("stuffToShow",stuffToShow.things[i]);
		newSongInfo += `<div id=new${i}>${stuffToShow.things[i].name} | ${stuffToShow.things[i].artist} | ${stuffToShow.things[i].album}<button class="delete">delete</button></div>`;
	}
	main.innerHTML += newSongInfo;

	var deleteButton = document.getElementsByClassName("delete");
	for (var j = 0; j < deleteButton.length; j++) {
		deleteButton[j].addEventListener("click", function (event){
			console.log("event",event);
			main.removeChild(event.target.closest('div'));
		});
	}
}
function dataRequestError(event) {
  console.log("dataRequest2 has error");
}

dataRequest.open("GET", "tunes2.json");
dataRequest.send();



