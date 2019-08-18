#!/usr/bin/env sh

echo 'removing all files but the dist file'

find . ! -name 'dist/**/*' -type f -exec rm -f {} +

echo $(ls -al)
