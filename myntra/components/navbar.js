function navbar() {
  return `    <div class="parent-box-1">
    <div  class="logo_div">
      <a href="/index.html"> <img id="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS357fHYAnvyZIqrnolaRs3MlCQO7PyKngEag&usqp=CAU"/></a> 
    </div>

   <div class="menu_div">
       
        <div id="main_div">
              <a id="button"  href="/LandingPageHTML/menlandingPage.html">MENS</a>
            <div id="hitesh1">
              <div id="b">
                 <div class="div" id="d1">
                     <h5 class="h5"><a href="#">Topwear</a></h5>
                         <ul>
                            <li><a href="/nav_itemsHTML/tshirtMens.html">T-shirts</a></li>
                            <li><a href="/nav_itemsHTML/casualshirtMens.html">Casual Shirts</a></li>
                             <li><a href="#">Formal Shirts</a></li>
                             <li><a href="#">Sweatshirts</a></li>
                              <li><a href="#">Sweaters</a></li>
                             <li><a href="#">Jackets</a></li>
                             <li><a href="#">Blazers & Coats</a></li>
                             <li><a href="#">Suits</a></li>
                            <li><a href="#">Rain Jackets</a></li>
                       
                         </ul>
                         </div>
               <div id="d5">
               

               </div>
               <div id="d6">
               <h5 class="h5"><a href="#">Personal care & Grooming</a></h5>
               <h5 class="h5"><a href="#">Sunglass & Frames</a></h5>
               <h5 class="h5"><a href="#">Watches</a></h5>
           </div>
               
             </div>
          </div>
        
      </div>
  




       <div id="main_div">
       <a id="button"  href="/LandingPageHTML/womanlandingPage.html">WOMENS</a>
      
   </div>

      





</div>
<div class="parent-box-2">

<div class="div1">
    <input  type="text" name="" id="search" placeholder="Search for products, brands and more">  
        <span><i class="fa-solid fa-magnifying-glass">&nbsp;</i></span> 
        <div id="two" ></div>
</div>

<div id="other_div">
    <div>
        <div id="main_div">
        <a href=""><i class="fa-solid fa-user"  id="i2" ></i></a>
        <h5 id="profile_tag"><a  href="#">Profile</a></h5>
        <div id="hitesh7">
          <div id="b">
             <div class="div" id="d1">
                 <h5 id="lh5">Welcome</h5>
                 <button id="ls"><a id="logincss"href="/login/login.html">LOGIN / SIGNUP</a></button>
                 <br>
                 <hr>
                     <ul>
                        <li><a href="/nav_itemsHTML/bedRunnerHome.html">Order</a></li>
                        <li><a href="/cart/wishlist.html">Wishlist</a></li>
                         <li><a href="#">Gift card</a></li>
                         <li><a href="#">Contact us</a></li>
                          <li><a href="#">Myntra Insider <button id="insider_span">New</button></a></li>
                      
                     </ul>
                    
                    <hr>

                  <ul>
                         <li><a href="/nav_itemsHTML/bedRunnerHome.html">Myntra credit</a></li>
                           <li><a href="/nav_itemsHTML/mattressHome.html">Coupons</a></li>
                         <li><a href="#">Saved cards</a></li>
                         <li><a href="#">Saved Address</a></li
                 </ul>
                     </div>       
         </div>
        </div>
        </div>
    </div>
    <div>
        <a href="/cart/wishlist.html"><i class="fa-solid fa-heart font"  id="i1"><span id="count_wish">&nbsp;<span></i></a><br>
      <a id="wishlist_tag" href="/cart/wishlist.html">Whishlist</a>
    </div>

    <div>
      <a id="count" href="/cart/bag.html">  <i class="fa-solid fa-bag-shopping font " id="i1"><span  id="count_cart">&nbsp;</span></i></a>
       <br>  <a id="cart_tag" href="/cart/bag.html">Bag</a>
    </div>
</div>

</div> 

`;
}

let searchFunction = () => {
  let searchData1 = [
    { Title: "Mens Casual Shirt", Path: "/nav_itemsHTML/casualshirtMens.html" },
    { Title: "Mens Sports Shoes", Path: "/index.html" },
    { Title: "Mens Shoes", Path: "/index.html" },
    { Title: "Womens Shoes", Path: "/index.html" },
    { Title: "Mens Shoes", Path: "/index.html" },
    { Title: "Shirts Casual Men ", Path: "/index.html" },
    { Title: "TOP  Brands", Path: "/index.html" },
    { Title: "Jeans Top Brands", Path: "/index.html" },

  ];

  document.getElementById("search").addEventListener("input", debounce);

  let id;
  function FinalSearch() {
    let value = document.getElementById("search").value;
    console.log(value);


    var arr = [];
    // let count = 0;
    for (let i = 0; i < searchData1.length && value.length > 0; i++) {
      let searchData = searchData1[i].Title
      // console.log(searchData)
      if (
        searchData[0].toLowerCase() == value[0].toLowerCase() &&
        searchData[1] == value[1] &&
        searchData[2] == value[2]
      ) {
        arr.push(searchData1[i]);
      } else if (
        searchData[0].toLowerCase() == value[0].toLowerCase() &&
        searchData[1] == value[1] &&
        value.length == 2
      ) {
        arr.push(searchData1[i]);
      } else if (
        searchData[0].toLowerCase() == value[0].toLowerCase() &&
        value.length == 1
      ) {
        arr.push(searchData1[i]);
      }
    }

    arr = arr.reverse();
    document.getElementById("two").innerText = null;
    arr.forEach(function (el) {
      let result = document.createElement("div");
      result.setAttribute("id", "result");
      let resultlink = document.createElement("a");
      resultlink.style.textDecoration = "none";
      resultlink.style.cursor = "pointer";
      resultlink.innerText = el.Title;

      let goaToPage = () => {
        console.log(el)
        window.location.href = el.Path
      };
      resultlink.addEventListener("click", goaToPage);


      result.append(resultlink);
      document.getElementById("two").append(result);
    });
  }

  function debounce(SearchFun) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(function () {
      FinalSearch();
    }, 400);
  }
};

export { navbar, searchFunction };
