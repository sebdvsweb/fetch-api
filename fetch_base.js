/* Utilisation de la méthode then pour obtenir la réponse de la variable incluant la promesse  */
/* la promesse renvoie une donnée que l'on va récupérer avec la méthode get et qu'on va envoyer dans l'argument response */

/* Création d'une variable de type objet qui envoie une requête pour récupérer les données des utilisateurs */
const promise01 = fetch("https://jsonplaceholder.typicode.com/users/");

console.log(promise01);

// Convertit la réponse en objet JSON
promise01.then((response) => {
  // Affichage de la promesse */
  console.log(response);

  /* Création d'une promesse qui récupère les users dans un tableau (Array) format json */
  const utilisateurs = response.json();

  /* Affichage du tableau */
  console.log(utilisateurs);

  /* Création d'une fonction avec argument pour pouvoir récupérer des ifos précises dans le tableau */

  utilisateurs.then((utilisateur) => {
    console.log(utilisateur[1]); // récupération de l'utilisateur 2
    console.log(utilisateur[1].email); // récupération de la key 'email' de l'utilisateur 2
    console.log(utilisateur[1].address); // récupération de l'adresse qui s'avère être un autre tableau
    console.log(utilisateur[1].address["city"]); // récupération d'un élement du sous-tableau adresse

    /* Création de variables pour l'affichage HTML */
    const nom = utilisateur[1].name;
    const ville = utilisateur[1].address["city"];

    /* Vérification */
    //console.log(nom, ville);

    /* Remplissage des champs avec les données du tableau */
    document.querySelector("#userName").innerHTML = nom;
    document.querySelector("#city").innerHTML = ville;
  });
});

promise01.catch((erreur) => {
  console.log(erreur);
});

/* Sinon erreur : on utilise la méthode catch avec une fonction fléchée de callback avec en argument erreur */

/* Affiche tous les élements inclus dans une réponse then */
/* Statut HTTP 200 => https://developer.mozilla.org/fr/docs/Web/HTTP/Status */
