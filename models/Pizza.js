const { Schema, model} = require('mongoose')


const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        deafault: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
});


const Pizza = model('Pizza', PizzaSchema);
//export the pizza model
module.exports = Pizza;