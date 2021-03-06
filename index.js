/*
     JS Exercises
      
    
      
      
      
      
      
      
      
      
                                              */
// EX11) Write a function to add a new link into the navbar
const navbarLink = document.querySelector("nav.nav.d-flex a:last-child")
const navbarUl = document.querySelector("nav.nav.d-flex")
const addLi = function() {
    let newATag = document.createElement("a")
    newATag.innerHTML = `<a class="p-2 text-muted" href="#">New One</a>`
    navbarUl.appendChild(newATag)
}
addLi()
    // EX12) Write a function to change the color of the main title

const mainTitle = document.querySelector("main>div.row>div.blog-main h3").style.color = "red"

// EX13) Write a function to change the background of the jumbotron
const jumbotron = document.querySelector("div.jumbotron")
jumbotron.classList.remove("bg-dark")
jumbotron.style.backgroundColor = "orange"

// EX14) Write a function to remove all the links under "Elsewhere"

const eraseLink = document.querySelector("aside>div:last-of-type>ol.list-unstyled")
const eraseL = function() {
    eraseLink.innerHTML = "";
}
eraseL()

// EX15) Write a function to change the column size for heading in jumbotron

const titleInTheJumbo = document.querySelector("div.jumbotron div.col-md-6")
const changeSizeOfColumnH1 = function() {
    titleInTheJumbo.classList.remove("col-md-6");
}
changeSizeOfColumnH1()

// EX16) Write a function to remove the "Search" magnifying glass icon
const searchmagnifier = document.querySelector("header>div.row div:last-child a:first-child")
const eraseMagnifier = function() {
    searchmagnifier.innerHTML = ""
}
eraseMagnifier()
    // EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post

const blogPost = document.querySelectorAll("div>div.blog-post p:nth-child(2)")

const extractChar = function() {
        for (let i = 0; i < blogPost.length; i++) {
            blogPost[i]
        }
    }
    // EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)

/* const lastBlogPost = querySelector("")
console.log(lastBlogPost) */

// EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post

/* const olderBtn = document.querySelector("")
const attachButton = function() {


} */
// EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name

const alertName = document.querySelectorAll("div>div.blog-post p.blog-post-meta a");
const authorName = function() {
    this.alertName = alert(alertName)
}