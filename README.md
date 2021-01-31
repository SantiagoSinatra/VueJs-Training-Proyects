# VueJs-Training-Proyects
This repository holds the training projects of a Vue.js course that i'm doing.<br> 
**The purpouse of this is to help me keep track of the things I've learned and to show my current experience with Vue.js**

## How to download this repository and make it work 👨🏻‍💻
### Step by step:

1. Clone the repository by doing `git clone https://github.com/SantiagoSinatra/VueJs-Training-Proyects.git`<br><br> 
2. Al the folders holding each Vue.js training project will appear. <br><br> 
3. Go to the folder that holds the desired project that you want to run and do `npm install` this will install all the necesary dependencies to run the project correctly. <br><br>
4. In the same folder run `npm run dev` <br><br>
5. A message will appear showing you that the server is now running on f.e: localhost:3000 and some port in your network. <br><br>
6. You can use any of them to connect to the website by copying the route that is shown and pasting it in your browser. <br><br>
7. Enjoy the mess! <br><br>

> You have to do 3-6 steps for each folder 😅

## Summary of the contents of each folder
### project-1 
#### Description
This is the first time I used Vue.js feel free to check each commit because some of them hold important notes I took and also hold other functionality that (in order to follow the course) I had to delete or change. <br>The end result that you will see if you clone the last commit is an array of buttons that when clicked trigger and `emit` function that adds the selected numbers to an array called `clickedNumbers`and then displays them below the `Clicked numbers` h3.
#### Summary of Topics
`vue.js` `vite` `app creation` `separate component` `template` `props` `methods` `data` `computed` `v-if` `v-else` `v-for` `v-bind` `v-show` `v-on` `v-model` `@click` `@input`

<hr>

### project-2
#### Description
This is a simple two input form that validates two different fields one for the username and the other for a password.<br>The **username** is required and must have at least 5 characters. This is validated using a method inside the input component that requires two props:
- **rules** that are like flags that indicate what kind of validation is needed.
- **value** that is the value of the input.<br>
After the value is validated if there is an error a string with the end result of the validation is returned inside a computed property **error()** and then this is echoed in the template for the user to see.<br> This input is also has another method **input()** that is in charge of emmiting the value and the validation to another method **update()** in its parent this is used to enable or disable the input button preventing the user from submitting a wrong form.
#### Summary of Topics
`vue.js` `vite` `app creation` `separate component` `template` `props` `methods` `data` `computed` `v-if` `v-else` `v-for` `v-bind` `v-show` `v-on` `v-model` `@click` `@input` `@submit.prevent="submit"`

<hr>

### project-3
#### Description
Coming soon!

