var images = ['amber','amber amulet','amethyst','amethyst amulet','banjo','basedrum','bass','bell','bit','chain','citrine','coin','cowbell','cursed key','diamond amulet','ender amulet','fiery amulet','flute','golden bag','golden wrench','guitar','harp','keystone','leather bag','obsidian axe','obsidian sword','pling','ruby','sapphire','sapphire amulet','slap bass','snare','war horn'];
images.forEach(renderImage);

function renderImage(item) {
  var div = document.createElement("div");
  div.classList.add("asset")
  fetch('assets/' + item + '.txt')
    .then(response => response.text())
    .then(data => {
      var image = document.createElement("img");
      image.title = (data.split('|')[2]);
      image.src = 'assets/' + item + '.png';
      div.appendChild(image);
      var name = document.createElement("p");
      var text = document.createTextNode(data.split('|')[0])
      name.appendChild(text);
      div.appendChild(name);
    });
  var display = document.getElementById("assets");
  display.appendChild(div);
};

function searchImages() {
  var search = document.getElementById('search').value.toLowerCase().split(' ').join('');
  console.log(search.length);
  document.getElementById('assets').innerHTML = "";
  if (search.length == 0) {
    images.forEach(renderImage);
  };
  var search = search.split(', ');
  images.forEach(function (item, index) {
    fetch('assets/' + item + '.txt')
    .then(response => response.text())
    .then(data => {
      var data = data.split('|');
      var data = data.map(v => v.toLowerCase());
      var dataLength = data.length;
      var searchedImages = [];
      for (var i = 0; i < dataLength; i++) {
        if (search.includes(data[i]) == true) {
          if (searchedImages.includes(data[0]) == false) {
            searchedImages.push(data[0]);
          };
        };
      };
      if (searchedImages.length > 0) {
        searchedImages.forEach(renderImage);
        console.log(searchedImages);
      };
  });
})};