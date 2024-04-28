let cartData = JSON.parse(localStorage.getItem("cart"))||[];


let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`;

let container = document.getElementById("container");





let getData = async(url)=>{
    try {
    let res = await fetch(`${url}`);
    let data = await res.json();
    console.log(data)
    displayData(cartData)
    } catch (error) {
        console.log(error)
    }
   }

   getData(url)


   let displayData = (data)=>{
    container.innerHTML=""
    data.forEach((ele,i)=>{
        let box = document.createElement("div")

        let brand = document.createElement("p")
        brand.textContent = `Brand : ${ele.brand}`;

        let image = document.createElement("img")
        image.src = ele.image;

        let title = document.createElement("h3")
        title.textContent= ele.title;

        let category = document.createElement("p")
        category.textContent = `Category : ${ele.category}`;

        let price = document.createElement("h5")
        price.textContent =`Price : ${ele.price}`;
        price.setAttribute= "id","onePrice";

        let addBtn = document.createElement("button")
        addBtn.textContent="Remove"
        addBtn.style.backgroundColor ="orange"
        addBtn.addEventListener("click",()=>{
              deleteItm(i)
        })

        box.append(image,title,brand,category,price,addBtn)
        container.append(box)


    })
}


function deleteItm(i){
    cartData.splice(i,1)
    localStorage.setItem("cart",JSON.stringify(cartData))
    displayData(cartData)
}