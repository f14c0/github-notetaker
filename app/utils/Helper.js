/*jshint esnext: true */
var axios = require('axios');

var getGithubUserInfo = (username) => {
  return axios.get('https://api.github.com/users/'+ username);
};

var getGithubUserRepos = (username) => {
  return axios.get('https://api.github.com/users/' + username +'/repos');
};

var helpers = {
  getGithubInfo:(username) => {
    return axios.all([getGithubUserRepos(username),getGithubUserInfo(username)])
    .then((arr) => {
        return {
          repos : arr [0].data,
          githubInfo : arr [1].data,
        };
    });
  }

};

export default helpers;
