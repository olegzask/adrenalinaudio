export const handler = () => {
  console.log("Quote Button pressed");
};

export const toggleCoverage = (event) => {
  setPrice({ ...price, hoodfenders: 0 });
  Array.from(document.getElementsByClassName("fp-button")).map((el) => {
    el.classList.remove("button-inactive");
    el.classList.remove("button-selected");
  });

  document.getElementById("img_hoodfendersfull").classList.remove("checked");
  document.getElementById("img_hoodfenderspartial").classList.remove("checked");

  event.target.closest(".yes-no").children[0].checked = false;

  if (event.target.id === "full") {
    setCoverage("full");

    event.target.classList.add("button-selected");
    document.getElementById("partial").classList.add("button-inactive");
  }
  if (event.target.id === "partial") {
    setCoverage("partial");

    event.target.classList.add("button-selected");
    document.getElementById("full").classList.add("button-inactive");
  }
};
