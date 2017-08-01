# Web2

## Initial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0:

```shell
ng new web2
cd web2
```

Build and verify the initial setup:
```shell
ng serve --port=4201
```

Save yarn config: _yarn_lock.json_

Create product distribution:
```shell
ng build --prod -aot=false
```

Push initial product to github, and then create _gh-pages_ branch

```shell
git checkout -b --orphan ph-pages
git rm --cached -r .
rm -f *
rm -rf src e2e
mv dist/* .
```

Update the _href_ in the _base_ element in _index.html_ needs to be updated, create elements, which were moved from _dist_ folder (TODO: create script to extract files used by _index.html_), and push to _github_:

```shell
git push --set-upstream origin gh-pages
---

## Development

Switch to _master_ branch.

```
yarn add @angular/material
yarn add @angular/router
```

Merge NAV code and provide handle to navigate out to an external site.

Note: use _yarn_ (instead of _npm_) to handle node modules

### Create Github pages
TODO (automate the following manual steps):

1. ```npm run prod```
2. ```git checkout gh-pages```
3. remove all _js_, _css_ files, deference the deleted files (using _git rm <file>_ command), 
4. copy all the files from _dist_ directory to the main directory and add the files in the main directory to the git
5. copy index.html to 404.html (for Github redirect, see first issue)
5. commit and push to github

### Issues

1. refresh as well as typing in url lead to 404. This is because the url is handled at the client side, while refresh or typing in url asks server for the page, and that leads to 404; the workaround is creating a 404.html page (step 5) for GitHub. In tomcat server that hosts this app, one needs to configurate 404 page; see http://jasonwatmore.com/post/2016/07/26/angularjs-enable-html5-mode-page-refresh-without-404-errors-in-nodejs-and-iis? and http://davidghedini.blogspot.com/2010/10/tomcat-custom-404-page.html