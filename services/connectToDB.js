const mongoose = require('mongoose');

const mongoDB_uri = 'mongodb+srv://nicoelduro556:hidesense8790@clusternicolas.5ytne.mongodb.net/API_wallet?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);

mongoose.connect(mongoDB_uri)
    .then( (db) => console.log("mongoDB is connected to: ", db.connection.host) )
    .catch( (err) => console.error(err) );

    module.exports = mongoose;

    
//** sup passw
//conn: postgres://postgres.pbfagserkabjilyxicub:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:5432/postgres

// kedilyn4921ls