const { defaults } = require('jest-config');

module.exports = {
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx'],
  setupFiles: [
    "<rootDir>/setup/setupEnzyme.js"
  ],

  testPathIgnorePatters: [
    "<rootDir>/__tests__/setup/"
  ],

  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" 
  ],

  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }
}

