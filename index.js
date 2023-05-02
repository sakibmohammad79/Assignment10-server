const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const recipe = require('./data/recipe.json')

app.get('/', (req, res) =>{
    res.send('This is recipe hunting!!')
});

app.get('/recipe', (req, res) =>{
    res.send(recipe)
});

app.get('/recipe/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedRecipe = recipe.find(singleRecipe => singleRecipe.id == id);
    res.send(selectedRecipe);

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});