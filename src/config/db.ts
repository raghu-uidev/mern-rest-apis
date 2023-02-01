import * as mongoose from 'mongoose';

mongoose.set('strictQuery', true);

// Connecting to the database
export default (async () => {
  try {
    await mongoose.connect(
      'mongodb://127.0.0.1:27017/ecommerce?directConnection=true&serverSelectionTimeoutMS=5000&appName=mongosh+1.6.1',
     );
    // listen for requests
    console.log('The Conection is Ok'); 
  } catch (err) {
    console.log(`${err} Could not Connect to the Database. Exiting Now...`);
    process.exit();
  }
})();