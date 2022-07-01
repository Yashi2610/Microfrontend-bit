import { ReactAppOptions } from '@teambit/react';

import {
  Netlify,
  NetlifyOptions,
} from '@teambit/cloud-providers.deployers.netlify';

const netlifyConfig: NetlifyOptions = {
  team: 'teambit',

  accessToken: process.env.NETLIFY_AUTH_TOKEN as string,

  siteName: 'bit-book-store',
};

export const netlify = new Netlify(netlifyConfig);

export const BookStoreApp: ReactAppOptions = {
  name: 'book-store',

  entry: [require.resolve('./book-store.app-root')],

  prerender: {
    routes: ['/'],
  },

  // prerenderRoutes: ['/products', '/cart']

  deploy: netlify.deploy.bind(netlify),
};

export default BookStoreApp;
