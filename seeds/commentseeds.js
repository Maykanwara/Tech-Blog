const { Comment } = require('../models');

const commentData = [
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

const seedComment = () => category.bulkCreate(CommentData);

module.exports = seedComment;