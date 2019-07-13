import {  } from 'npm';
import * as exec from 'child_process';

export function run() {
    series([exec('npm run test')]);
}
