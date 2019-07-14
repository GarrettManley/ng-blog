import { execSync } from 'child_process';

export class ShellHelper {
    constructor() {}

    public run(cmd: string): string {
        return execSync(cmd, { encoding: 'utf-8' });
    }
}
