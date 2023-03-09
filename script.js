const output = document.querySelector(".output");

document.querySelectorAll("#btn").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "C") {
      output.textContent = "";
    } else if (button.textContent === "=") {
      output.textContent = eval(output.textContent);
    } else {
      output.textContent += button.textContent;
    }

    if (output.value.length > 12) {
      output.textContent = "ErrorErrorError";
    }
    return;
  });
});
