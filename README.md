# KRONATRIX Home Services — FLAT GitHub Upload Package

Prepared: 19 August 2026
Target repository: homeservices-kronatrix/home-services-kronatrix
Target domain: https://homeservices.kronatrix.co.uk/

## Upload method

All production files in this folder are deliberately FLAT: there are no subfolders.
Select every file in this folder and upload them together to the ROOT of the GitHub repository.

Do NOT upload the ZIP itself to GitHub. Extract it first, then upload all files inside the folder.

## Why the clean URLs still work

The content pages are flat source files, but each HTML file contains Jekyll `permalink` front matter. GitHub Pages builds the intended public paths, including:

- /custom-swimming-pools/
- /custom-swimming-pools/cost/
- /custom-swimming-pools/pool-types/
- /custom-swimming-pools/construction-installation/
- /custom-swimming-pools/planning-permission/
- /custom-swimming-pools/pool-business-visibility/
- /case-studies/hardinge-road-l19/
- /about/
- /contact/
- /privacy/

This preserves the agreed KRONATRIX → Home Services → Custom Swimming Pools architecture while allowing one flat upload.

## Important

Do not add a `.nojekyll` file. GitHub Pages/Jekyll must process the permalink front matter.
The CNAME file is already set to `homeservices.kronatrix.co.uk`.
No Google Analytics tag has been added yet, because measurement/privacy configuration is still to be verified.
