#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'www.michele-castelli.com' > CNAME

git init
git add -A
git commit -m 'Cambiar texto en italiano: Dizionario essenziale'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:tetecruzc/Michele-castelli.git master:gh-pages

cd -