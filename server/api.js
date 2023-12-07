const axios = require('axios');
const express = require('express');

const router = express.Router();

router.post('/expert/login', async (req, res) => {
  console.log('Body', req.body);
  console.log(`-----> ${process.env.PROFILE_SERVICE}/v1/auth/expert/login`);
  const response = await axios.post(
    `http://${process.env.PROFILE_SERVICE}:9000/v1/auth/expert/login`,
    {
      ...req.body,
    },
  );
  console.log('Body2', response.data);
  if (response) {
    axios.defaults.headers.common.Authorization = `Bearer ${
      response.data.tokens.access.token
    }`;
    res.send(response.data);
  } else {
    res.send({});
  }
});

router.post('/expert/personal-info', async (req, res) => {
  console.log('Body', req.body);
  console.log(`-----> ${process.env.PROFILE_SERVICE}/v1/experts/personal-info`);
  const token = req.headers.authorization || req.headers.Authorization;
  console.log('Token ', token);
  const response = await axios.post(
    `http://${process.env.PROFILE_SERVICE}:9000/v1/experts/personal-info`,
    {
      ...req.body,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
  console.log('Body2', response.data);
  if (response) {
    res.send(response.data);
  } else {
    res.send({});
  }
});
router.post('/expert/experience', async (req, res) => {
  console.log('Body', req.body);
  console.log(`-----> ${process.env.PROFILE_SERVICE}/v1/experts/experience`);
  const token = req.headers.authorization || req.headers.Authorization;
  console.log('Token ', token);
  const response = await axios.post(
    `http://${process.env.PROFILE_SERVICE}:9000/v1/experts/experience`,
    {
      ...req.body,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  console.log('Body2', response.data);
  if (response) {
    res.send(response.data);
  } else {
    res.send({});
  }
});
router.post('/expert/expertise', async (req, res) => {
  console.log('Body', req.body);
  console.log(`-----> ${process.env.PROFILE_SERVICE}/v1/experts/expertise`);
  const response = await axios.post(
    `http://${process.env.PROFILE_SERVICE}:9000/v1/experts/expertise`,
    {
      ...req.body,
    },
  );
  console.log('Body2', response.data);
  if (response) {
    res.send(response.data);
  } else {
    res.send({});
  }
});

module.exports = router;
