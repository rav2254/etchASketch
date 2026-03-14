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


Personal Comments-

Still working on the fade mode where once a pixel is colored it will start to go down in opacity until it goes back to white. 
I think i would probably be using timeout for each mouse over event where after a certain time(let's say half a second) it decreases in opacity. I don't know if that will be too computation heavy since it would have to do that for every mouse over event. Another issue i foresee is that timeout would basically push the operation down to the bottom of the stack and if the stack keeps processing mouseover events before working on timeout callbacks it would not start fading until the user stops moving the mouse which wouldn't look as good. maybe there is a CSS animation i can use instead but i haven't learned about them yet so that's the only option i see so far
I will probably implement timeout first and see if it works.