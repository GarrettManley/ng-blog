import { ShellHelper } from './shell-helper';

export class NgHelper {
	constructor() {}

	public createNewAngularApp(outDir: string) {
		ShellHelper.run(`cd ${outDir} && ng new test --skip-install --skip-git --minimal`);
	}
}
