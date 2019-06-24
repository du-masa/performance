const addListItem = () => {
  const $list = document.getElementById("list");
  const $li = document.createElement("li");
  $li.innerHTML = `list item ${Math.floor(Math.random() * 20)}`;
  $list.appendChild($li);
}

const handleScroll = () => {
  console.log("handleScroll");
}

const hardLoop = () => {
  for(let i = 0; i < 10000; i++) {
    console.log("repeatTimer");
  }
}

document.getElementById("addElement").addEventListener("click", addListItem);
document.getElementById("hardLoop").addEventListener("click", hardLoop);

window.addEventListener("scroll", handleScroll);