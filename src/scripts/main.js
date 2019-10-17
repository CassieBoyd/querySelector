// INSTRUCTIONS
// X1. Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
// X2. Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
// X3. Obtain a reference to the element with a class of dashed and remove it.
// 4. Obtain a reference to the element with a class of article_footer and add the class of goldenrod it.


// Selects the first element in the HTML with the class of article_header and assigns it to const sectionEl. .textContent replaces the existing text.
const replaceText = document.querySelector(".article__header")
replaceText.textContent = "Welcome to Cassie's Blog: Hold on to Your Butts"

// Selects all elements in the HTML with a class of article__header and assigns them to the "important" variable. Returns an array of HTML references.
const important = document.querySelectorAll(".article__header")

// For each loop loops through each "important" element and adds the class "important". Had to use a loop to perform operations on the elements because the elements are contained in an array.
important.forEach((tag) => {
    tag.classList.add("important")
})

// Selects the first element in the HTML with a class of "dashed".
const dashed = document.querySelector(".dashed")

// Selects the classList of dashed and removes the "dashed" class.
dashed.classList.remove("dashed")

// Selects the first element with the class article_footer.
const golden = document.querySelector(".article__footer")

// Selects the classList of golden and adds class goldenrod.
golden.classList.add("goldenrod")