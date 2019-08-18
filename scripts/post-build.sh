#!/usr/bin/env sh

npm version patch -m "[skip ci] %s"
# add gitup deploy key to the SSH agent
eval $(ssh-agent -s)
ssh-agent $(ssh-add .travis/github_deploy_key)

# Push the version patch to the head of develop so that this changes is reflected
VERSION_HASH=$(git rev-parse HEAD)
git push origin ${VERSION_HASH}:develop --follow-tags

exit 0
