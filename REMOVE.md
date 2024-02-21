


git submodule deinit code/services/laravel/indonusa/auth
git rm  code/services/laravel/indonusa/auth
git rm --cached  code/services/laravel/indonusa/auth
git commit -m "Remove submodule"
git add .gitmodules
git commit -m "Remove submodule configuration"
rm -rf .git/modules/code/services/laravel/indonusa/auth


