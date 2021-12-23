const { User } = require('../models');

const userData = [
    {
        category_name: 'Computer',
    
    },
    {
        category_name: 'Books',
    
    },
    {
        category_name: 'Pens',
    
    },
    {
        category_name: 'Coffee',
    
    },
    {
        category_name: 'Phone',
    
    },
];

const seedUser = () => category.bulkCreate(UserData);

module.exports = seedUser;