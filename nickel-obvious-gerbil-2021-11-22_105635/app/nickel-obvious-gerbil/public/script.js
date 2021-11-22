// client-side js, loaded by index.html
// run by the browser each time the page is loaded

console.log("hello world :o");

// define variables that reference elements on our page
const dreamsList = document.getElementById("dreams");
const dreamsForm = document.querySelector("form");

// a helper function that creates a list item for a given dream
function appendNewDream(dream) {
  const newListItem = document.createElement("li");
  newListItem.innerText = dream;
  dreamsList.appendChild(newListItem);
}

// fetch the initial list of dreams
fetch("/dreams")
  .then(response => response.json()) // parse the JSON from the server
  .then(dreams => {
    // remove the loading text
    dreamsList.firstElementChild.remove();
  
    // iterate through every dream and add it to our page
    dreams.forEach(appendNewDream);
  
    // listen for the form to be submitted and add a new dream when it is
    dreamsForm.addEventListener("submit", event => {
      // stop our form submission from refreshing the page
      event.preventDefault();

      // get dream value and add it to the list
      let newDream = dreamsForm.elements.dream.value;
      dreams.push(newDream);
      appendNewDream(newDream);

      // reset form
      dreamsForm.reset();
      dreamsForm.elements.dream.focus();
    });
  });

document.getElementById("tosearch").onclick = function(){
  // ログイン処理
  
  // 成功した場合はページ遷移
  location.href = "/index";
};

var elem = document.getElementById('rating');
var target = document.getElementById('value');
var rangeValue = function (elem, target) {
  return function(evt){
    target.innerHTML = elem.value;
  }
}
elem.addEventListener('input', rangeValue(elem, target));

document.getElementById("save").onclick = function(){
  // ログイン処理
  
  // 成功した場合はページ遷移
  location.href = "/save";
};