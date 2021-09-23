let commentList;
let commentField;

document.addEventListener("DOMContentLoaded", () => {
  initVals();
});

function initVals() {
  console.log("setting attributes");
  commentList = document.getElementById("comment-list");
  commentField = document.getElementById("comment-text");
}

function addComment () {
  console.log(commentField.value.trim().split(/\s+/).length, commentField.value.length);
  if (commentField && commentField.value.trim().split(/\s+/).length > 0 && commentField.value.length > 0) {
    const comment = document.createElement("li");
    const text = document.createElement("p");
    text.appendChild(document.createTextNode(commentField.value));
    commentField.value = "";
    comment.appendChild(text);
    commentList.appendChild(comment);
  }
  else {
    console.log("too short", commentField.value.split(/\s+/), commentField.value);
  }
}

function clearComments () {
  const confirmation = confirm("This will delete all comments, you sure?");
  if (confirmation) {
    commentList.innerHTML = "";
  }
  else {
    console.log("user was scared", confirmation);
  }
}
