/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  modulePaths: ["<rootDir>/src/"],
  moduleFileExtensions: ["ts", "js"],
};