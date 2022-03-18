import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

async function createUser(user) {
  await axios.post(`${BASE_URL}/users`, user);
}

async function login(data) {
  const token = await axios.post(`${BASE_URL}/login`, data);
  return token;
}

async function getUser(token) {
  const config = createConfig(token);

  const user = await axios.get(`${BASE_URL}/users`, config);
  return user;
}

async function getUserById(id) {
  const user = await axios.get(`${BASE_URL}/users/${id}`);
  return user;
}

async function rankUsers() {
  const ranking = await axios.get(`${BASE_URL}/users/ranking`);
  return ranking;
}

async function shortenLink(token, link) {
  const config = createConfig(token);

  await axios.post(`${BASE_URL}/urls/shorten`, { url: link }, config);
}

async function deleteLink(token, id) {
  const config = createConfig(token);

  await axios.delete(`${BASE_URL}/urls/${id}`, config);
}

const api = {
  createUser,
  login,
  getUser,
  getUserById,
  rankUsers,
  shortenLink,
  deleteLink,
};

export default api;
