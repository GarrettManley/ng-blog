import { execSync } from 'child_process';

export class Shell {
    constructor() {}

    public run(cmd: string) {
        console.log(execSync(cmd, { encoding: 'utf-8' }));
    }
}
