
let productContainer = document.querySelector('.productContainer');
let news = document.querySelector(".news");

let newsContainer = document.createElement('div');
newsContainer.classList.add("grid_container");

newsContainer.innerHTML = `<div class="news_box">
                           <h1 class="header">NEW PRODUCTS</h1>
                           <li>dress</li>
                           <li>dress</li>
                           <li>dress</li>
                           <li>dress</li>
                           <li>dress</li>
                           <li>dress</li>
                           <li>dress</li>
                           <li>dress</li>
                           <li>dress</li> 
                            </div>
                           <div class="news_box">
                           <h1 class="header">TRENDING</h1>
                           <div class="trending"><img src="womenred5.jpeg"><span><a href="#">GUCCI</a></span></div>
                           <div class="trending"><img src="normalcloth.png"><span><a href="#">GUCCI</a></span></div>
                           <div class="trending"><img src="mencoat.jpeg"><span><a href="#">GUCCI</a></span></div>
                           <div class="trending"><img src="menwomen1.webp"><span><a href="#">GUCCI</a></span></div>
                           <div class="trending"><img src="normalcloth2.jpeg"><span><a href="#">GUCCI</a></span></div>
                             
                           </div>
                           <div class="news_box">
                           <h1 class="header">BRAND DROPS</h1>
                           </div>
                           <div class="news_box">
                           <h1 class="header">NEW EDITS</h1>

                           </div>`;
productContainer.appendChild(newsContainer);

news.onclick = () =>{
    if(newsContainer.style.display === 'none' && productContainer.style.display ==="none"){
        newsContainer.style.display = "block";
        productContainer.style.display = "block";
    }
    else{
        newsContainer.style.display = "none";
        productContainer.style.display = "none";

    }

}