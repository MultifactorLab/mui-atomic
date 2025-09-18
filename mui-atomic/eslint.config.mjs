import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { importX } from 'eslint-plugin-import-x';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig, globalIgnores } from 'eslint/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([
  globalIgnores(['dist/**/*.js']),
  {
    files: ['**/*.ts'],

    plugins: {
      '@typescript-eslint': typescriptEslint,
      'import-x': importX
    },

    extends: fixupConfigRules(
      compat.extends('plugin:@angular-eslint/recommended', 'plugin:@angular-eslint/template/process-inline-templates')
    ),

    settings: {
      'import-x/resolver': {
        typescript: {
          project: './tsconfig.json'
        }
      }
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module'
    },

    rules: {
      'comma-dangle': ['error', 'only-multiline'],
      '@angular-eslint/no-output-on-prefix': 'off',
      '@angular-eslint/no-input-rename': 'off',
      '@angular-eslint/no-output-rename': 'off',
      '@angular-eslint/no-output-native': 'off',
      'lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true
        }
      ],

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE']
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase']
        },
        {
          selector: 'typeLike',
          format: ['PascalCase']
        }
      ],

      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowTernary: true
        }
      ],
      'import-x/no-dynamic-require': 'warn',
      'arrow-parens': ['error', 'as-needed']
    }
  },
  {
    files: ['**/*.html'],
    extends: fixupConfigRules(compat.extends('plugin:@angular-eslint/template/recommended')),
    rules: {}
  },
  eslintPluginPrettierRecommended
]);
