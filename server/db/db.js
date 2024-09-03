import { requirePropFactory } from '@mui/material';
import { connect } from 'mongoose';

const uri = "mongodb+srv://junaidbargir70:root@demo-db.bnhuz.mongodb.net/?retryWrites=true&w=majority&appName=demo-db";

const connectDB = async () => {
    try {
        await connect(uri);
        console.log("Connected to MongoDB with Mongoose!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;