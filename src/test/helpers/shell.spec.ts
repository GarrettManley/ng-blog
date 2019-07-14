import { ShellHelper } from '../../helpers/shell';
import { assert } from 'chai';

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
});
