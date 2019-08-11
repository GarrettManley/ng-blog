#!/usr/bin/env sh

openssl aes-256-cbc -K $encrypted_356fe8876b45_key -iv $encrypted_356fe8876b45_iv -in .travis/github_deploy_key.enc -out github_deploy_key -d

git remote set-url --push origin git@github.com:GarrettManley/ng-blog.git

git remote

exit 562
