import express from 'express';
import { User } from './UserSchema';
const router = express.Router();
router.get('/user', (req, res) => {
  User.find({}).exec(function(err, data) {
    if (err) {
      return console.error(err);
    }
    return res.send(data);
  });
});
router.post('/user', (req, res) => {
  const createUser = new User({});
  createUser.firstName = req.body.firstName;
  createUser.lastName = req.body.lastName;
  createUser.save(function(err, data) {
    if (err) {
      return console.error(err);
    }
    return res.send(data);
  });
});
router.delete('/user/:id', (req, res) => {
  User.findOne({ _id: req.params.id }).exec((err, dres) => {
    if (err) {
      return res.send(err);
    }
    const deleteuser = new User(res);
    deleteuser.isDelete = true;
    deleteuser.save((delerr, delres) => {
      if (delerr) {
        return res.send(delerr);
      }
      return res.send(delres);
    });
  });
});

export default router;
