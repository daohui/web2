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

Introduce three UI components: header, side, body:

```
ng generate component -is ( header | side | body)
```

