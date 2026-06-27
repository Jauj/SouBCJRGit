# Images du site Socialisme ou Barbarie

## Couvertures des bulletins

Placer ici les images de couverture pour les bulletins PDF :
- `couverture-n1.jpg` - Couverture du bulletin N°1
- `couverture-n2.jpg` - Couverture du bulletin N°2  
- `couverture-n3.jpg` - Couverture du bulletin N°3

**Format recommandé** :
- Ratio : 3:4 (portrait)
- Taille : environ 600x800px
- Format : JPG ou PNG
- Poids : < 500 Ko par image

## Autres images

- `logo-cjr.jpg` - Logo du CJR (déjà présent)

## Liens Google Drive

Pour héberger les PDFs sur Google Drive et obtenir des liens directs :

1. Uploader vos PDFs sur Google Drive
2. Cliquez droit sur le fichier > "Partager" > "Générer un lien"
3. Sélectionnez "Toute personne possédant le lien peut visualiser"
4. Copiez le lien et remplacez dans `src/lib/data.js` les valeurs `lienGoogleDrive`

Exemple de lien Google Drive :
```
https://drive.google.com/file/d/ID_DU_FICHIER/view?usp=drive_link
```

Après avoir ajouté les images et mis à jour les liens, faites un nouveau build et déployez.
