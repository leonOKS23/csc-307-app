import express from 'express';

const app = express();
const port = 8000;
const users = {
  users_list: [
    {
      id: 'xyz789',
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      id: 'abc123',
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      id: 'ppp222',
      name: 'Mac',
      job: 'Professor',
    },
    {
      id: 'yat999',
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      id: 'zap555',
      name: 'Dennis',
      job: 'Bartender',
    },
  ],
};

const findUsers = (name, job) =>
  users.users_list.filter((user) => {
    const matchesName = name === undefined || user.name === name;
    const matchesJob = job === undefined || user.job === job;

    return matchesName && matchesJob;
  });

const findUserById = (id) => users.users_list.find((user) => user.id === id);
const addUser = (user) => {
  users.users_list.push(user);
  return user;
};
const deleteUserById = (id) => {
  const userIndex = users.users_list.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return undefined;
  }

  return users.users_list.splice(userIndex, 1)[0];
};

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  const { name, job } = req.query;

  res.send({ users_list: findUsers(name, job) });
});

app.post('/users', (req, res) => {
  addUser(req.body);
  res.send();
});

app.get('/users/:id', (req, res) => {
  const result = findUserById(req.params.id);

  if (result === undefined) {
    res.status(404).send('Resource not found.');
    return;
  }

  res.send(result);
});

app.delete('/users/:id', (req, res) => {
  const deletedUser = deleteUserById(req.params.id);

  if (deletedUser === undefined) {
    res.status(404).send('Resource not found.');
    return;
  }

  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
