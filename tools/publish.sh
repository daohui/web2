#!/bin/bash

publish() {
   msg=`git log --format="%H" -n1`
   git checkout gh-pages
   git rm *.css 
   git rm *.js 
   
   for name in `ls dist`; do
      cp dist/$name $name
      git add $name
   done
   cp index.html 404.html
   git add 404.html
   
   git commit -m $msg && git push --force && git checkout master
}

if npm run prod; then
   publish
fi
