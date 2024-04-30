// Access Key
const accessKey = "h4VECUZq0IK8SibSo9OynN1Q_fH-npOb997iIzyLC_I";

// Accessing Elements
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const loadImg = document.getElementById("load-Img");
const loadMore = document.getElementById("load-more");

let keyword = "";
let page = 1;

// Async await function and Fetching Data from URL
async function searchImages(){

    if(page === 1){
        loadImg.innerHTML = "";
    }

    keyword = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    // Mapping Data, Creating and Appending Elements
    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imgLink = document.createElement("a");
        imgLink.href = result.links.html;
        imgLink.target = "_blank";

        imgLink.appendChild(image);
        loadImg.appendChild(imgLink);
    })

    loadMore.style.display = "block";

}
// Handling Event Listners to display Images
searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    searchImages();
})


// Handling Events to load more Images
loadMore.addEventListener("click", ()=>{
    page++;
    searchImages();
})
