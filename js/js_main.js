
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
      photoPaths.push( "<a href='imgs/photos/0" + i + ".jpg' title=" + photoDescription[i-1] + ">" + "<img src='imgs/photos/thumbnails/0" + i + ".jpg' alt=' ></a>" + photoTitle[i-1] +  "'>" );
  } else if (i > 9) {
      photoPaths.push( "<a href='imgs/photos/" + i + ".jpg' title=" + photoDescription[i-1] + ">" + "<img src='imgs/photos/thumbnails/" + i + ".jpg' alt=' ></a>" + photoTitle[i-1] + "'>" );
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

for (var i = 1; i <= 12; i += 1 ) {
  var photo = {title:photoTitle[i-1],description:photoDescription[i-1],path:photoPaths[i-1]};
  console.log(photo);
}

//Getting started with the search bar

photosMatched = [];

$( "#prompt" ).keyup(function() {
  while (true) {
    console.log("function started");
    search = $('#prompt').val();
    search = search.toLowerCase();
    console.log(search);
      if (search == photo.title || photo.description) {
        console.log("found match");
        photosMatched.push(photo.path);
        console.log(photosMatched);
        $('#hidden').hide();
        document.getElementById('photo_container').innerHTML = (photosMatched.join(''));
        break;
      } else {
        console.log("didn't match anything");
        break;
      }
  }
});
