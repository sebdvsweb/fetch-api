const promise01 = fetch("https://jsonplaceholder.typicode.com/photos/");

// Traiter la réponse de l'API
promise01.then(async (response) => {
  // Afficher la réponse de l'API dans la console
  console.log(response);

  /* try {
    // Convertir la réponse en JSON et stocker les données des utilisateurs
    const usersData = await response.json();
    // Afficher le deuxième utilisateur dans la console
    console.log(usersData[1]);

    // Extraire le nom et la ville du deuxième utilisateur
    const nom = usersData[1].name;
    const ville = usersData[1].address["city"];
    // Afficher le nom et la ville dans la console
    console.log(nom, ville);

    // Insérer le nom et la ville dans les éléments HTML
    document.querySelector("#userName").innerHTML = nom;
    document.querySelector("#city").innerHTML = ville;
  } catch (e) {
    // Afficher l'erreur dans la console en cas de problème
    console.log(e);
  }
*/

  try {
    // Convertir la réponse en JSON et stocker les données des utilisateurs
    const photosData = await response.json();
    // Afficher le deuxième utilisateur dans la console

    photosData.slice(9, 15).forEach((obj) => {
      //photosData.slice(0, 5).forEach((obj) => {
      //console.log(photosData[1]);

      // Extraire le nom et la ville du deuxième utilisateur
      const titre = obj.title;
      const vignette = obj.thumbnailUrl;
      const id = obj.id;
      // Afficher le nom et la ville dans la console
      console.log(titre, vignette);

      // Insérer le nom et la ville dans les éléments HTML
      //document.querySelector("#monTitre").innerHTML = titre;
      //document.querySelector("#monImage").setAttribute("src", vignette);

      let div = document.querySelector("div");
      const monImage = document.createElement("img");
      const monTitre = document.createElement("p");
      const monID = document.createElement("h5");

      monImage.setAttribute("src", vignette);
      monTitre.textContent = titre;
      monID.textContent = id;

      div.appendChild(monTitre);
      div.appendChild(monID);
      div.appendChild(monImage);
    });
  } catch (e) {
    // Afficher l'erreur dans la console en cas de problème
    console.log(e);
  }
});
