export const envType = process.env.REACT_APP_ENV || process.env.NODE_ENV || 'development';

const config = {
  baseUrl: 'http://localhost:4000',
};

// eslint-disable-next-line default-case
switch (envType) {
  case 'production':
    config.baseUrl = 'some url';
}

// eslint-disable-next-line no-console
console.log('nodenev', process.env.NODE_ENV);
export const cover = {
  hardCover: 'hardCover',
  paperBack: 'paperBack',
};

export default config;
