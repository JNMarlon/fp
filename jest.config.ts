/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
