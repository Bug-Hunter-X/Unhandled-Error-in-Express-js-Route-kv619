const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... database query to fetch user data ...
    const user = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ userId });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});