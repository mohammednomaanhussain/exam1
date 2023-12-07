let maincont=document.querySelector('.main-container')
let catgcont=document.querySelector('.catg-container')
console.log(maincont)
window.onload=function(){

}
fetch('https://dummyjson.com/products')
.then((data)=>{
    // console.log(data.json())
    return data.json()
})
.then((values)=>{
    let products=values.products
    console.log(products)
    displayproductscatgs(products)
    displayproducts(products)
})
let catgs=[]
let uniquecatgs=[]
function displayproductscatgs(products){
    let prodcatgs=products.map((e)=>{
            catgs.push(e.category)
        })
        let uniquecatgs=catgs.filter((e,i)=>function(){
            // console.log(prod)
            return e.indexOf() === i
        })
        console.log(uniquecatgs)
    console.log(catgs)
    catgcont.innerHTML=prodcatgs.join('')
}
function displayproducts(products){
    let singleprod=products.map((e)=>{
        let elems=`
        <div class="single-product">
        <div><img src="${e.thumbnail}" alt="not available"></div>
        <div><h2>${e.title}</h2></div>
        <div class="price">price:${e.price}</div>
    </div>`
    return elems
    })
    maincont.innerHTML=singleprod.join('')
}