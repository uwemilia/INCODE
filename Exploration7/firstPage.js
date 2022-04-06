document.title =
  "My first (dynamic) webpage";

// const then = document.getElementById("")

const allH2 =
  document.querySelectorAll ("h2");

allH2.forEach ((h2) => {
  if (h2.innerText === "Then") {
    h2.addEventListener ("click", () =>
      alert ("The Beatles (January 13, 1969)")
    );
  } else if (h2.innerText === "Now") {
    h2.addEventListener ("click", () =>
      alert (
        "Carly Rae Jepsen (March 1, 2012)"
      )
    );
  }
});
