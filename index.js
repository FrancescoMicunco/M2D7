/*
     JS Exercises
      
    
      
      
      
      
      
      EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
      EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
      EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
                                              */
// EX11) Write a function to add a new link into the navbar
const navbarLink = document.querySelector("nav.nav.d-flex a:last-child")
console.log(navbarLink)
const navbarUl = document.querySelector("nav.nav.d-flex")
console.log(navbarUl)
const addLi = function() {
    let newATag = document.createElement("a").innerText = `a class="p-2 text-muted" href="#">New One</a>`
    console.log(newATag)
    navbarLink.parentNode.appendChild(newATag);
    navbarUl.appendChild(navbarLink)
}

// EX12) Write a function to change the color of the main title

const mainTitle = document.querySelector("main>div.row>div.blog-main h3").style.color = "red"

/*  */
// EX13) Write a function to change the background of the jumbotron
const jumbotron = document.querySelector("div.jumbotron")
jumbotron.classList.remove("bg-dark")
jumbotron.style.backgroundColor = "orange"
console.log(jumbotron)


// EX14) Write a function to remove all the links under "Elsewhere"

// EX15) Write a function to change the column size for heading in jumbotron

// EX16) Write a function to remove the "Search" magnifying glass icon
// EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post