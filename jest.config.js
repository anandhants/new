module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
    modulePathIgnorePatterns: ["node_modules", "jest-test-results.json"],
    transform: {
      "\\.[jt]sx?$": "babel-jest"
    },
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
}