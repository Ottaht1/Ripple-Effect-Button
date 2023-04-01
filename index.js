// Select the button element using the querySelector method and the CSS selector ".btn".
const btnElement = document.querySelector(".btn");


// Add an event listener to the button element to listen for the "mouseover" event.
btnElement.addEventListener("mouseover", (event) => {
    // Calculate the x and y coordinates of the mouse pointer in relation to the button element.
  const x = event.pageX - btnElement.offsetLeft;
  const y = event.pageY - btnElement.offsetTop;

    // Assign CSS custom attributes to the button element to generate visual effects.
  btnElement.style.setProperty("--x", x + "px");
  btnElement.style.setProperty("--y", y + "px");
});


//The code calculates the x and y coordinates of the mouse pointer in relation to the button element and assigns CSS custom attributes to generate visual effects.