import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://yoga.myfox.cz/test/',
  documents: ['src/**/*.tsx'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
    './src/__generated__/types.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
  ignoreNoDocuments: true,
}

export default config
