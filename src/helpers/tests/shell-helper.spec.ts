import { ShellHelper } from '../shell-helper';
import { assert } from 'chai';
import { existsSync } from 'fs';
import { TestHelpers } from '../test-helper';

describe('Shell Helper Tests', () => {
	describe('run()', () => {
		it('should return the output of the command', () => {
			// act
			const result = ShellHelper.run("echo 'Hello World!'");
			// assert
			assert.equal(result, 'Hello World!\n');
		});
	});

	describe('mkDir()', () => {
		it('should create the specified directory', async () => {
			// arrange
			const dir = TestHelpers.dirRand();
			// act
			ShellHelper.mkDir(dir);
			// assert
			assert.isTrue(existsSync(dir));
			// cleanup
			await ShellHelper.rmDir(dir);
		});
	});

	describe('rmDir()', () => {
		it('should remove the specified directory', async () => {
			// arrange
			const dir = TestHelpers.dirRand();
			ShellHelper.mkDir(dir);
			// act
			await ShellHelper.rmDir(dir);
			// assert
			assert.isNotTrue(existsSync(dir));
		});

		it('should not fail when the dir does not exist', async () => {
			// arrange
			const dir = TestHelpers.dirRand();
			// act
			await ShellHelper.rmDir(dir);
			// assert
			assert.isNotTrue(existsSync(dir));
		});

		it('should not fail when the directory is not empty', async () => {
			// arrange
			const dir = TestHelpers.dirRand();
			ShellHelper.mkDir(dir);
			ShellHelper.run(`touch ${dir}/test.txt`);

			// act
			await ShellHelper.rmDir(dir);
			// assert
			assert.isNotTrue(existsSync(dir));
		});
	});
});
