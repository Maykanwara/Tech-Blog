const { Blog } = require('../models');

const BlogData = [
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

const seedBlog = () => category.bulkCreate(BlogData);

module.exports = seedBlog;