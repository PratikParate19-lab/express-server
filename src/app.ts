import express from 'express';
import mongoose from 'mongoose';
import Userschema from './User/UserRoutes';
import bodyParser from 'body-parser';
mongoose.connect(
  'mongodb://localhost:27017/local',
  { useNewUrlParser: true },
  err => {
    if (!err) {
      console.log('Successfully Established Connection with MongoDB');
    } else {
      console.log(
        'Failed to Establish Connection with MongoDB with Error: ' + err
      );
    }
  }
);
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
const port = 3001;
app.use('/', Userschema);

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
