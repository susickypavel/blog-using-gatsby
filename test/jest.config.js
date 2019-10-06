const { defaults } = require("jest-config")

module.exports = {
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$",
  testPathIgnorePatterns: ["node_modules", ".cache", "public"],
  moduleNameMapper: {
    "@components(.*)$": "<rootDir>/src/components$1",
    "@css(.*)$": "<rootDir>/src/css$1",
    "@utils(.*)$": "<rootDir>/src/utils$1",
    "@services(.*)$": "<rootDir>/src/services$1",
    "@hooks(.*)$": "<rootDir>/src/hooks$1",
    "@static(.*)$": "<rootDir>/static$1"
  },
  globals: {
    __PATH_PREFIX__: ``
  },
  setupFiles: ["<rootDir>/test/loadershim.ts"]
}
