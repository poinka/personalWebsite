document.addEventListener('DOMContentLoaded', async () => {
    const email = 'p.korobeinikova@innopolis.university'; // Replace with actual email input method
    const urlParams = new URLSearchParams({ email });
    const comicIdUrl = `https://fwd.innopolis.university/api/hw2?${urlParams.toString()}`;

    const id = await fetch(comicIdUrl);
    if (id.ok) {
        const url = `https://fwd.innopolis.university/api/comic?id=${id.text}`;
        const data = await fetch(url);
        console.log(data);
    } else {
        alert("Error: " + id.status);
    }
})

