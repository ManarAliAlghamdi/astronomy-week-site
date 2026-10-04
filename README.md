# أسبوع الفلك

The QR code website for our astronomy week.

## Files
- `index.html`: the main page with all stations. Edit the `STATIONS` list at the top to change any text.
- `sounds/`: the space sounds page (black holes station).
- `qr.html`: makes the QR codes automatically. Open it from the live site, then print.
- `images/`: put station photos here (optional), then add `image: "images/name.jpg"` to that station.

## Publish on GitHub Pages
1. Create a new public repository and upload everything in this folder (keep the folder structure).
2. Go to Settings > Pages, set Source to "Deploy from a branch", branch `main`, folder `/ (root)`, then Save.
3. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.
4. Open `https://<your-username>.github.io/<repo-name>/qr.html` and print the codes.

Any change you push to GitHub updates the site within a minute or two. The QR codes never need to change.
