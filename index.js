import Twig from 'twig';
import express from 'express';

const app = express();
const port = 3000;

Twig.cache(false);

app.get('/', (req, res) => {
  Twig.renderFile('template.twig', { baked_good: 'cupcake' }, (err, html) => {
    res.send(html);
  });
})

app.get('/two', (req, res) => {
  Twig.renderFile('template-2.twig', {}, (err, html) => {
    res.send(html);
  });
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})