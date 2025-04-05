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
