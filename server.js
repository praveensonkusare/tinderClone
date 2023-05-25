import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';

//App Config
// create a instance of
const app = express();
const port = process.env.PORT || 8000;
const connection_url =
  'mongodb+srv://admin:ujchCXmyz2n5y4F2@cluster0.r3henzn.mongodb.net/tinderdb?retryWrites=true&w=majority';

// Middleware   configuration
app.use(express.json());
app.use(Cors());

// DB configuration
//mongoose.connect(connection_url).then(() => console.log('database connection'));
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  //useCreateIndex: true,
  useUnifiedTopology: true,
});
// API Endpoint configuration

app.get('/', (req, res) => res.status(200).send('hello world'));

app.post('/tinder/cards', async (req, res) => {
  const dbcard = req.body;

  try {
    const data = await Cards.create(dbcard);
    console.log(data, 'checking data');
    res.status(201).send(data);
  } catch (err) {
    console.log(err, 'checking error message');
    res.status(500).send(err);
  }
});
app.use(express.static('./client/static'));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'static', 'index.html'));
// });

// }

app.get('/tinder/cards', async (req, res) => {
  try {
    const data = await Cards.find();
    console.log(data, 'connection data');
    res.status(200).send(data);
  } catch (err) {
    console.error(err, 'err');

    res.status(500).send(err);
  }
});
// Listener configuration
app.listen(port, () => console.log(`listening on port: ${port}`));
