import sharedConfig from 'release-config';
import packageInfo from './package.json' with { type: 'json' };

const config = {
  ...sharedConfig,
  tagFormat: `${packageInfo.name}@\${version}`
};

export default config;
