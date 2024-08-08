const axios = require('axios');

const GITHUB_USERNAME = process.env.GITHUB_TOKEN;
const TOKEN = process.env.GITHUB_TOKEN;

const API_URL = 'https://api.github.com';

const headers = {
  'Authorization': `token ${TOKEN}`,
  'Accept': 'application/vnd.github.v3+json'
};

async function makeReposPublic() {
  try {
    const response = await axios.get(`${API_URL}/user/repos?per_page=100`, { headers });
    const repos = response.data;

    for (const repo of repos) {
      const repoName = repo.name;
      if (repo.private) {
        const updateUrl = `${API_URL}/repos/${GITHUB_USERNAME}/${repoName}`;
        const updateData = {
          private: false
        };
        const updateResponse = await axios.patch(updateUrl, updateData, { headers });
        if (updateResponse.status === 200) {
          console.log(`Repository "${repoName}" is now public.`);
        } else {
          console.log(`Failed to update "${repoName}". Status code: ${updateResponse.status}`);
        }
      } else {
        console.log(`Repository "${repoName}" is already public.`);
      }
    }
  } catch (error) {
    console.error('Error making repositories public:', error);
  }
}

makeReposPublic();
