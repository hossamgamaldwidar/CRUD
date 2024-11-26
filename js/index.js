var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDescription = document.getElementById("productDescription");
var btnUpdate = document.getElementById("btnUpdate")
var productImage = document.getElementById("productImage");
var btnAdd = document.getElementById("btnAdd")
var lastIndex
var products = []

if (localStorage.getItem('allProducts')) {
    products = JSON.parse(localStorage.getItem('allProducts'))
    displayProduct(products)
}


function addProduct(products) {
    var product = {
        Pname: productName.value,
        Pprice: productPrice.value,
        Pcategory: productCategory.value,
        Pdescription: productDescription.value,
        pImage: productImage.files[0]?.name,
    }
    products.push(product);
    localStorage.setItem('allProducts', JSON.stringify(products))
    clearValue()
    displayProduct()
}

function clearValue() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDescription.value = "";
    productImage.value = "";
    
}

function displayProduct(arr) {
    var emptyProduct = ``
    for (var i = 0; i < arr.length; i++) {
        emptyProduct += `
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 p-3">
                    <div class="product bg-light p-3 rounded ">
                        <div class="product-image">
                        <img src="./images/favicon_io/${arr[i].pImage}" alt="">
                        </div>
                        <div class="product-body">
                            <h2 class="h3">Name: <span>${arr[i].Pname}</span></h2>
                            <h2 class="h3">Price: <span>${arr[i].Pprice}</span></h2>
                            <h3 class="h4">Category: <span>${arr[i].Pcategory}</span></h3>
                            <p class="lead"><span>Description:</span>${arr[i].Pdescription}</p>
                            <div class="product-btns">
                            <a href="#CRUD-SYSTEM"><button onclick="setItemToForm(${i})" class="btn btn-outline-warning my-2">Update Product 🪶</button></a>
                                <button onclick="deleteProduct(${i})" class="btn btn-outline-danger my-2">Delete Product 🗑️</button>
                            </div>
                        </div>
                    </div>
                </div>
        
        `
    }
    document.getElementById("elemintRow").innerHTML = emptyProduct;
}

function deleteProduct(index) {
    products.splice(index, 1)
    localStorage.setItem('allProducts', JSON.stringify(products))
    displayProduct(products)

}

function setItemToForm(index) {
    lastIndex = index
    productName.value = products[index].Pname;
    productPrice.value = products[index].Pprice;
    productCategory.value = products[index].Pcategory;
    productDescription.value = products[index].Pdescription;
    btnUpdate.classList.remove('d-none');
    btnAdd.classList.add('d-none');

}
function updateProduct() {
    products[lastIndex].Pname = productName.value;
    products[lastIndex].Pprice = productPrice.value;
    products[lastIndex].Pcategory = productCategory.value;
    products[lastIndex].Pdescription = productDescription.value;
    products[lastIndex].pImage = productImage.files[0]?.name,
    localStorage.setItem('allProducts', JSON.stringify(products));
    displayProduct(products);
    clearValue();
    btnUpdate.classList.add('d-none')
    btnAdd.classList.remove('d-none')
}
function Searchproudact(searchkey){
    result = []; 
    for (var i = 0; i < products.length; i++){
        if(products[i].Pname.toLowerCase().trim().includes(searchkey.toLowerCase().trim())){
            result.push(products[i])
        }
    }
    displayProduct(result)
}


var reg = /^(002){0,1}01[0125][0-8]{8}$ /;
reg.test("0123456789")