//Create an array to store the photo paths
const photoPaths =[];


//Create a loop that pushes each photo path into the array we created
for (var i = 1; i <= 12; i += 1 ) {
  if (i <= 9) {
      photoPaths.push( "<img src='imgs/photos/thumbnails/0" + i + ".jpg'>" );
  } else if (i > 9) {
      photoPaths.push( "<img src='imgs/photos/thumbnails/" + i + ".jpg'>" );
  }
}

document.getElementById('photo_container').innerHTML = (photoPaths.join(''));
