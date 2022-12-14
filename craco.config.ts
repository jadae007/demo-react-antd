const CracoLessPlugin = require('craco-less');

const craco  = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              // '@primary-color': '#1DA57A'
             },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

export default craco;