
//Create an array to store the photo titles
const photoTitle = ["Hay Bales",
                    "Lake",
                    "Canyon",
                    "Iceberg",
                    "Desert",
                    "Fall",
                    "Plantation",
                    "Dunes",
                    "Countryside Lane",
                    "Sunset",
                    "Cave",
                    "Bluebells"
                    ];

//Create an array to store the photo descriptions
const photoDescription = ["' I love hay bales . Took this snap on a drive through the countryside past some straw fields .'",
                           "' The lake was so calm today. We had a great view of the snow on the mountains from here .'",
                           "' I hiked to the top of the mountain and got this picture of the canyon and trees below .'",
                           "' It was amazing to see an iceberg up close, it was so cold but didn’t snow today .'",
                          "' The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons .'",
                           "' Fall is coming , I love when the leaves on the trees start to change color .'",
                           "' I drove past this plantation yesterday , everything is so green !'",
                           "' My summer vacation to the Oregon Coast . I love the sandy dunes !'",
                           "' We enjoyed a quiet stroll down this countryside lane.'",
                           "' Sunset at the coast! The sky turned a lovely shade of orange .'",
                           "' I did a tour of a cave today and the view of the landscape below was breathtaking .'",
                           "' I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in .'"
];

//Create an array to store the a and img complete paths
const photoPaths =[];

//Create a loop that pushes each photo path into the array we created with a href, title, src and attribute
for (var i = 1; i <= 12; i += 1 ) {
  if (i <= 9) {
      photoPaths.push( "<a href='imgs/photos/0" + i + ".jpg' title=" + photoDescription[i-1] + ">" + "<img id='each_image' src='imgs/photos/thumbnails/0" + i + ".jpg' alt=' ></a>" + photoTitle[i-1] +  "'>" );
  } else if (i > 9) {
      photoPaths.push( "<a href='imgs/photos/" + i + ".jpg' title=" + photoDescription[i-1] + ">" + "<img id='each_image' src='imgs/photos/thumbnails/" + i + ".jpg' alt=' ></a>" + photoTitle[i-1] + "'>" );
  }
}



//add 4 pictures to each row for flexbox settings
document.getElementById('row_1').innerHTML = (photoPaths[0])+(photoPaths[1])+(photoPaths[2])+(photoPaths[3]);
document.getElementById('row_2').innerHTML = (photoPaths[4])+(photoPaths[5])+(photoPaths[6])+(photoPaths[7]);
document.getElementById('row_3').innerHTML = (photoPaths[8])+(photoPaths[9])+(photoPaths[10])+(photoPaths[11]);

//document.getElementById('photo_container').innerHTML = (photoPaths.join('')); (for everything in same div)


//lightbox settings
var lightbox = $('.gallery a').simpleLightbox({
  showCounter: false,
  captions: true,
  captionSelector: 'self',
});



//create object literal for each photo
var photo = {
  title:"",
  description:"",
  path:"",
  words:""
};

    //storing all the photo instances inside the array allPhotos

var allPhotos = [];

//Need individual words inside title and descriptions to compare with prompt search
string_to_array = function (str) {
     return str.trim().split(" ");
};

for (var i = 1; i <= 12; i += 1 ) {
  photo = {title:photoTitle[i-1],description:photoDescription[i-1],path:photoPaths[i-1], words:string_to_array(photoDescription[i-1])};
  allPhotos.push(photo);
  console.log(photo);
}

var individualWords = [];

/*allPhotos.forEach(function(element) {
   console.log("So it begins");
    console.log(element.words[4]);
    var trial = "tour";
    if (trial.includes(element.words[4])) {
      console.log("WE HAVE A MATCH");
    } else {
      console.log("NO MATCHES");
    }
});*/

/*
for (var i = 1; i <= 12; i += 1 ) {
    allPhotos.forEach(function(element) {
       console.log("So it begins");
        console.log(element.words[4]);
        var trial = "sandy";
        if (trial.includes(element.words[4])) {
          console.log("WE HAVE A MATCH");
        } else {
          console.log("NO MATCHES");
        }
    });
}
*/

/*console.log("BEGGINING");
console.log("below are the words im looking for:");
console.log(allPhotos[0].words);
console.log("this is my initial search:");
var search2 = "hay bales";
console.log(search2);
console.log("this is my search after separating the words:");
var filterSearch2 = string_to_array(search2);
console.log(filterSearch2);
console.log("this should be the first word of my search:");
console.log(filterSearch2[0]);
console.log("this should be the index of the first word of my search in the allPhotos array:");
var n = (allPhotos[0].words).indexOf(filterSearch2[1]);
console.log(n);
console.log("END");
*/

/*$( "#prompt" ).keyup(function() {
  search = $('#prompt').val();

  search.toLowerCase();

  separatedSearch = string_to_array(search);

  console.log(separatedSearch);

  for (var i = 1; i <= separatedSearch.length; i += 1 ){
    for (var i = 1; i <= allPhotos.length; i += 1 ) {
    console.log(allPhotos[i-1].words);

  console.log(separatedSearch[i-1]);
  console.log(allPhotos[i-1]);
  var n = (allPhotos[i-1].words).indexOf(separatedSearch[i-1]);
  console.log(n);
  if (n > 0) {
    console.log("we found a maaaaatch");
  }

}
  }
});
*/


var photosMatched = [];
$( "#prompt" ).keyup(function() {

  console.log("Began searching for match...");

  search = $('#prompt').val();

  search.toLowerCase();

  console.log(search);

  var searchSeparated = string_to_array(search);

    allPhotos.forEach(function(element) {
      console.log("MY LOG");
      console.log(searchSeparated);
      for (var i = 1; i <= element.words.length; i += 1 ){
        console.log(element.words[i-1]);
        if (searchSeparated[0] === (element.words[i-1]) || searchSeparated[1] === (element.words[i-1])) {
          console.log("THIS WORD MATCHES");
          photosMatched.push(element.path);
          var unique = photosMatched.filter(function(elem, index, self) {
            return index === self.indexOf(elem);
          })
          console.log("below should be the unique value array");
          console.log(unique);
          document.getElementById('photo_container').innerHTML = (unique.join(''));
          unique.pop(element.path);
        }  //if its bigger than 0 indexOf its a match, work on this
      }
    });
});

//THIS CODE IS VERRYYYYYYY IMPORTANT I CAN ACCESS WORDS
/*
var photosMatched = [];

allPhotos.forEach(function(element) {
  console.log("MY LOG");
  var matchingWord = "vacation";
  var matchingWordSeparated = string_to_array(matchingWord);
  console.log(matchingWordSeparated);
  for (var i = 1; i <= element.words.length; i += 1 ){
    console.log(element.words[i-1]);
    if (matchingWordSeparated[0] === (element.words[i-1]) || matchingWordSeparated[1] === (element.words[i-1])) {
      console.log("THIS WORD MATCHES");
      photosMatched.push(element.path);
      var unique = photosMatched.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
      })
      console.log("below should be the unique value array");
      console.log(unique);
      document.getElementById('photo_container').innerHTML = (unique.join(''));
      unique.pop(element.path);
    }  //if its bigger than 0 indexOf its a match, work on this
  }
});

*/


//IF NEGATIVE ITS NOT A MATCH


//FINAL PROMPT
/*
var photosMatched = [];

$( "#prompt" ).keyup(function() {

  console.log("Began searching for match...");

  search = $('#prompt').val();

  search.toLowerCase();

  console.log(search);

  if ( search === allPhotos[0].title.toLowerCase() ) {
    photosMatched.push(allPhotos[0].path);
    console.log(photosMatched);
    var unique = photosMatched.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    })
    document.getElementById('photo_container').innerHTML = (unique.join(''));
    unique.pop(allPhotos[0].path);
  }

  if (search !== allPhotos[0].title.toLowerCase()) {
    console.log("didn't match anything");
    document.getElementById('photo_container').innerHTML = (photoPaths.join(''));
  }

  photosMatched = [];
  console.log(photosMatched);
});




/*
  var photosMatched = [];

  $( "#prompt" ).keyup(function() {

    console.log("Began searching for match...");

    search = $('#prompt').val();

    search.toLowerCase();

    console.log(search);

    if ( search === allPhotos[0].title.toLowerCase() ) {
      photosMatched.push(allPhotos[0].path);
      console.log(photosMatched);
      var unique = photosMatched.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
      })
      document.getElementById('photo_container').innerHTML = (unique.join(''));
      unique.pop(allPhotos[0].path);
    }

    if (search !== allPhotos[0].title.toLowerCase()) {
      console.log("didn't match anything");
      document.getElementById('photo_container').innerHTML = (photoPaths.join(''));
    }

    photosMatched = [];
    console.log(photosMatched);
  });
  */
