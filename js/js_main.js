
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
const photoDescription = ["'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'",
                           "'The lake was so calm today. We had a great view of the snow on the mountains from here.'",
                           "'I hiked to the top of the mountain and got this picture of the canyon and trees below.'",
                           "'It was amazing to see an iceberg up close, it was so cold but didn’t snow today.'",
                          "'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.'",
                           "'Fall is coming, I love when the leaves on the trees start to change color.'",
                           "'I drove past this plantation yesterday, everything is so green!'",
                           "'My summer vacation to the Oregon Coast. I love the sandy dunes!'",
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
  path:""
};

//storing all the photos inside this array

var allPhotos = [];


for (var i = 1; i <= 12; i += 1 ) {
  console.log("beggining of loop");
  photo = {title:photoTitle[i-1],description:photoDescription[i-1],path:photoPaths[i-1]};
  allPhotos.push(photo);
  console.log(photo);
  console.log("end of loop");
}

console.log(allPhotos);
console.log(allPhotos.length);


console.log(allPhotos[0].title);
console.log(allPhotos[0].description);
console.log(allPhotos[0].path);



/* for (var i = 1; i <= allPhotos.length; i += 1 ) {
  console.log("beggining of loop inside allPhotos");
  lookOutString = (allPhotos.title).concat((allPhotos.description));
  console.log(lookOutString);
  console.log("end of loop inside allPhotos");
}
*/


//const $secureLinks = $('a[href^="https://"]');


//Getting started with the search bar

var photosMatched = [];

//need to use substring instead of ===  ex:a[href*="string"]



$( "#prompt" ).keyup(function() {

  console.log("Began searching for match...");

  search = $('#prompt').val();

  search.toLowerCase();

  console.log(search);

  if ( search === allPhotos[1].title.toLowerCase() ) {
    photosMatched.push(allPhotos[1].path);
    console.log(photosMatched);
    var unique = photosMatched.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    })
    document.getElementById('photo_container').innerHTML = (unique.join(''));
    unique.pop(allPhotos[1].path);
  }

  if (search !== allPhotos[1].title.toLowerCase()) {
    console.log("didn't match anything");
    document.getElementById('photo_container').innerHTML = (photoPaths.join(''));
  }

  photosMatched = [];
  console.log(photosMatched);
});






/* This works somehow

$( "#prompt" ).keyup(function() {
  while (true) {
    search = $('#prompt').val();
    search.toLowerCase();
    console.log(search);
      if (search === photo.title.toLowerCase()) {
        photosMatched.push(photo.path);
        console.log(photosMatched);
        $('#hidden').hide();
        var unique = photosMatched.filter(function(elem, index, self) {
          return index === self.indexOf(elem);
        })
        document.getElementById('photo_container').innerHTML = (unique.join(''));
        break;
      } else {
        console.log("didn't match anything");
        break;
      }
  }
});

*/
