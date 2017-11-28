module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jasmine": true,
    "jest": true,
    "node": true,
  },
  "extends": ["prettier", "eslint:recommended", "plugin:react/recommended"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
    "sourceType": "module",
  },
  "plugins": ["babel", "prettier", "react"],
  "rules": {
    "brace-style": ["error", "1tbs"],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": [
      "error",
      {
        "after": true,
        "before": false,
      },
    ],
    "comma-style": ["error", "last"],
    "complexity": "error",
    "sort-imports": [
      "error",
      {
        "ignoreCase": true,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
      },
    ],
    "strict": 0,
  },
};
