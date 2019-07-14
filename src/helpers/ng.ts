import { ShellHelper } from './shell';

export class NgHelper {
    private _shellHelper: ShellHelper;

    constructor() {
        this._shellHelper = new ShellHelper();
    }

    public createNewAngularApp(outDir: string) {
        this._shellHelper.run(`cd ${outDir} && ng new test --skip-install --skip-git --minimal`);
    }
}
