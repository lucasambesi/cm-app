const MODE = {
  OFF: "off",
  WARN: "warn",
  ERROR: "error",
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "google"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": [
      MODE.ERROR,
      process.platform === "win32" ? "windows" : "unix",
    ],
    "react/react-in-jsx-scope": MODE.OFF,
    "require-jsdoc": MODE.OFF,
    "no-unused-vars": MODE.OFF,
    semi: [2, "never"],
  },
};
