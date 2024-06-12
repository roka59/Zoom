
import express from 'express';
var router = express.Router();


router.post('/sign-up', function(req, res, next) {
  res.send("Sign Up user")
});

router.post('/sign-in', function(req, res, next) {
  res.send("Sign in user")
});

export default router;