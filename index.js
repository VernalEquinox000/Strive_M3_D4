const loadBooks = function() {
      console.log('button clicked');
    fetch("https://striveschool-api.herokuapp.com/books", {
        "method": "GET",
    })
        .then(response => response.json())
        .then(apiResponse => {
              
              
            
            let bookList = document.getElementById("book-list");
            bookList.innerHTML = ""

            apiResponse.forEach(element => {
                
            
                let book = document.createElement("div") 
                book.className = "col-6 col-sm-6 col-md-3 col-lg-2"; 
                book.innerHTML = `<div class="card" style"min-width:300px">
                                    <img src="${element.img}" class="card-img-top" alt="${element.title}" style="max-width:100%">
                                    <div class="card-body">
                                        <h5 class="card-title">${element.title}</h5>
                                        <p class="card-text">${element.price} €</p>
                                        <button type="button" class="btn btn-primary" onclick=addToCart()>Add To Cart</button><br>
                                        <button type="button" class="btn btn-secondary" onclick=deleteFromPage()>Skip</button>
                                    </div>
                                </div>
                            </div>`
                bookList.appendChild(book)
            }); 

            }
        )
        .catch(err => {
              console.error('try again!', err);
          });
  }
              
              




const deleteFromPage = function () {
    let allCards = document.querySelectorAll(".col-6")
    let skipButtons = document.querySelectorAll(".btn.btn-secondary")
    for (let i = 0; i < skipButtons.length; i++) {
        skipButtons[i].onclick = function(){
            allCards[i].style.display="none";
        }    
    }

}

window.onload = function(){
  loadBooks()
}

          
