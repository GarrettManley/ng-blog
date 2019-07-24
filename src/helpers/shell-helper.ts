import { execSync } from 'child_process';
import { mkdirSync, existsSync, rmdirSync } from 'fs';
import * as del from 'del';

export class ShellHelper {
	platform: NodeJS.Platform = process.platform;

	constructor() {}

	/**
	 * ## Run Shell Command
	 * executes a command in the local node environment
	 * @param cmd The command to be run by the node child process
	 */
	public static run(cmd: string): string {
		return execSync(cmd, { encoding: 'utf-8' });
	}

	/**
	 * ## Make Directory
	 * Creates a directory in the file system
	 * @param dirPath The path of the directory to be created
	 */
	public static mkDir(dirPath: string) {
		if (!existsSync(dirPath)) {
			mkdirSync(dirPath);
		}
	}

	/**
	 * ## Remove Directory
	 * Removes a directory from a file system.
	 * @param dirPath The path of the directory you want to remove
	 */
	public static async rmDir(dirPath: string) {
		if (existsSync(dirPath)) {
			// rmdirSync(dirPath);
			await del(dirPath);
		}
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
			return ShellHelper.run(cmdWindows);
		} else {
			return ShellHelper.run(cmdUnix);
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
