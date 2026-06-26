export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'test',
        'docs',
        'refactor',
        'chore',
        'style',
        'perf',
        'ci',
        'build',
      ],
    ],
    'scope-enum': [
      2,
      'always',
      [
        // Dominios
        'ui',
        'tokens',
        'styles',
        'ci',
        'config',
        'deps',
        // Componentes
        'button',
        'spinner',
        'input',
        'label',
        'card',
        'badge',
        'avatar',
        'switch',
      ],
    ],
    'scope-empty': [2, 'never'],
    'subject-case': [0],
    'subject-min-length': [2, 'always', 5],
    'header-max-length': [2, 'always', 100],
  },
};
