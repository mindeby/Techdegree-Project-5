
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
const photoDescription = ["'I love hay bales . Took this snap on a drive through the countryside past some straw fields.'",
                           "'The lake was so calm today. We had a great view of the snow on the mountains from here.'",
                           "'I hiked to the top of the mountain and got this picture of the canyon and trees below.'",
                           "'It was amazing to see an iceberg up close, it was so cold but didn’t snow today.'",
                          "'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.'",
                           "'Fall is coming , I love when the leaves on the trees start to change color.'",
                           "'I drove past this plantation yesterday , everything is so green!'",
                           "'My summer vacation to the Oregon Coast . I love the sandy dunes!'",
                           "'We enjoyed a quiet stroll down this countryside lane.'",
                           "'Sunset at the coast! The sky turned a lovely shade of orange.'",
                           "'I did a tour of a cave today and the view of the landscape below was breathtaking.'",
                           "'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.'"
];

//Create an array to store the a and img complete paths
const photoPaths =[];

//Create a loop that pushes each photo path into the array we created with a href, title, src and attribute
for (var i = 1; i <= 12; i += 1 ) {
  if (i <= 9) {
      photoPaths.push( "<a href='imgs/photos/0" + i + ".jpg' title=" + photoDescription[i-1] + ">" + "<img id='each_image' src='imgs/photos/thumbnails/0" + i + ".jpg' alt='" + photoTitle[i-1] + "'></a>" );
  } else if (i > 9) {
      photoPaths.push( "<a href='imgs/photos/" + i + ".jpg' title=" + photoDescription[i-1] + ">" + "<img id='each_image' src='imgs/photos/thumbnails/" + i + ".jpg' alt='" + photoTitle[i-1] + "'></a>" );
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

//I'm storing all the photo instances inside the array allPhotos

var allPhotos = [];

//Need individual words inside title and descriptions to compare with prompt search
string_to_array = function (str) {  //transforms any string into individual words
     return str.trim().split(" ");
};

//Creating an instance of every photo object
for (var i = 1; i <= 12; i += 1 ) {
  photo = {title:photoTitle[i-1],description:photoDescription[i-1],path:photoPaths[i-1], words:string_to_array(photoDescription[i-1])};
  allPhotos.push(photo);
}


//My very own search function!!

var photosMatched = [];

$( "#prompt" ).keyup(function() {
  document.getElementById('photo_container').innerHTML = (photoPaths.join(''));
  search = $('#prompt').val();
  search.toLowerCase();
  var searchSeparated = string_to_array(search); //if the user writes more than 1 word they will be compared individually
  allPhotos.forEach(function(element) {
    for (var i = 1; i <= element.words.length; i += 1 ){ //go through each word inside each photo description and look for a match
      if (searchSeparated[0] === (element.words[i-1]) || searchSeparated[1] === (element.words[i-1]) || searchSeparated[2] === (element.words[i-1])) { //I'm just looking for a match in the first 3 words inputed
        photosMatched.push(element.path); //if there is a match store the path of that element inside photosMatched
        var unique = photosMatched.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
      }) //if we have duplicated elements inside the arrays convert it to a unique one
        document.getElementById('photo_container').innerHTML = (unique.join('')); //push the unique paths that matched to the photoContainer to display the images that matched
        var lightbox = $('.gallery a').simpleLightbox({
          showCounter: false,
          captions: true,
          captionSelector: 'self',
        });
        if (searchSeparated[0] !== (element.words[i-1]) || searchSeparated[1] !== (element.words[i-1]) || searchSeparated[2] !== (element.words[i-1])) {
          break;
        }
      }
    }
  });
  photosMatched = [];
});
