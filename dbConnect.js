const mongoose=require('mongoose');

module.exports=async()=>{
    const mongoUri='mongodb+srv://yashrastogi2904:FzH4N3zvjfmCYmWD@cluster0.xudutjw.mongodb.net/';
    try{
        const connect=await mongoose.connect(mongoUri,{ useNewUrlParser: true, useUnifiedTopology: true });
        console.log("mongoDB connected ",connect.connection.host);
    }catch(e){
        console.log(e);
        process.exit(1);
    }
}