
## Frontend Flutter website
git submodule deinit code/clients/anggular/full/website
git rm code/clients/anggular/full/website
git rm --cached code/clients/anggular/full/website
git commit -m "Remove submodule"
git add .gitmodules
git commit -m "Remove submodule configuration"
rm -rf .git/modules/code/clients/anggular/full/website

## Frontend Flutter host
git submodule deinit code/clients/anggular/host
git rm code/clients/anggular/host
git rm --cached code/clients/anggular/host
git commit -m "Remove submodule"
git add .gitmodules
git commit -m "Remove submodule configuration"
rm -rf .git/modules/code/clients/anggular/host

## Frontend Flutter sales
git submodule deinit code/clients/anggular/host
git rm code/clients/anggular/host
git rm --cached code/clients/anggular/host
git commit -m "Remove submodule"
git add .gitmodules
git commit -m "Remove submodule configuration"
rm -rf .git/modules/code/clients/anggular/host


git submodule deinit code/clients/anggular/site/sales
git rm code/clients/anggular/site/sales
git rm --cached code/clients/anggular/site/sales
git commit -m "Remove submodule"
git add .gitmodules
git commit -m "Remove submodule configuration"
rm -rf .git/modules/code/clients/anggular/site/sales