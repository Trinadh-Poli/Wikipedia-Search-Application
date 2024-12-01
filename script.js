let searchInputEl = document.getElementById('searchInput');
let searchResultsContainer = document.getElementById('searchResults');
let spinnerEl = document.getElementById('spinner');

function createAndAppendsearchresult(result) {

    let resultItemDivElemenet = document.createElement("div");
    resultItemDivElemenet.classList.add("result-item");
    searchResultsContainer.appendChild(resultItemDivElemenet);

  

    let {
        description,
        link,
        title
    } = result;
    let titleAnchorEl = document.createElement('a');
    titleAnchorEl.classList.add("result-title");
    titleAnchorEl.href = link;
    titleAnchorEl.target = "_blank";
    titleAnchorEl.textContent = title;
    searchResultsContainer.appendChild(titleAnchorEl);
    // create break element 

    let titleBreakEl = document.createElement('br');
    searchResultsContainer.appendChild(titleBreakEl);

    // create url element
    let urlAnchorEl = document.createElement('a');
    urlAnchorEl.classList.add("result-url");
    urlAnchorEl.href = link;
    urlAnchorEl.target = "_blank";
    urlAnchorEl.textContent = link;
    searchResultsContainer.appendChild(urlAnchorEl);


    // create break element     
    let urlBreakEl = document.createElement('br');
    searchResultsContainer.appendChild(urlBreakEl);


    // create description element

    let desParaEl = document.createElement('p');
    desParaEl.classList.add('link-description');
    searchResultsContainer.appendChild(desParaEl);
    desParaEl.textContent = description;



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
