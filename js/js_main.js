
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
const photoDescription = ["I love hay bales. Took this snap on a drive through the countryside past some straw fields.",
                           "The lake was so calm today. We had a great view of the snow on the mountains from here.",
                           "I hiked to the top of the mountain and got this picture of the canyon and trees below.",
                           "It was amazing to see an iceberg up close, it was so cold but didn’t snow today.",
                           "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.",
                           "Fall is coming, I love when the leaves on the trees start to change color.",
                           "I drove past this plantation yesterday, everything is so green!",
                           "My summer vacation to the Oregon Coast. I love the sandy dunes!",
                           "We enjoyed a quiet stroll down this countryside lane.",
                           "Sunset at the coast! The sky turned a lovely shade of orange.",
                           "I did a tour of a cave today and the view of the landscape below was breathtaking.",
                           "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."
];

//Create an array to store the photo paths
const photoPaths =[];

//Create a loop that pushes each photo path into the array we created with a src and an attribute
for (var i = 1; i <= 12; i += 1 ) {
  if (i <= 9) {
      photoPaths.push( "<a href='imgs/photos/0" + i + ".jpg'>" + "<img src='imgs/photos/thumbnails/0" + i + ".jpg' alt=' ></a>" + photoTitle[i-1] + "'>" );
  } else if (i > 9) {
      photoPaths.push( "<a href='imgs/photos/" + i + ".jpg'>" + "<img src='imgs/photos/thumbnails/" + i + ".jpg' alt=' ></a>" + photoTitle[i-1] + "'>" );
  }
}

document.getElementById('row_1').innerHTML = (photoPaths[0])+(photoPaths[1])+(photoPaths[2])+(photoPaths[3]);
document.getElementById('row_2').innerHTML = (photoPaths[4])+(photoPaths[5])+(photoPaths[6])+(photoPaths[7]);
document.getElementById('row_3').innerHTML = (photoPaths[8])+(photoPaths[9])+(photoPaths[10])+(photoPaths[11]);


//add the array of thumbnails to the html
//document.getElementById('photo_container').innerHTML = (photoPaths.join(''));


//lightbox
var lightbox = $('.gallery a').simpleLightbox({
  showCounter: false,
});





//Getting started with the search bar

/*function updateResult(query) {
    let resultList = document.querySelector(".results");
    resultList.innerHTML = "";

    photoPaths.map(function(algo){
        query.split(" ").map(function (word){
            if(algo.toLowerCase().indexOf(word.toLowerCase()) != -1){
                resultList.innerHTML += `<li class="list-group-item">${algo}</li>`;
            }
        })
    })
}*/

/*<div class="search_bar">
  <input oninput="updateResult(this.value)" id="prompt" type="text" placeholder="Search(16pt)">
  <div class="results"></div>
</div>*/




//we need to use val() to retrieve information from an input field

//we need to match whatever was searched with the alt and description of each image


//var response = prompt("whats this");

/*const box = document.querySelector('.search_bar');
box.addEventListener('click', function(){
  alert('you clicked me!');
  const searched = $('.prompt').val();
});*/


//('.box').hide();


/*$('#previewButton').on('click', function(){
    const title = $('#blogTitleInput').val(); // creating a blog previewer when button is clicked
    console.log(title);
});*/



//string.match
//parseint

//var str = "The rain in SPAIN stays mainly in the plain";
//var res = str.match(/ain/gi);
