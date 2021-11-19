/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const BASE_URL = 'https://platzi-avo.vercel.app'
const API = `${BASE_URL}/api/avo`
const app = document.querySelector('#app')
app.className = 'mt-10 grid grid-cols-2 gap-2'
const formatPrice = (price) =>
    new Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price);


//conect to server
async function fetchData(){
    const response = await fetch(API),
    //process the request and transform in json
    responseJson = await response.json(),
    allItem = []
    //JSON -> Data -> render info
    responseJson.data.forEach(item => {
        //Create IMG and insert data
        const image = document.createElement('img')
        image.className = 'h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6'
        image.src = BASE_URL + item.image
        //Create title and insert data
        const title = document.createElement('h2')
        title.classList.add('text-1g')
        title.textContent = item.name
        //Create price and insert data
        const price = document.createElement('p')
        price.classList.add('text-gray-600')
        price.textContent = formatPrice(item.price)
        const priceAndTitle = document.createElement('div')
        priceAndTitle.className = 'text-center md:text-left'
        priceAndTitle.append(title, price)
        //Create constainer
        const card = document.createElement('div')
        card.className = 'md:flex bg-white rounded-1g p-6'
        //Add image, title and price in container
        card.append(image, priceAndTitle)
        //Push container in array (allItem)
        allItem.push(card)
    });
    app.append(...allItem)
}
fetchData()