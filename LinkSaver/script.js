const linkInput = document.getElementById('link-input');
const addButton = document.getElementById('add-btn');
const linksContainer = document.getElementById('links-list');

linksContainer.innerHTML = ""; // Clear existing links before rendering


// getting all stored links from the local storage..
let links = JSON.parse(localStorage.getItem('links')) || [];


// render all the task on page load..
links.forEach((link) => renderLinks(link));

// initial total number update..
totalLinks();


// add task with mouse click..
addButton.addEventListener('click', () => {
    addLinks();
})

// add task with enter key..
linkInput.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        addLinks();
    }
})


// function to add links..
function addLinks(){
    const linksText = linkInput.value.trim();
    if(linksText === "") return;    // if input filed is empty..


    // checking duplicate links..
    const isDuplicate = links.some(link => link.text === linksText);
    if(isDuplicate){
        alert("This link is already added!!");
        linkInput.value = "";
        return;
    }

    // adding new links with id..
    const newLinks = {
        id: Date.now(),
        text: linksText
    }

    links.push(newLinks);   // adding the links in the array..
    saveLinks();            // save the links in the local storage..
    renderLinks(newLinks);          // render the new link on the UI..
    totalLinks();
    linkInput.value = "";    // clear the input field..
}


// function to save links in the local storage..
function saveLinks(){
    localStorage.setItem('links', JSON.stringify(links));
}


// function to render the links..
function renderLinks(link){
    const linksItem = document.createElement('li');
    linksItem.setAttribute('data-id', link.id);
    linksItem.setAttribute('draggable', 'true');
    linksItem.innerHTML = `
    <span>${link.text}</span>
        <button class="copy-btn">
            <i class="fa-solid fa-copy edit-btn"></i>
        </button>
        <button class="delete-btn">
            <i class="fa-solid fa-trash edit-btn"></i>
        </button>
    `;

    // copying the links..
    linksItem.querySelector('.copy-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(link.text).then(() => {
            const span = linksItem.querySelector('span');
            const originalText = span.textContent;
            span.textContent = 'Copied!!';
            // styling the Copied message..
            span.style.color = 'Green';
            span.style.fontWeight = 'Bold';
            setTimeout(() => {
                span.textContent = originalText;
                span.style.color = '#333';
            }, 1300);
        }).catch((err) => {
            console.error("Couldn't copy the link: ", err);
        });
    });


    // deleting the links..
    linksItem.querySelector('.delete-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        links = links.filter((eachLink) => eachLink.id !== link.id);
        linksItem.remove();
        saveLinks();
        totalLinks();
    });
    linksContainer.appendChild(linksItem);  // adding the links to the UI..
}

// function for total links saved..
function totalLinks(){
    const totalTaskSpan = document.getElementById('total-links');
    const totalLinksLength = `Total Links: ${links.length}`;
    totalTaskSpan.textContent = totalLinksLength;
}