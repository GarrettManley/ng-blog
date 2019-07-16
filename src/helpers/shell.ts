import { execSync } from 'child_process';

export class ShellHelper {
    platform: NodeJS.Platform = process.platform;

    constructor() {}

    /**
     * ## Run Shell Command
     * executes a command in the local node environment
     * @param cmd The command to be run by the node child process
     */
    public run(cmd: string): string {
        return execSync(cmd, { encoding: 'utf-8' });
    }

    /**
     * Creates a directory in the file system
     * @param dirPath The path of the directory to be created
     */
    public mkDir(dirPath: string) {
        // It appears that this command will work on most platforms
        // TODO:: Test Windows
        const cmd: string = `mkdir ${dirPath}`;
        this.run(cmd);
    }

    /**
     * ## Remove Directory
     * Removes a directory from a file system.
     * @param dirPath The path of the directory you want to remove
     */
    public rmDir(dirPath: string) {
        // TODO:: Test Windows
        const cmdWindows: string = `rmdir /s ${dirPath}`;
        const cmdUnix: string = `rm -rf ${dirPath}`;

        this.runXP(cmdWindows, cmdUnix);
    }

    /**
     * ## Run Cross Platform
     * Checks for the OS platform of the execution environment and runs
     * the appropriate command
     * @param cmdWindows The command on a windows environment
     * @param cmdUnix The command on a unix environment
     */
    private runXP(cmdWindows: string, cmdUnix: string): string {
        if (this.isWindows()) {
            return this.run(cmdWindows);
        } else {
            return this.run(cmdUnix);
        }
    }

    /**
     * Checks to see if the Node environment is running on a Windows machine
     */
    private isWindows(): boolean {
        const windows = 'win32';
        return this.platform === windows;
    }
}
