# Authentification

Pour s'authentifier, l'utilisateur doit fournir son username dans le body d'un POST sur /login pour récupérer un token valide pendant 60 secondes.

Exemple :   
POST 'http://localhost:5000/login'  
headers 'Content-Type: application/json'  
body '{"username" : "bob"}'


L'utilisateur devra ajouter son token (header Authorization) dans toutes ses requêtes au serveur pour avoir accès à la base de données.