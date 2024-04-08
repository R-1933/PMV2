const express = require('express')

const app = express()

const port_number = 4000

//middleware setup
app.use(express.json());

// database setup






// Route for handling prisoner related features
 const prisonerRoute = require('./routes/prisonerRoute')
 app.use('/prisoner', prisonerRoute)


 const GuardRoute = require('./routes/GuardRoute')
 app.use('/Guard', GuardRoute)



app.listen(port_number, () => { 
    console.log(`server is running on http://localhost:${port_number}`) } );



    

    // to run backend server use `node.index.js`