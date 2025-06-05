const accessKey = "A6n3UZj1F6R78D69R2CLryddCZjqdYmStubkblPSHQU" 

const inputValue = document.getElementById("inputData");

const imageContainer = document.getElementById("imageContainer");

const searchButton = document.getElementById("searchButton");

const buttonContainer = document.getElementById("buttonContainer");

let imagesData = []

let pages = 1 



async function searchImages(query,page,perPage){
    const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`
    const response = await fetch(url)
    const data = await response.json()
    imagesData = data.results
    displayImages(imagesData)
}


function displayImages(data){
    buttonContainer.textContent = ""
    console.log(data.length)
    console.log(data)
    //let arraycount = 0
    // data.map(eachItem => {
    //     console.log(arraycount)
    //     const {description,urls} = eachItem
    //     if( description === ""){
    //         console.log(description.slice())
    //         console.log(urls.raw)
    //         // //individual imageContainer
    //         const individualImageContainer = document.createElement("div")
    //         individualImageContainer.classList.add("each-image-container")
    //         //image element
    //         const imgElement = document.createElement('img');
    //         imgElement.classList.add("images-styling");
    //         imgElement.src= urls.regular;
    //         individualImageContainer.appendChild(imgElement);
    //         //descripton para element
    //         const paraElement = document.createElement("p");
    //         paraElement.textContent = inputValue;
    //         individualImageContainer.appendChild(paraElement);
    //         imageContainer.appendChild(individualImageContainer);
    //         arraycount++
    //     }    
    // })

    for (let item of data){
        const {description,urls} = item;
        if(description === null){
            const individualImageContainer = document.createElement("div")
            individualImageContainer.classList.add("each-image-container")
            //image element
            const imgElement = document.createElement('img');
            imgElement.classList.add("images-styling");
            imgElement.src= urls.regular;
            individualImageContainer.appendChild(imgElement);
            //descripton para element
            const paraElement = document.createElement("p");
            paraElement.textContent = inputValue.value;
            individualImageContainer.appendChild(paraElement);
            imageContainer.appendChild(individualImageContainer);
        }
        else{
            const individualImageContainer = document.createElement("div")
            individualImageContainer.classList.add("each-image-container")
            //image element
            const imgElement = document.createElement('img');
            imgElement.classList.add("images-styling");
            imgElement.src= urls.regular;
            individualImageContainer.appendChild(imgElement);
            //descripton para element
            const paraElement = document.createElement("p");
            paraElement.textContent = description.slice(0,25);
            individualImageContainer.appendChild(paraElement);
            imageContainer.appendChild(individualImageContainer);
        }
    }


    const buttonElement = document.createElement("button")
    buttonElement.textContent = "See More"
    buttonElement.classList.add("button-styling")
    buttonContainer.appendChild(buttonElement);
}


function clearResults(){
    imagesData = []
    imageContainer.textContent = "";

}

searchButton.addEventListener("click", async () => {
    clearResults()
    let inputData = inputValue.value;
    await searchImages(inputData,1,30);
})


buttonContainer.addEventListener("click", async() => {
    pages++
    clearResults()
    let inputData = inputValue.value;
    await searchImages(inputData,pages,30);
    displayImages(imagesData)

})


// inputValue.addEventListener("keydown" , function(event){
//     if (event.key === "Enter"){
//         let inputData = inputValue.value;
//         console.log(inputData);
//         fetch(`https://api.unsplash.com/search/photos?query=${inputData}&client_id=${accessKey}`)
//         .then((response) => {
//             return response.json()
//         })
//         .then((data) => {
//             console.log(data)
//             imagesData = data.results
//             imagesData.map(eachItem => {
//                 const {description,urls} = eachItem
//                 console.log(description)
//                 console.log(urls.raw)
//                 //individual imageContainer
//                 const individualImageContainer = document.createElement("div")
//                 individualImageContainer.classList.add("each-image-container")
//                 //image element
//                 const imgElement = document.createElement('img');
//                 imgElement.classList.add("images-styling");
//                 imgElement.src= urls.raw ;
//                 individualImageContainer.appendChild(imgElement);
//                 //descripton para element
//                 const paraElement = document.createElement("p");
//                 paraElement.textContent = description.slice(0,25);
//                 individualImageContainer.appendChild(paraElement);
//                 imageContainer.appendChild(individualImageContainer);
//             })
//         })
//     }
    
// })
