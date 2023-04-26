import mongoose from "mongoose";
import config from '../config/config.js';

const persistence = "MONGO";

export let usersService;
export let productsService;
// export let cartService;

switch (persistence) {
    case 'MONGO':
        mongoose.set('strictQuery', false)
        const connection = mongoose.connect(config.mongo.URL);
        const { default: mongoUsers } = await import('./mongodb/usersContainer.js');
        const { default: mongoProducts } = await import('./mongodb/productsContainer.js');
        // const { default: mongoCart } = await import('./mongodb/cartContainer.js')
        usersService = new mongoUsers();
        productsService = new mongoProducts();
        // cartService = new mongoCart();
        break;
};