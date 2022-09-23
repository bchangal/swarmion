import { NormalizedSchema, PackageJson } from '../../types';

export const packageJson = (options: NormalizedSchema): PackageJson => ({
  name: `@${options.workspaceName}/${options.importPath}`,
  private: true,
  version: '1.0.0',
  license: 'UNLICENSED',
  scripts: {
    deploy: 'serverless deploy',
    'deploy-production': 'serverless deploy --stage production',
    'deploy-staging': 'serverless deploy --stage staging',
    deployedCommit: 'serverless deployedCommit',
    'lint-fix': 'pnpm linter-base-config --fix',
    'lint-fix-all': 'pnpm lint-fix .',
    'linter-base-config': 'eslint --ext=js,ts',
    remove: 'serverless remove',
    'remove-production': 'serverless remove --stage production',
    'remove-staging': 'serverless remove --stage staging',
    'sls-info': 'serverless info --verbose',
    test: 'pnpm test-linter && pnpm test-type && pnpm test-unit && pnpm test-circular',
    'test-circular': 'pnpm depcruise --validate .dependency-cruiser.js .',
    'test-linter': 'pnpm linter-base-config .',
    'test-type': 'tsc --noEmit',
    'test-unit': 'vitest run --coverage',
  },
  dependencies: {
    [`@${options.workspaceName}/serverless-configuration`]: 'workspace:^',
    '@swarmion/serverless-helpers': 'latest',
  },
  devDependencies: {
    [`@${options.workspaceName}/core-contracts`]: 'workspace:^',
    '@serverless/typescript': 'latest',
    '@types/node': 'latest',
    '@vitest/coverage-c8': 'latest',
    'dependency-cruiser': 'latest',
    esbuild: 'latest',
    eslint: 'latest',
    serverless: 'latest',
    'serverless-custom-iam-roles-per-function': 'latest',
    'serverless-esbuild': 'latest',
    'serverless-iam-roles-per-function': 'latest',
    'ts-node': 'latest',
    typescript: 'latest',
    'vite-tsconfig-paths': 'latest',
    vitest: 'latest',
  },
});
