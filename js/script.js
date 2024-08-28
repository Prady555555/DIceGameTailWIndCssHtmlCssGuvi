window.onload = function () {
  const containerDiv = document.createElement("div");
  containerDiv.className = "container mainContainer";
  document.body.append(containerDiv);
  const heading = document.createElement("h1");
  heading.innerText = "Dice Game";
  heading.className = "headingStyle";
  containerDiv.append(heading);
  const subHeadTxt = containerDiv.appendChild(document.createElement("p"));
  subHeadTxt.innerText = "Rock & Roll";
  const PlayerDiv = containerDiv.appendChild(document.createElement("div"));
};
