let searchInputEl = document.getElementById('searchInput');
let searchResultsContainer = document.getElementById('searchResults');
let spinnerEl = document.getElementById('spinner');

function createAndAppendsearchresult(result) {
    let resultItemDivElement = document.createElement("div");
    resultItemDivElement.classList.add("result-item");
    searchResultsContainer.appendChild(resultItemDivElement);

    let { title, link, description } = result;

    // Title
    let titleAnchorEl = document.createElement("a");
    titleAnchorEl.classList.add("result-title");
    titleAnchorEl.href = link;
    titleAnchorEl.target = "_blank";
    titleAnchorEl.textContent = title;
    resultItemDivElement.appendChild(titleAnchorEl);

    // Break
    let titleBreakEl = document.createElement("br");
    resultItemDivElement.appendChild(titleBreakEl);

    // URL
    let urlAnchorEl = document.createElement("a");
    urlAnchorEl.classList.add("result-url");
    urlAnchorEl.href = link;
    urlAnchorEl.target = "_blank";
    urlAnchorEl.textContent = link;
    resultItemDivElement.appendChild(urlAnchorEl);

    let urlBreakEl = document.createElement("br");
    resultItemDivElement.appendChild(urlBreakEl);

    // Description
    let desParaEl = document.createElement("p");
    desParaEl.classList.add("link-description");
    desParaEl.textContent = description;
    resultItemDivElement.appendChild(desParaEl);
}



function displaysearchresults(searchresults) {
    for (let result of searchresults) {
        createAndAppendsearchresult(result);
    }
}

function searchingwikipidea(event) {
    if (event.key === "Enter") {
        searchResultsContainer.textContent = "";
        spinnerEl.classList.toggle('d-none');
        let searchInputValue = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputValue;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                spinnerEl.classList.toggle('d-none');
                console.log(jsonData);
                let {
                    search_results
                } = jsonData;
                displaysearchresults(search_results);
            });

    }

}


searchInputEl.addEventListener("keydown", searchingwikipidea);
