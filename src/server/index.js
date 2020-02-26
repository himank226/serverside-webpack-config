import express from 'express';
import renderer from '../helpers/render'


const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(renderer());
});

app.listen(3006, () => {
    console.log("Listing port 3006");
})