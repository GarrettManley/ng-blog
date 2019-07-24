import { NgHelper } from '../ng-helper';
import { ShellHelper } from '../shell-helper';

const ngHelper = new NgHelper();

describe('Angular Helper Tests', () => {
	beforeEach(() => {
		ShellHelper.rmDir('temp');
		ShellHelper.mkDir('temp');
	});

	afterEach(() => {
		ShellHelper.rmDir('temp');
	});

	describe('#createNewAngularApp()', () => {
		it('should create a minimal angular application in a temporary file', () => {
			ngHelper.createNewAngularApp('temp');
		}).timeout(5000);
	});
});
