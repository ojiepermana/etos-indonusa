
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

git submodule deinit code/services/laravel/indonusa/auth
git rm code/services/laravel/indonusa/auth
git rm --cached code/services/laravel/indonusa/auth
git commit -m "Remove submodule"
git add .gitmodules
git commit -m "Remove submodule configuration"
rm -rf .git/modules/code/services/laravel/indonusa/auth




git submodule deinit code/indonusa/angular/app/managemen
git rm  code/indonusa/angular/app/managemen
git rm --cached  code/indonusa/angular/app/managemen
git commit -m "Remove submodule"
git add .gitmodules
git commit -m "Remove submodule configuration"
rm -rf .git/modules/code/indonusa/angular/app/managemen


