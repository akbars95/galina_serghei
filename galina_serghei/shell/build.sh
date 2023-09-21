#!/bin/bash

cd ..
rm -rfv ../docs
#ng build --output-path for_publish
ng build --output-path ../docs --base-href ./galina_serghei
cd shell
