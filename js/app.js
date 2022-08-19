// pin Generate-------------------------------------
function generatePin() {
  const pin = Math.round(Math.random() * 10000) + "";
  if (pin.length === 4) {
    return pin;
  } else {
    return generatePin();
  }
}

document.getElementById("pinGenerator").addEventListener("click", () => {
  const pin = generatePin();
  document.getElementById("pinShow").value = pin;
  document.getElementById("failure").style.display = "none";
  document.getElementById("success").style.display = "none";
  document.getElementById("pinType").value = "";
  document.getElementById("try").innerText = "3";
});

// calculator button click handle ------------------------------
document.getElementById("calBody").addEventListener("click", (event) => {
  const pin = parseInt(event.target.innerText);
  const pre = document.getElementById("pinType").value;

  if (event.target.innerText.length === 1 && !isNaN(pin)) {
    document.getElementById("pinType").value = pre + event.target.innerText;
  } else if (isNaN(pin)) {
    if (event.target.innerText == "<") {
      const temp = pre.split("");
      temp.pop();
      document.getElementById("pinType").value = temp.join("");
      //   console.log("temp");
    } else if (event.target.innerText == "C") {
      document.getElementById("pinType").value = "";
    }
  }
});

// press enter to triger submit button
document.getElementById("pinType").addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    document.getElementById("submit").click();
  }
});

// Submit butn click handle------------
document.getElementById("submit").addEventListener("click", () => {
  //   handling submit without generate pin
  if (document.getElementById("pinShow").value == "") {
    return alert("Generate Pin first");
  }

  // handling empty input
  if (
    document.getElementById("pinType").value == "" ||
    document.getElementById("pinType").value == " " ||
    document.getElementById("pinType").value == "  " ||
    document.getElementById("pinType").value == "   "
  ) {
    document.getElementById("pinType").value = "";
    return alert("Input Pin first");
  }
  //   handling submit without generate pin

  //   handling try left case
  let tryLeft = document.getElementById("try").innerText;
  tryLeft--;
  if (tryLeft < 0) {
    alert("Attempt Failed");
    window.location.reload();
  } else {
    document.getElementById("try").innerText = tryLeft;
  }

  //   maching pin
  if (
    document.getElementById("pinShow").value ==
    document.getElementById("pinType").value
  ) {
    document.getElementById("failure").style.display = "none";
    document.getElementById("success").style.display = "block";
    document.getElementById("leftTry").style.display = "none";
  } else {
    document.getElementById("success").style.display = "none";
    document.getElementById("failure").style.display = "block";
    document.getElementById("leftTry").style.display = "block";
    if (tryLeft == 0) {
      alert("Attempt Failed");
      window.location.reload();
    }
  }
});
