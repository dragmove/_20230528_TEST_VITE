/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",

  /**
   * @see https://kulshekhar.github.io/ts-jest/docs/getting-started/paths-mapping/
   */
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@mocks/(.*)$": "<rootDir>/src/mocks/$1",
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
};
