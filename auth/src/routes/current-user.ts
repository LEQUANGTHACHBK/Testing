import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
  res.send('Hi there! con lon nay');
});

export { router as currentUserRouter };
