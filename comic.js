document.addEventListener('DOMContentLoaded', async () => {
    const email = 'p.korobeinikova@innopolis.university'; 
    const emailParam = new URLSearchParams({email : email});
    const urlId = `https://fwd.innopolis.university/api/hw2?${emailParam.toString()}`;
    
    //console.log(urlParams.toString());

    const idResponse = await fetch(urlId);

    if (idResponse.ok) {
        const comicId = await idResponse.text();
        const idParam = new URLSearchParams({id : comicId});
        const url = `https://fwd.innopolis.university/api/comic?${idParam.toString()}`;
        
        const comicResponse = await fetch(url);
        if (comicResponse.ok) {
            const data = await comicResponse.json();
            
            const comicContainer1 = document.getElementById("comic-container-line");

            const titleElement = document.createElement('h2');
            titleElement.textContent = `Title: ${data.safe_title}`; 
            comicContainer1.appendChild(titleElement);

            const dateElement = document.createElement('h2');
            dateElement.innerHTML = `Date: ${new Date(data.time).toLocaleDateString()}`;
            comicContainer1.appendChild(dateElement);

            const imgElement = document.createElement('img');
            imgElement.src = data.img;
            imgElement.alt = data.alt;
            comicContainer1.appendChild(imgElement);

            const comicContainer2 = document.getElementById("comic-container-block2");

            
            
        } else {
            alert("Error fetching comic: " + comicResponse.status);
        }
    } else {
        alert("Error finding ID: " + idResponse.status);
    }
})

