#!/bin/bash

publish() {
   msg=`git log --format="%H" -n1`
   git rm *.css 
   git rm *.js 
   
   for name in `ls dist`; do
      cp dist/$name $name
      git add $name
   done
   cp index.html 404.html
   git add 404.html
   
   diff=`git diff --name-only --cached`
   if [ ! -z "$diff" ]; then
      git commit -m $msg && git push --force 
   else
       echo "NO change!!!"
   fi
}

if npm run prod && git checkout gh-pages; then
   publish && git checkout master
fi
