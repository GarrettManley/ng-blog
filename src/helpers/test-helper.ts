import uuid = require('uuid/v4');

/**
 * Helper methods to assist with unit test orchestration and development
 */
export class TestHelpers {
	/**
	 * returns a random directory name to generate test output in
	 */
	public static dirRand(): string {
		return `temp-${uuid()}`;
	}
}
