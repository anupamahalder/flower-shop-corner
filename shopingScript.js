//Declare global variable
let total = 0;

function goToshop(){
    window.location.href = "flowershop.html";
}

function goToHome(){
    window.location.href = "index.html";
}

//Handle click button 
function handleClickBtn(){
    confole.log('hello');
}
function handleClickBtn(target){
    //to get the title of flower card
    const flowerName = target.parentNode.childNodes[3].innerText;
    // create element 
    const li = document.createElement('li');
    li.innerText = flowerName;
    const priceDiv = document.getElementById('flowers-name-div');
    priceDiv.appendChild(li);

    //get the price of flower
    const flowerPriceString = target.parentNode.childNodes[7].innerText.split(" ")[1];
    const flowerPrice = parseFloat(flowerPriceString);
    total += flowerPrice;

    //create element to show the price there
    document.getElementById('totalPrice').innerText = total;
}