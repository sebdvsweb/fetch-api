/* 
ASYNC / AWAIT

Apparus en 2017, async et await sont très utilisés par les API modernes.

Nous allons pouvoir placer le mot clef async devant une déclaration de fonction (ou une expression de fonction, ou encore une fonction fléchée) pour la transformer en fonction asynchrone.
Utiliser le mot clef async devant une fonction va faire que la fonction en question va toujours retourner une promesse. Dans le cas où la fonction retourne explicitement une valeur qui n’est pas une promesse, alors cette valeur sera automatiquement enveloppée dans une promesse.
Les fonctions définies avec async vont donc toujours retourner une promesse qui sera résolue avec la valeur renvoyée par la fonction asynchrone ou qui sera rompue s’il y a une exception (erreur) non interceptée émise depuis la fonction asynchrone.

Le mot clef await est uniquement valide au sein de fonctions asynchrones définies avec async.
Ce mot clef permet d’interrompre l’exécution d’une fonction asynchrone tant qu’une promesse n’est pas résolue ou rejetée. La fonction asynchrone reprend ensuite puis renvoie la valeur de résolution.

TRY() / CATCH()

L'instruction try...catch regroupe des instructions à exécuter et définit une réponse si l'une de ces instructions provoque une exception/erreur.

Tout d’abord, le code dans try {...} est exécuté.
S’il n’y a pas eu d’erreur, alors catch(err) est ignoré : l’exécution arrive à la fin de try et continue en ignorant catch.
Si une erreur survient, alors l’exécution de try est arrêtée et le contrôle se place au début de catch(err). La variable err (qui peut utiliser n’importe quel nom) contient un objet d’erreur avec des détails sur ce qui s’est passé.

*/

// Récupérer les données des utilisateurs depuis l'API
const promise01 = fetch('https://jsonplaceholder.typicode.com/users/');

// Traiter la réponse de l'API
promise01.then(async (response) => {
    // Afficher la réponse de l'API dans la console
    console.log(response);

    try {
        // Convertir la réponse en JSON et stocker les données des utilisateurs
        const usersData = await response.json();
        // Afficher le deuxième utilisateur dans la console
        console.log(usersData[1]);

        // Extraire le nom et la ville du deuxième utilisateur
        const nom = usersData[1].name;
        const ville = usersData[1].address['city'];
        // Afficher le nom et la ville dans la console
        console.log(nom, ville);

        // Insérer le nom et la ville dans les éléments HTML
        document.querySelector('#userName').innerHTML = nom;
        document.querySelector('#city').innerHTML = ville;
    } catch (e) {
        // Afficher l'erreur dans la console en cas de problème
        console.log(e);
    }
});

/* Affiche tous les élements inclus dans une réponse then */
/* Statut HTTP 200 => https://developer.mozilla.org/fr/docs/Web/HTTP/Status */