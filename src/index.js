let commentList;
let commentField;
let ratingSelect;

document.addEventListener("DOMContentLoaded", () => {
  initVals();
});

function initVals() {
  console.log("setting attributes");
  commentList = document.getElementById("comment-list");
  commentField = document.getElementById("comment-text");
  ratingSelect = document.getElementById("rating");
}

function addComment () {
  console.log(commentField.value.trim().split(/\s+/).length, commentField.value.length);
  if (commentField && commentField.value.trim().split(/\s+/).length > 0 && commentField.value.length > 0) {
    const comment = document.createElement("li");
    const divWrapper = document.createElement("div");
    const text = document.createElement("p");
    const rating = document.createElement("p");
    const delButton = document.createElement("button");

    delButton.textContent = "Nuke This!";

    text.appendChild(document.createTextNode(commentField.value));
    rating.appendChild(document.createTextNode(ratingSelect.value));

    rating.classList.add("comment-rating");
    text.classList.add("comment-text");
    delButton.classList.add("nuke-button-invis");
    commentField.value = "";
    divWrapper.classList.add("comment");

    divWrapper.appendChild(rating);
    divWrapper.appendChild(text);
    divWrapper.appendChild(delButton);
    comment.appendChild(divWrapper);
    commentList.appendChild(comment);

    delButton.addEventListener("click", function() {deleteThis(divWrapper)} );
  }
  else {
    console.log("too short", commentField.value.split(/\s+/), commentField.value);
  }
}

function clearComments () {
  /*const confirmation = confirm("This will delete all comments, you sure?");
  if (confirmation) {
    commentList.innerHTML = "";
  }
  else {
    console.log("user was scared", confirmation);
  }*/
  const buttons = [...document.getElementsByClassName("nuke-button-invis")];
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("nuke-button-invis");
  }
}

function deleteThis (button) {
  button.parentElement.remove();
}
