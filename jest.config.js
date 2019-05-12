module.exports = {
  "coverageReporters": [
    "json-summary",
    "lcov",
    "json",
    "text",
    "clover"
  ],
  "collectCoverage": true,
  "setupFilesAfterEnv": ["jest-extended", "jest-chain"],
  "roots": [
    "<rootDir>/dist"
  ],
}
