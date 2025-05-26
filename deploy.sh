#RUN BY TYPYING ./deploy.sh
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build
# THIS WORKS -> npm run build -- --mode development

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'www.michele-castelli.com' > CNAME

git init
git add -A
git commit -m 'test: adding video'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:tetecruzc/Michele-castelli.git master:gh-pages
# THIS WORKS git push -f origin master:gh-pages

cd -

# agregar a rama gh-pages un archivo 404.html con el contenido de index