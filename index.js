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
                
            
                let child = document.createElement("div") 
                child.className = "col-6 col-sm-2 col-md-3 col-lg-4"; 
                child.innerHTML = `<div class="card">
                <img class="card-img-top" src="${element.img}" style="width:100%; height:200px"/>
                                     <div class="card-body h-100">
                                      <p><strong>${element.title} </strong></br>
                                      ${element.price} €<br></p>
                                      <button type="button" class="btn btn-primary" onclick=addToCart()>Add To Cart</button>
                                 </div>
                                </div>` 
                child.addEventListener("click", (e) => { 
                    e.currentTarget.classList.toggle("selected")
                    selectBooks();
                })
            bookList.appendChild(child)
            }); 

            }
        )
              
    .catch(err => {
              console.error('!!!!!!!!!!!!!!!!!!!! ', err);
          });
  }
              
              

              
window.onload = function(){
  loadBooks()
}

          
