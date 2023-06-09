// Récupération des données depuis le fichier JSON
const reponse = await fetch('data/moovies.json');
const movies = await reponse.json();    // transforme les données json en object javascript
// Peut aussi s'écrire :
// const movies = await fetch('data/moovies.json').then(movies => moovies.json());

function generateSections(movies){     // function qui génère toute la page web
    for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        const article = document.createElement("article");
        const b_Image_Text = document.createElement("div");
        b_Image_Text.classList.add("b_Image_Text");
        const b_Image = document.createElement("div");
        b_Image.classList.add("b_Image");
        const b_Text = document.createElement("div");
        b_Text.classList.add("b_Text");
        const b_Notation = document.createElement("div");
        b_Notation.classList.add("b_Notation");
        const b_Not1 = document.createElement("div");
        b_Not1.classList.add("b_Not1");
        b_Not1.innerText = "Notation:";
        const b_Not2 = document.createElement("div");
        b_Not2.classList.add("b_Not2");
        b_Not2.innerText = movie.Metascore;
        const b_Not3 = document.createElement("div");
        b_Not3.classList.add("b_Not3");
        b_Not3.innerText = movie.imdbRating;
        const imageElement = document.createElement("img");
        imageElement.src = movie.Images[0];
        const titleElement = document.createElement("h2");
        titleElement.innerText = movie.Title;
        const plotElement = document.createElement("p");
        plotElement.innerText = movie.Plot;

        // Récupération de l'élément du DOM qui accueillera les fiches
        const section = document.querySelector("section");
        // Relier les balises crées au parent
        section.appendChild(article);
        article.appendChild(b_Image_Text);
        b_Image_Text.appendChild(b_Image);
        b_Image_Text.appendChild(b_Text);
        b_Image.appendChild(imageElement);
        b_Text.appendChild(titleElement);
        b_Text.appendChild(plotElement);
        b_Text.appendChild(b_Notation);
        b_Notation.appendChild(b_Not1);
        b_Notation.appendChild(b_Not2);
        b_Notation.appendChild(b_Not3);
    }
}
generateSections(movies);

/*function defilerImage() {
    for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        for (let j = 0; j < movie.Images.length; j++) {
            imageElement.src = movie.Images[j];
        }
    }
}
setInterval(defilerImage, 2000);*/