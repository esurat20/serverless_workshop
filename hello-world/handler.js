'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: '[TEST TEST TEST] First serverless func'
      },
      null,
      2
    ),
  };
};
