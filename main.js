console.dir(document);

const btn = document.getElementById("createBtn");
console.dir(btn);
btn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("personal-div");
  div.innerHTML = "This is a div";
  document.body.appendChild(div);
});

const removeBtn = document.getElementById("removeDiv");

removeBtn.addEventListener("click", () => {
  const div = document.querySelector(".personal-div");

  if (div === null) {
    const alert = document.createElement("p");
    alert.innerHTML = "No div found";
    document.body.appendChild(alert);
  } else {
    document.body.removeChild(div);
  }
});
