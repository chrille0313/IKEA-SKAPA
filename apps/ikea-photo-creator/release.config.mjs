import sharedConfig from 'release-config';
import { name } from './package.json';

const config = {
  ...sharedConfig,
  tagFormat: `${name}@\${version}`
};

export default config;
