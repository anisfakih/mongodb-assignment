const User=require('../model/usermodel');
const bcrypt=require('bcryptjs');

const signup=async(req,res)=>{
    const {name,email,password}=req.body;

    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(name, email, password);
        const Newuser=await User.create({
            name,
            email,
            password:hashedPassword,
        });
        return res
        .status(200)
        .json({user:Newuser})
    }catch (error) {
        res.status(500).json({message:error})
    }
};

const login=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await User.findOne({email});
        if(!user)
            return res.status(400).json({message:"user not found"});
    
        const iscorrect=bcrypt.compare(password, user.password);
        if(!iscorrect)
            return res.status(400).json({message:"Invalid Credentials"});
            
        if (!user.verified)
            return res.status(400).json({ message: "Email is not verified." });

    
    return res.status(200).json({
            result: {
                name: user.name,
                email: user.email,
                  
                }
               
              });        
   
     
    }catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
      }
       
};

const getUser = async (req, res) => {
    try {
      const user_id = req.params.id;
      const user = await User.findById(user_id);
      if (!user) return res.status(400).json({ message: "user doesn't exist" });
      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "something went wrong" });
    }
  };

  const getAllUsers = async(req, res) => {
    try{
        let user=User.find();
        user=await user.select({
            name:1,
            email:1,
            password:1,

        });
        return res.status(200).json({user});
    }catch(error){
        return res.status(500).json({message:error.message});    }
  };

const updateUser = async(req, res) => {
   try {
        const user_id=req.params.id;
        const user=await User.findById(user_id);
        if(!user) return res.status(400).json({message:"user does not exist"});
        let result = await User.findByIdAndUpdate(user_id, req.body);
       return res.status(200).json({message:"User updated successfully"});

    }catch(error){
        res.status(500).json({message:"something went wrong"});
    }

}; 

const deleteUser=async (req, res)=>{
    try{
        const user_id =req.params.id;
    const user =await User.findById(user_id);
    if(!user) return res.status(400).json({message:"user does not exist"});
    let result= await User.findByIdAndDelete(user_id);
    return res.status(200).json({message:"user was successfully deleted"});
    }catch(error){
        return res.status(500).json({message:error.message});
    }
};

const deleteAllUsers = async (req, res) => {
    try {
      await User.deleteMany();
      return res.status(200).json({ message: "All users have been deleted" });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Something went wrong" });
    }
  };
 


{/*module.exports=login;*/}
{/*module.exports=signup;*/}
{/*module.exports=getUser;*/}
{/*module.exports=updateUser;*/}
{/*module.exports=getAllUsers;*/}
// module.exports=deleteUser;
module.exports=deleteAllUsers;