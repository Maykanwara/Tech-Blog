const express = require('express');

const session = require('express-session');
const { Sequelize } = require('sequelize/dist');


const sequelize = require('./config/connections');
const sequelizeStore = require('./connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
    secret: 'Secret Santa',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};



app.use(session(sess));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));


});
