#!/bin/bash

ng build --prod --base-href "https://settis.github.io/ngCourseWork/"
cp dist/index.html dist/404.html
angular-cli-ghpages --name="None" --email="None"
