# Base de données

La base de donnée contient deux collections :
* `companies` - Contient des informations sur des entreprises, la clé primaire est le symbole de l'entreprise.
* `products` - Contient des information sur des produits, la clé primaire est le nom du produit.

Les fichiers companies et products du dossier "db" contient des exemples de données présentes dans les deux collections.  
Le lien entre les deux collections est fait avec le champ "symbol" dans companies et "company_symbol" dans products.