import * as c from 'colors';
import { Shell } from './shell';

export function test() {
    console.log(c.green('Running Test...\n'));

    // Arrange
    console.log(c.yellow('removing existing test environment...'));
    shell('rm -rf ./temp');
    console.log(c.yellow('creating new test environment...'));
    shell('mkdir ./temp');

    // Act
    console.log(c.yellow('creating new angular application...'));

    shell('cd ./temp && ng new test --skip-install --skip-git --minimal');

    // Assert
}

export function shell(cmd: string) {
    const shell = new Shell();
    shell.run(cmd);
}
