## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) Wire frame of information and layout - done on paper
2) For each domain:
    a. add a file called 'domain'-data.js
    b. create an array of at least 3 objects, each with 3+ properties
    c. TDD the render function 
    d. in app.js, import the render function + data, grab container DOM element
    e. loop through array, and for each object, render and append to the container element from DOM
3) Style as needed

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
