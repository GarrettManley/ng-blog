#!/usr/bin/env sh

rm -rf out
tsc
npm version patch

# Push the version patch to the head of develop so that this changes is reflected
VERSION_HASH=$(git rev-parse HEAD)
git push origin $VERSION_HASH:develop
