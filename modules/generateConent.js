const makeHeading = require("./makeHeading");
const makeUUID = require("./log_uuid");
const randomColor = require('randomcolor');

const navigation = `
    <nav>
        <span><a href="?page=home">Home</a></span>
        <span><a href="?page=contact">Contact</a></span>
        <span><a href="?page=about">About</a></span>
    </nav>
`


let generateContent = ({page, additional,count})=>{
    return  `
        <!DOCTYPE html>
        <html>
            <head>
                <title>My Selection:${page}</title>
                <link rel="stylesheet" href="styles.css" type="text/css">
               
            <head>
            
            <body>
                ${navigation}
                ${makeHeading(page)}
                The count is ${count || 0}. I hope you are happy.
                <ul class="listClass">
                    ${additional.join("")}
                </ul>
                <footer>
                    copyleft 2020

                    <h1 style=background-color:${randomColor()}> Your user ID is ${makeUUID()}</h1>
                </footer>
            </body>
        </html>
    `
}

module.exports = generateContent