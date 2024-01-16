
## Frontend Flutter website
git submodule deinit code/clients/anggular/ssr/website
git rm code/clients/anggular/ssr/website
git rm --cached code/clients/anggular/ssr/website
git commit -m "Remove submodule"
git add .gitmodules
git commit -m "Remove submodule configuration"
rm -rf .git/modules/code/clients/anggular/ssr/website

## Frontend Flutter host
git submodule deinit code/clients/anggular/host
git rm code/clients/anggular/host
git rm --cached code/clients/anggular/host
git commit -m "Remove submodule"
git add .gitmodules
git commit -m "Remove submodule configuration"
rm -rf .git/modules/code/clients/anggular/host

## Frontend Flutter sales

git submodule deinit code/indonusa/angular/app/master
git rm code/indonusa/angular/app/master
git rm --cached code/indonusa/angular/app/master
git commit -m "Remove submodule"
git add .gitmodules
git commit -m "Remove submodule configuration"
rm -rf .git/modules/code/indonusa/angular/app/master




git submodule deinit code/indonusa/angular/app/management
git rm  code/indonusa/angular/app/management
git rm --cached  code/indonusa/angular/app/management
git commit -m "Remove submodule"
git add .gitmodules
git commit -m "Remove submodule configuration"
rm -rf .git/modules/code/indonusa/angular/app/management


