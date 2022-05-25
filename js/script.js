// CREATING LIST ARRAY FROM THE LIST ELEMENTS.
const listArray = Array.from(document.querySelectorAll(`li`));
listArray.map(item => console.log(item));

// Finding number of li items in the list.
const numOfItems = listArray.length;
// Finding number of pages required for all li elements.
const numOfPages = Math.ceil(numOfItems / 10);
// Getting the .pagination ul element.
const paginationElement = document.querySelector(`.pagination`);

let currentPage = 1;
const rowsPerPage = 10;

// CREATING THE PAGINATION.
function buildPagination() {
    for (let i = 1; i <= numOfPages; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a')
        a.href = '#';
        a.innerText = i;

        // Adding a tags to list items.
        li.appendChild(a);
        // Adding list items to ul element.
        paginationElement.appendChild(li);

        // Setting the first page to active initially.
        if (currentPage == i) a.classList.add('active');
    }
}

// CREATING AN ONCLICK LISTENER TO PASS ACTIVE PAGE TO buildPage() FUNCTION.
function addItemsToPage() {
    const links = Array.from(document.querySelectorAll(`.pagination li a`))
    links.map((link) => link.addEventListener("click", (e) => {
        e.preventDefault();
        // Get current page number.
        currentPage = parseInt(e.target.innerText)
        // Remove 'active' class from current page.
        document.querySelector(`.active`).classList.remove('active');
        // Add 'active' to active page.
        e.target.classList.add('active');
        // Call buildPage method.
        buildPage(currentPage);
    }))
}

// GETTING THE LIST ELEMENTS BASED ON PAGE NUMBER.
function buildPage(activePage) {
    let start = (activePage - 1) * rowsPerPage;
    let end = start + rowsPerPage;

    // Showing the selected list items and hiding the rest.
    for (let i = 0; i < numOfItems; i++) {
        if ((i < start) || (i >= end)) {
            listArray[i].style.display = "none";
        } else {
            listArray[i].style.display = "";
        }
    }

    // Scroll to the top of the page.
    window.scrollTo(0, 0);
}

// METHOD CALL.
buildPagination()
addItemsToPage()
buildPage(currentPage)

// REFERENCES (I've referred these websites to understand how pagination works and recreated them based on the logic of the project.)
// 1. Class Notes
// 2. https://stackoverflow.com/questions/39975005/simple-javascript-pagination-for-lia-href
// 3. https://www.youtube.com/watch?v=IqYiVHrO2U8
// 4. https://medium.com/geekculture/building-a-javascript-pagination-as-simple-as-possible-a9c32dbf4ac1
// 5. I have referred to Stack Overflow for errors and doubts.