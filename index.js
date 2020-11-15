let  booksData =[]
const loadBooks = function () {
      console.log('button clicked');
    fetch("https://striveschool-api.herokuapp.com/books", {
        "method": "GET",
    })
        .then(response => response.json())
        .then(apiResponse => {
              booksData = apiResponse
              
            
            let bookList = document.getElementById("book-list");
            bookList.innerHTML = ""

            apiResponse.forEach(element => {
                
            
                let book = document.createElement("div") 
                book.className = "col-6 col-sm-6 col-md-3 col-lg-2 book"; 
                book.style.border = "none";
                book.innerHTML = `<div class="card" style"min-width:300px">
                                    <img src="${element.img}" class="card-img-top" alt="${element.title}" style="height:400px; object-fit:cover">
                                    <div class="card-body">
                                        <h5 class="card-title">${element.title}</h5>
                                        <p class="card-text">${element.price} €</p>
                                        <button type="button" class="btn btn-primary" onclick="selectBook()">Add To Cart</button><br>
                                        <button type="button" class="btn btn-outline-primary" style="display:none" onclick=removeFromList()>Remove From Cart</button><br>
                                        <button type="button" class="btn btn-secondary" onclick="deleteFromPage(event)">Skip</button>
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
              
              
const selectBook = function () {
 
    let allCols = document.querySelectorAll(".book")
    let atcButtons = document.querySelectorAll(".btn.btn-primary")
    let rfcButtons = document.querySelectorAll(".btn.btn-outline-primary")
    for (let i = 0; i < atcButtons.length; i++) {
        atcButtons[i].onclick = function () {
           
            allCols[i].style.border === "none" ? allCols[i].style.border="5px solid black" : allCols[i].style.border = "none"

            rfcButtons[i].style.display="block"
            
            
            let toCart = allCols[i].cloneNode(true);
            document.getElementById("cart").appendChild(toCart)
            
        }

        /* document.querySelectorAll("#cart .btn-primary").display="none" */
    }
}


const deleteFromPage = function (event) {
    console.log(event)
    event.target.closest(".col-6").remove()
/* 
    let allCols = document.querySelectorAll(".col-6")
    let skipButtons = document.querySelectorAll(".btn.btn-secondary")
    for (let i = 0; i < skipButtons.length; i++) {
        skipButtons[i].onclick = function(){
            allCols[i].remove()
        }    
    } */

}

const removeFromList = function () {
    let colsCart = document.querySelectorAll("#cart .col-6")
    let rfcButtons = document.querySelectorAll("#cart .btn.btn-outline-primary")
    for (let i = 0; i < rfcButtons.length; i++) {
        /* colsCart[i].onclick = function () { style.border = "5px solid red" }
        rfcButtons[i].style.display = "block" */
        rfcButtons[i].onclick = function () {
            colsCart[i].style.display = "none"

        }
    }
}


const search = function () {
    const input = document.querySelector('.form-control').value
    if (input.length >= 3) {
        const filtered = booksData.filter(book => book.title.toLowerCase().includes(input))
        console.log(filtered)
    } else {
        
    }
    

   /*  let bookTitles = document.querySelectorAll("h5")
    let titles = [];
    for (let i = 0; i < bookTitles.length; i++) {
        titles[i]=bookTitles[i].innerText
        
    }
        
    console.log(titles) */
}





window.onload = function(){
  loadBooks()
}

