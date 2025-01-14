# Aiden Jackson
### acjackson7@my.waketech.edu
### This is my school account and a collection of my future assignments.
>this is a sample block of code to learn markup
```
import tkinter as tk
from tkinter import simpledialog

# Function to handle button click
def on_button_click(area):
    # Ask for user input based on which button was clicked
    user_input = simpledialog.askstring("Input", f"Enter your data for {area} area:")
    label.config(text=f"Data for {area}: {user_input}")

# Create the main window
root = tk.Tk()
root.title("Area Click Input")

# Create a label to display messages
label = tk.Label(root, text="Click a button to enter data", font=("Arial", 14))
label.pack(pady=20)

# Create buttons for different areas
button_area_1 = tk.Button(root, text="Area 1", width=20, height=2, command=lambda: on_button_click("Area 1"))
button_area_1.pack(pady=10)

button_area_2 = tk.Button(root, text="Area 2", width=20, height=2, command=lambda: on_button_click("Area 2"))
button_area_2.pack(pady=10)

button_area_3 = tk.Button(root, text="Area 3", width=20, height=2, command=lambda: on_button_click("Area 3"))
button_area_3.pack(pady=10)

# Run the Tkinter event loop
root.mainloop()
```
