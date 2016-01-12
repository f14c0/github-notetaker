var axios = require('axios');


var getGithubUserInfo = function (username) {
  return axios.get('https://api.github.com/users/'+ username);
};

var getGithubUserRepos = function (username) {
  return axios.get('https://api.github.com/users/' + username +'/repos');
};

var helpers = {
  getGithubInfo:function (username) {
    return axios.all([getGithubUserRepos(username),getGithubUserInfo(username)])
    .then(function (arr) {
        return {
          repos : arr [0].data,
          githubInfo : arr [1].data,
        };
    });
  }

};

module.exports = helpers;
