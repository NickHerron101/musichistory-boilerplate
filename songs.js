var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("In Bloom - by Nirvana on the album Nevermind");
songs.push("Fluffy - by Wolf Alice on the album My Love is Cool");

console.log(songs);

//looping and replacing
for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace("*", "");
	songs[i] = songs[i].replace(/ > /g, " - ");
	songs[i] = songs[i].replace("(", "");
	songs[i] = songs[i].replace("!", "");
	songs[i] = songs[i].replace("@", "");
}
console.log("newArray",songs);

// putting in new divs for the most part
songs.forEach(function(element) {
	quoteBlock = `<div>${songs[0]}
					  </div><br><div>${songs[1]}
					  </div><br><div>${songs[2]}
					  </div><br><div>${songs[3]}
					  </div><br><div>${songs[4]}
					  </div><br><div>${songs[5]}
					  </div><br><div>${songs[6]}
					  </div><br>`;
});

// songs.forEach(function(element){
// 	quoteBlock += `<div>${songs}</div><br>`
// });

document.getElementById("main").innerHTML = quoteBlock;



/// adding to the DOM
/// quotesArray.forEach(function(quote, index) {//grab first item, here's what index it is
	// var quoteBlock = `<div id="quote--${index}">
	// 					<h3>"${quote}" - Star Wars</h3>
	// 					<p>this is awesome</p>
	// 				  </div>`; //whatever's inside brackets will be evaluatesd

// document.getElementById("main").innerHTML = songs;
// var arrayBlock = `<section>
// 					<p class="songName"> </p>
// 					<p>Nirvana | Nevermind | Rock</p>
// 				</section>
// 				<section>
// 					<p class="songName">Fluffy</p>
// 					<p>Wolf Alice | My Love is Cool | Rock</p>
// 				</section>
// 				<section>
// 					<p class="songName">Exodus</p>
// 					<p>Bob Marley | Exodus | Reggae</p>
// 				</section>
// 				<section>
// 					<p class="songName">'Round Midnight</p>
// 					<p> Grant Green | Green Street | Jazz</p>
// 				</section>


// // sonnet = sonnet.replace("winter", "yuletide");
// // console.log("replace winter", sonnet);

// // // Replace all occurances of the string "the" with "a large".
// // sonnet = sonnet.replace(/the /gi, "a large ");
// // console.log("replace the", sonnet);
