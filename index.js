const addListItem = () => {
  const $list = document.getElementById("list");
  const $li = document.createElement("li");
  const $p = document.createElement("p");
  const $img = document.createElement("img");
  $p.innerHTML = `list item ${Math.floor(Math.random() * 20)}`;
  $img.src = "https://unsplash.it/200?random"
  $li.appendChild($img);
  $li.appendChild($p);
  $list.appendChild($li);
}

const hardLoop = () => {
  for(let i = 0; i < 10000; i++) {
    console.log("repeatTimer");
  }
}

document.getElementById("addElement").addEventListener("click", addListItem);
document.getElementById("hardLoop").addEventListener("click", hardLoop);

window.addEventListener("scroll", () => {
  console.log("affa");
});

var x = [];

function grow() {
  x.push(new Array(1000000).join('x'));
}

document.getElementById('grow').addEventListener('click', grow);

var detachedNodes;

function create() {
  var ul = document.createElement('ul');
  for (var i = 0; i < 10; i++) {
    var li = document.createElement('li');
    ul.appendChild(li);
  }
  detachedTree = ul;
}

function remove() {
  detachedTree = null;
}

document.getElementById('create').addEventListener('click', create);
document.getElementById('remove').addEventListener('click', remove);