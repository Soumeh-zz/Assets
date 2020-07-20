var images = ['keystone', 'ruby'];
images.forEach(renderImage);

function renderImage(item) {
  var image = document.createElement("img");
  image.src = 'assets/' + item + '.png';
  var display = document.getElementById("assets");
  display.appendChild(image);
  // get the texture's info file
  fetch('assets/' + item + '.txt')
    .then(response => response.text())
    .then(data => {
      console.log(data);
    });
};