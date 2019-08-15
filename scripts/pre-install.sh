#!/usr/bin/env sh

openssl aes-256-cbc \
	-K $encrypted_356fe8876b45_key \
	-iv $encrypted_356fe8876b45_iv \
	-in .travis/github_deploy_key.enc \
	-out .travis/github_deploy_key -d

sudo chmod 600 .travis/github_deploy_key

git remote set-url origin git@github.com:GarrettManley/ng-blog.git
git remote set-url --push origin git@github.com:GarrettManley/ng-blog.git

npm test
