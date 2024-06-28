import {formatDistanceToNowStrict} from 'date-fns/formatDistanceToNowStrict';

interface Comic {
    safe_title: string;
    img: string;
    alt: string;
    date: {year: number; month: number; day: number;}
}
interface ApiResponse {
    comic?: Comic;
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
                const data: ApiResponse = await comicResponse.json();
            
                const comicContainer: HTMLElement = document.getElementById("comic-container")!;

                const titleElement: HTMLElement = document.createElement('h2');
                titleElement.textContent = `Title: ${data.comic?.safe_title}`; 
                comicContainer.appendChild(titleElement);

                const imgElement: HTMLImageElement = document.createElement('img');
                imgElement.src = data.comic?.img!;
                imgElement.alt = data.comic?.alt!;
                comicContainer.appendChild(imgElement);

                const dateElement: HTMLElement = document.createElement('h2');
                const date = new Date(data.comic?.date.year!, data.comic?.date.month!-1, data.comic?.date.day);
            
                dateElement.textContent = `Date: ${date.toLocaleDateString()}`;
                comicContainer.appendChild(dateElement);

                const fromNowElement: HTMLElement = document.createElement('h2');
                fromNowElement.textContent = `Comic was released ${formatDistanceToNowStrict(date)} ago`;
            
            } else {
                alert("Error fetching comic: " + comicResponse.status);
            }
        } else {
            alert("Error finding ID: " + idResponse.status);
        }
    } catch (error) {
        console.error(error);
        alert("An unexpected error")
    }
})


