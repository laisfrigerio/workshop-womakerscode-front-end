const dogList = [
    {
        name: "Caramelo",
        description:
            "Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.",
        image: "fingerprint.png",
        imageAlt: "Imagem de um cachorro da raça Caramelo no Brasil",
    },
    {
        name: "Pug",
        description:
            "Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.",
        image: "fingerprint.png",
        imageAlt: "Imagem de um cachorro da raça Pug",
    },
    {
        name: "Dachshund",
        description:
            "Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.",
        image: "fingerprint.png",
        imageAlt: "Imagem de um cachorro da raça Dachshund",
    }, 
    {
        name: "Golden Retriever",
        description:
            "Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.",
        image: "fingerprint.png",
        imageAlt: "Imagem de um cachorro da raça Golden Retriever",
    }
];

const dogListElement = document.querySelector("#dog-list");
const dogSearchInput = document.querySelector("#dog-search");

function renderDogList(elementList) {
    dogListElement.innerHTML = ``;

    elementList.forEach(function (dog) {
        const dogName = dog.name;
        const dogDescription = dog.description;
        const dogImage = dog.image;
        const dogImageAlt = dog.imageAlt;

        const dogItemHtml = `
            <li class="dog-item">
                <img src="${dogImage}" alt="${dogImageAlt}" />
                <h2>${dogName}</h2>
                <p>
                    ${dogDescription}
                </p>
            </li>
        `;

        dogListElement.innerHTML = dogListElement.innerHTML + dogItemHtml;
    });
}

dogSearchInput.addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase();

    const dogListFiltered = dogList.filter(function (dog) {
        return dog.name.toLowerCase().includes(searchTerm);
    });

    renderDogList(dogListFiltered);
});

renderDogList(dogList);
