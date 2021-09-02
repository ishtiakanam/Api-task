const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs,searchText))

    searchField.value='';
}
searchBook()

const displaySearchResult = (docs,searchText) => {
  const searchResult = document.getElementById('search-result');
  searchResult.innerHTML = '';
  document.getElementById('result-count').innerText = docs.length;
  resultCount= docs.length;
  if(docs.length === 0 && searchText !== ''){
                                                                                                                                                                                                                                                                                                          
    const div =document.createElement('div');
     div.classList.add('col-12');
    div.innerHTML = `<div  class=" text-center ">
    <p class ="text-center">No item available.</p>
    </div>`;
    searchResult.appendChild(div);
  }
 else{
  docs.forEach(book => {
      console.log(book);
      const div =document.createElement('div');
      div.classList.add('col-3');
      div.innerHTML =`
      <div  class="card h-100 row-3">
         <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
       <div class="card-body text-center">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">${book.author_name}</p>
        <p class ="card-text">${book.first_publish_year}</p>
       </div>
      </div>
      `;
      searchResult.appendChild(div);
  });
}
}