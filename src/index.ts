import {formatDistanceToNowStrict} from 'date-fns/formatDistanceToNowStrict';

interface Comic {
    safe_title: string;
    img: string;
    alt: string;
    year: number; 
    month: number; 
    day: number;
}

document.addEventListener('DOMContentLoaded', async () => {
    const email: string = 'p.korobeinikova@innopolis.university'; 
    const emailParam: URLSearchParams = new URLSearchParams({email : email});
    const urlId: string = `https://fwd.innopolis.university/api/hw2?${emailParam.toString()}`;
    
    try {
        const idResponse: Response = await fetch(urlId);

        if (idResponse.ok) {
            const comicId: string = await idResponse.text();
            const idParam: URLSearchParams = new URLSearchParams({id : comicId});
            const url: string = `https://fwd.innopolis.university/api/comic?${idParam.toString()}`;

            const comicResponse: Response = await fetch(url);
            if (comicResponse.ok) {
                const data: Comic = await comicResponse.json();
                
                const comicContainer = document.getElementById("comic-container") as HTMLElement;

                const titleElement: HTMLElement = document.createElement('h2');
                titleElement.textContent = `Title: ${data.safe_title}`; 
                comicContainer.appendChild(titleElement);

                const imgElement: HTMLImageElement = document.createElement('img');
                imgElement.src = data.img;
                imgElement.alt = data.alt;
                comicContainer.appendChild(imgElement);

                const dateElement: HTMLElement = document.createElement('h2');
                const date: Date = new Date(data.year, data.month-1, data.day);

                dateElement.textContent = `Date: ${date.toLocaleDateString()}`;
                comicContainer.appendChild(dateElement);

                const fromNowElement: HTMLElement = document.createElement('h2');
                fromNowElement.textContent = `Comic was released ${formatDistanceToNowStrict(date)} ago`;
                comicContainer.appendChild(fromNowElement);
            
            } else {
                alert("Error fetching comic: " + comicResponse.status);
            }
        } else {
            alert("Error finding ID: " + idResponse.status);
        }
    } catch (error) {
        //console.error(error);
        alert("An unexpected error")
    }
})


