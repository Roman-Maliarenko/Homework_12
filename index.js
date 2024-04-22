const container = document.querySelector('.container')

    fetch("https://www.geojs.io/docs/v1/endpoints/ip/")
    .then(res=>res.json())
    .then(json=>render(json))

    const render =({latitude, longitude})=>{
        
        const cardElemenet = document.createElement('div');
        cardElemenet.className= "card";
        const latitudeElem = document.createElement("div")
        latitudeElem.className = "latid";
        const longitudeElem = document.createElement("div")
        longitudeElem.className = "long"

        cardElemenet.append(latitudeElem, longitudeElem)
        container.append(cardElemenet)

    }
