let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`;

  let container = document.getElementById("container");

  let cartData = JSON.parse(localStorage.getItem("cart"))||[];

   let getData = async(url)=>{
    try {
    let res = await fetch(`${url}`);
    let data = await res.json();
    console.log(data)
    displayData(data.data)
    } catch (error) {
        console.log(error)
    }
   }

   getData(url)


let displayData = (data)=>{
    container.innerHTML=""
    data.forEach((ele)=>{
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

        let addBtn = document.createElement("button")
        addBtn.textContent="Add to Card"
        addBtn.style.backgroundColor ="orange"
        addBtn.addEventListener("click",()=>{
              cartData.push(ele)
              localStorage.setItem("cart",JSON.stringify(cartData));
        })

        box.append(image,title,brand,category,price,addBtn)
        container.append(box)


    })
}

document.getElementById("sortData").addEventListener("change",()=>{
    let sortVal = document.getElementById("sortData").value;
    console.log(sortVal)
    getData(`${url}?sort=price&order=${sortVal}`)
})

document.getElementById("filterData").addEventListener("change",()=>{
    let filterVal = document.getElementById("filterData").value;
    console.log(filterVal)
    getData(`${url}?filter=${filterVal}`)
})