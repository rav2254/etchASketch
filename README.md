Etch-A-Sketch project for Odin

Structure-
Single page app containing-
*Title
*Slider bar to adjust the grid size
*slider Information
*Mode selector
*canvas

Logic-
generateGrid()- generates a square grid of specified dimensions provided by the user using the slider(default-16x16) and adds it to the square canvas(#container)

generateRandomMode()- generates a random number between 0-1 and converts it to a random color code in hexadecimal

Event Listeners-
- grid size- listens for slider inputs, clears the old grid and creates a new one with selected dimensions and updates the sizeDisplay text
- mode selector - listens for changes in radio inputs and updates the mode variable 
- clear btn- listens for button clicks and loop through all the pixels and changes bg-color to white
- mouse over- listens for mouse entry on the pixel and updates it's bg-color based on the mode (normal or random or alert message for fade)