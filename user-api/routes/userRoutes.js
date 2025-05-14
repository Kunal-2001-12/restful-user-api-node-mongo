const express = require('express');
const User = require('../models/user');
const { body, validationResult } = require('express-validator');

const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET a specific user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

// POST a new user with validation
router.post(
  '/',
  [
    body('name').isString().withMessage('Name must be a string'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('age').isInt({ min: 0 }).withMessage('Age must be a positive integer')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = new User(req.body);
    try {
      const newUser = await user.save();
      res.status(201).json({ message: 'User added successfully', user: newUser });
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        return res.status(400).json({ message: 'Email already exists' });
      }
      res.status(500).json({ message: err.message });
    }
  }
);

// PUT update a user by ID with validation
router.put(
  '/:id',
  [
    body('name').optional().isString().withMessage('Name must be a string'),
    body('email').optional().isEmail().withMessage('Please provide a valid email'),
    body('age').optional().isInt({ min: 0 }).withMessage('Age must be a positive integer')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User updated successfully', user: updatedUser });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

// DELETE a user by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
