# Routes

Les routes pour accéder à la collection "companies" et  "products" sont décrites dans le dossier "routes".  
Les codes d'erreur qui seront renvoyés sont 400, 403, 404, 500.  
Les codes de succès qui seront renvoyés sont 200, 201.

### Create

Pour créer une companie, l'utilisateur doit faire un POST sur /companies et fournir les informations de la companie dans le body au format JSON. Le header content-type doit être renseigné.  
Pour créer un produit, le fonctionnement est le même mais l'URI est /products et le format des données est différent.  
Dans les deux cas, il faut au moins qu'un des champs ne soit pas nul pour que la création fonctionne.  

### Read

Pour récupérer toutes les commpanies et les produits associés, l'utilisateur peut faire un GET sur /companies.  
Pour touver une companie dont le symbole est MMM par exmeple, l'utilisateur peut faire un GET sur /companies/MMM.  
Pour récupérer tous les produits, l'utilisateur peut faire un GET sur /products.  
Pour touver un produit dont le nom est plastique par exmeple, l'utilisateur peut faire un GET sur /products/plastique.

### Update

Pour mettre à jour une companie dont le symbole est MMM, l'utilisateur peut faire un PATCH sur /companies/MMM avec les nouvelles informations de la companie dans le body au format JSON.

Pour mettre à jour un produit dont le nom est plastique, l'utilisateur peut faire un PATCH sur /products/plastique avec les nouvelles informations du produit dans le body au format JSON.

### Delete

Pour supprimer une companie dont le symbole est MMM, l'utilisateur peut faire un DELETE sur /companies/MMM.  
Pour supprimer un produit dont le nom est plastique, l'utilisateur peut faire un DELETE sur /products/plastique.
