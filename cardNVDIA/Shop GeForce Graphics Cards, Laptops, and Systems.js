//change Sort-list
Sort_list();
function Sort_list(){
const grid_default=document.getElementById("column-list-view");
const list_default=document.getElementById("row-list-view");
const load_row_product=document.querySelectorAll("#product-item");
const load_row_detail=document.querySelectorAll("#product-detail");
const load_row_buy=document.querySelectorAll("#product-buy");
const load_row_container=document.querySelectorAll("#product-container");
const load_row_picture=document.querySelectorAll("#product-img");

grid_default.addEventListener("click",()=>{
grid_default.classList.remove("list-view-default-column");
list_default.classList.remove("list-view-active-row")
grid_default.classList.add("list-view-active-column");
list_default.classList.add("list-view-default-row");
load_row_picture.forEach((a)=>{
   a.classList.remove("img-lg");
   a.classList.add("load-more-img-lg");
   })
load_row_container.forEach((a)=>{
   a.classList.remove("load-more-product");
   a.classList.add("load-more-container-column");
   })
load_row_product.forEach((a)=>{
a.classList.remove("product-container");
a.classList.add("load-more-column")
})

load_row_detail.forEach((a)=>{
   a.classList.remove("detail-col");
   a.classList.add("load-more-column-product");
   })
load_row_buy.forEach((a)=>{
   a.classList.remove("buy-col-lg")
   a.classList.add("load-more-column-buy");
   })
})

list_default.addEventListener("click",()=>{
   list_default.classList.remove("list-view-default-row");
    grid_default.classList.remove("list-view-active-column")
   list_default.classList.add("list-view-active-row");
   grid_default.classList.add("list-view-default-column");
   load_row_picture.forEach((a)=>{
      a.classList.add("img-lg");
      a.classList.remove("load-more-img-lg");
      })
   load_row_container.forEach((a)=>{
      a.classList.add("load-more-product");
      a.classList.remove("load-more-container-column");
      })
   load_row_product.forEach((a)=>{
   a.classList.add("product-container");
   a.classList.remove("load-more-column")
   })
   
   load_row_detail.forEach((a)=>{
      a.classList.add("detail-col");
      a.classList.remove("load-more-column-product");
      })
   load_row_buy.forEach((a)=>{
      a.classList.add("buy-col-lg")
      a.classList.remove("load-more-column-buy");
      })
})
}

//Automatic sliderShow - change img every 4 second
// var myIndex = 0;
// automaticSlider();

// function automaticSlider() {
//     var i;
//     var y = document.querySelectorAll(".btn-cadidator li");
//     var x = document.querySelectorAll(".slider-item");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     for (i = 0; i < y.length; i++) {
//         y[i].className = y[i].className.replace("green-color-background", "");
//     }
//     myIndex++;
//     if (myIndex > x.length) {
//         myIndex = 1;
//     }
//     x[myIndex - 1].style.display = "block";
//     y[myIndex - 1].className += "green-color-background";
//     setTimeout(automaticSlider, 4000);
// }
//Click and automatic sliderShow - change img when click
// var myIndex = 1;
// showDiv(myIndex);
// function beforeDiv(n) {

// }
// function currentDiv(n) {
//     showDiv(myIndex = n);
// }

// function showDiv(n) {
//     var i;
//     var x = document.querySelectorAll(".slider-item");
//     var y = document.querySelectorAll(".btn-cadidator li");
//     if (n > x.length) {
//         myIndex = 1;
//     }
//     if (n < 1) {
//         myIndex = x.length;
//     }
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     for (i = 0; i < y.length; i++) {
//         y[i].className = y[i].className.replace("green-color-background", "");
//     }
//     x[myIndex - 1].style.display = "block";
//     y[myIndex - 1].className += "green-color-background";
// }

// function resetDiv(n) {
//     var i;
//     var x = document.querySelectorAll(".slider-item");
//     var y = document.querySelectorAll(".btn-cadidator li");

// }
// click Search + change icon
// clickSearch();
// function clickSearch() {
//     var z = document.getElementById("font-icon");
//     var x = document.querySelector("#search-btn");
//     var y = document.querySelector("#search-input");
//     x.addEventListener("click", () => {
//         if (z.className == "fa fa-search white-color") {
//             y.style.display = "block";
//             z.className = "fa fa-times";

//         } else if (z.className == "fa fa-times") {
//             y.style.display = "none";
//             z.className = "fa fa-search white-color";
//         }
//     })
// }
// Product: hardware and software - click
Click_Hardware_software();
function Click_Hardware_software() {

    var t = document.querySelector("#subnav-products");
    var f = document.querySelector(".overlay-web");
    var k = document.getElementById("Products");
    var solutions = document.getElementById("Solutions");
    var industries = document.getElementById("Industriess")
    var for_you = document.querySelector("#For-youu");

    var x = document.querySelector("#Hardware");
    var y = document.querySelector("#Software");
    var z = document.getElementById("subnav-hardware");
    var e = document.getElementById("subnav-software");
    var t = document.querySelector("#subnav-products");
    var subnav_for_you = document.querySelector("#subnav-For-you");
    var subnav_solutions = document.querySelector("#subnav-solutions");
    var subnav_industries = document.querySelector("#subnav-industries");
    t.style.display = "none";
    f.style.display = "none";
    //Product - click
    k.addEventListener("click", () => {
        if (t.style.display === "none") {
            t.style.display = "block";
            k.classList.add("bottom-green");
            x.classList.add("display-direction");
            y.classList.remove("display-direction");
            z.style.display = "block";
            e.style.display = "none";
            f.style.display = "block";
            subnav_for_you.style.display = "none";
            subnav_solutions.style.display = "none";
            subnav_industries.style.display = "none";
            solutions.classList.remove("bottom-green");
            for_you.classList.remove("bottom-green");
            industries.classList.remove("bottom-green");

        } else {
            t.style.display = "none";
            k.classList.remove("bottom-green");
            f.style.display = "none";
            subnav_for_you.style.display = "none";
            subnav_solutions.style.display = "none";
            subnav_industries.style.display = "none";
        }
    });
    //Products:hardware - click
    x.addEventListener("click", () => {
        x.classList.add("display-direction");
        y.classList.remove("display-direction");
        z.style.display = "block";
        e.style.display = "none";

    })
    //Products:software - click
    y.addEventListener("click", () => {
        y.classList.add("display-direction");
        x.classList.remove("display-direction");
        e.style.display = "block";
        z.style.display = "none";
    })
    //Solution - click
    solutions.addEventListener("click", () => {
        if (subnav_solutions.style.display === "none") {
            subnav_solutions.style.display = "block";
            solutions.classList.add("bottom-green");

            subnav_solutions.style.visibility = "visible";
            f.style.display = "block";
            subnav_for_you.style.display = "none";
            t.style.display = "none";
            subnav_industries.style.display = "none";
            k.classList.remove("bottom-green");
            for_you.classList.remove("bottom-green");
            industries.classList.remove("bottom-green");
        } else {
            subnav_solutions.style.display = "none";
            solutions.classList.remove("bottom-green");

            subnav_solutions.style.visibility = "hidden";
            f.style.display = "none";
            subnav_for_you.style.display = "none";
            t.style.display = "none";
            subnav_industries.style.display = "none";

        }
    })
    //for-you - click
    for_you.addEventListener("click", () => {
        if (subnav_for_you.style.display === "none") {
            subnav_for_you.style.display = "block";
            subnav_for_you.style.visibility = "visible";
            for_you.classList.add("bottom-green");

            f.style.display = "block";
            subnav_solutions.style.display = "none";
            t.style.display = "none";
            subnav_industries.style.display = "none";
            solutions.classList.remove("bottom-green");
            k.classList.remove("bottom-green");
            industries.classList.remove("bottom-green");
        } else {
            subnav_for_you.style.display = "none";
            for_you.classList.remove("bottom-green");

            subnav_for_you.style.visibility = "hidden";
            f.style.display = "none";
            subnav_solutions.style.display = "none";
            t.style.display = "none";
            subnav_industries.style.display = "none";
        }
    })
    //industries - click
    industries.addEventListener("click", () => {
        if (subnav_industries.style.display === "none") {
            subnav_industries.style.display = "block";
            subnav_industries.style.visibility = "visible";
            industries.classList.add("bottom-green");

            f.style.display = "block";
            subnav_solutions.style.display = "none";
            t.style.display = "none";
            subnav_for_you.style.display = "none";
            solutions.classList.remove("bottom-green");
            for_you.classList.remove("bottom-green");
            k.classList.remove("bottom-green");
        } else {
            subnav_industries.style.display = "none";
            industries.classList.remove("bottom-green");
            subnav_industries.style.visibility = "hidden";
            f.style.display = "none";
            subnav_solutions.style.display = "none";
            t.style.display = "none";
            subnav_for_you.style.display = "none";
        }
    })
}