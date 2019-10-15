
// 1. Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
// 2. Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
// 3. Obtain a reference the element with a class of dashed and remove it.
// 4. Obtain a reference the element with a class of article_footer and add the class of goldenrod it.


// Selects the first section with the class of article_header and assigns it to 
// const sectionEl. .textContent replaces the existing text.
const replaceText = document.querySelector(".article__header")
replaceText.textContent = "Welcome to the Cassie blog"


const important = document.querySelectorAll(".article__header")
important.classList.add("important")
