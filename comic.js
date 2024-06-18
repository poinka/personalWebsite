document.addEventListener('DOMContentLoaded', async () => {
    const email = 'p.korobeinikova@innopolis.university'; 
    const emailParam = new URLSearchParams({email : email});
    const urlId = `https://fwd.innopolis.university/api/hw2?${emailParam.toString()}`;
    
    const idResponse = await fetch(urlId);

    if (idResponse.ok) {
        const comicId = await idResponse.text();
        const idParam = new URLSearchParams({id : comicId});
        const url = `https://fwd.innopolis.university/api/comic?${idParam.toString()}`;
        
        const comicResponse = await fetch(url);
        if (comicResponse.ok) {
            const data = await comicResponse.json();
            
            const comicContainer = document.getElementById("comic-container");

            const titleElement = document.createElement('h2');
            titleElement.textContent = `Title: ${data.safe_title}`; 
            comicContainer.appendChild(titleElement);

            const imgElement = document.createElement('img');
            imgElement.src = data.img;
            imgElement.alt = data.alt;
            comicContainer.appendChild(imgElement);

            const dateElement = document.createElement('h2');
            const date = new Date(data.year, data.month-1, data.day);
            //console.log(data.year, data.month, data.day);
            dateElement.textContent = `Date: ${date.toLocaleDateString()}`;
            comicContainer.appendChild(dateElement);
            
            
        } else {
            alert("Error fetching comic: " + comicResponse.status);
        }
    } else {
        alert("Error finding ID: " + idResponse.status);
    }
})

