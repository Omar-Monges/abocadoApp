/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const BASE_URL = 'https://platzi-avo.vercel.app'
const API = `${BASE_URL}/api/avo`
const app = document.querySelector('#app')
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
        image.src = BASE_URL + item.image
        //Create title and insert data
        const title = document.createElement('h2')
        title.textContent = item.name
        //Create price and insert data
        const price = document.createElement('p')
        price.textContent = item.price
        //Create constainer
        const constainer = document.createElement('div')
        //Add image, title and price in container
        constainer.append(image, title, price)
        //Push container in array (allItem)
        allItem.push(constainer)
    });
    app.append(...allItem)
}
fetchData()