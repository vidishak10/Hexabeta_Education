const mongoose = require('mongoose');
const password = encodeURIComponent(',Kaushal12@#');

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || `mongodb+srv://kaushaldixit05:${password}@cluster0.lyrkmet.mongodb.net/hexabeta_education?retryWrites=true&w=majority&appName=Cluster0`;
    
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10,
      socketTimeoutMS: 45000
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('MongoDB Connection Error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;