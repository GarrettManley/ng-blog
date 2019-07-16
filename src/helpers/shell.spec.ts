import { ShellHelper } from './shell';
import { assert } from 'chai';
import { existsSync } from 'fs';
import { TestHelpers } from './test';

describe('Shell Helper Tests', () => {
    describe('#run()', () => {
        it('should return the output of the command', () => {
            // arrange
            const shellHelper = new ShellHelper();

            // act
            const result = shellHelper.run("echo 'Hello World!'");

            // assert
            assert.equal(result, 'Hello World!\n');
        });
    });

    describe('mkDir()', () => {
        it('should create the specified directory', () => {
            // arrange
            const shellHelper = new ShellHelper();
            const dir = TestHelpers.dirRand();

            // act
            shellHelper.mkDir(dir);

            // assert
            assert.isTrue(existsSync(dir));

            // cleanup
            shellHelper.rmDir(dir);
        });
    });

    describe('#rmDir()', () => {
        it('should remove the specified directory', () => {
            // arrange
            const shellHelper = new ShellHelper();
            const dir = TestHelpers.dirRand();
            shellHelper.mkDir(dir);

            // act
            shellHelper.rmDir(dir);

            // assert
            assert.isNotTrue(existsSync(dir));
        });
    });
});
