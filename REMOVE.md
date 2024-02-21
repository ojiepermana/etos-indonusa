


git submodule deinit code/indonusa/angular/mfe/auth
git rm  code/indonusa/angular/mfe/auth
git rm --cached  code/indonusa/angular/mfe/auth
git commit -m "Remove submodule"
git add .gitmodules
git commit -m "Remove submodule configuration"
rm -rf .git/modules/code/indonusa/angular/mfe/auth


