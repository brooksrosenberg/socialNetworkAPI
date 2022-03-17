const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the thoughts
  const thoughts = [];

  // Get some random reactions objects using a helper function that we imported from ./data
  const reactions = getRandomReactions(20);

  // Loop 20 times -- add students to the thoughts array
  for (let i = 0; i < 20; i++) {
    const username = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
    const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    thoughts.push({
      thoughtText,
      createdAt,
      username,
      reactions,
    });
  }

  // Add students to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  // Add courses to the collection and await the results
  await User.collection.insertOne({
    username: 'James',
    email: 'mail@email.com',
    thoughts: [...thoughts],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(thoughts);
  console.table(reactions);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
