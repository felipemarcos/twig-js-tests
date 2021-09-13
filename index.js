import Twig from 'twig';
import express from 'express';

const app = express();
const port = 3000;

Twig.cache(false);

app.get('/', (req, res) => {
  res.render('css.twig', {
    message: 'Hello World',
    design: {
      type: 'button',
      background: '#000',
      background_hover: '#eee',
      typography: {
        text_align: 'center'
      }
    }
  });
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})