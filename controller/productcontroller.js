const Product = require('../model/productmodel');

const createProduct = async (req, res) =>{
    const {name, description}=req.body;
    try{
        const Newproduct = await Product.create({
            name,
            description,

        });
        return res.status(200).json({product:Newproduct});
    }catch(error){
        res.status(500).json({message:error});
    }
};

const getAllProducts = async (req, res) => {
    try {
      let product = Product.find();
      product = await product.select({
       
        name: 1,
        description: 1,
      });
  
      return res.status(200).json({ product });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "something went wrong" });
    }
  };

  const getProduct= async (req, res) => {
   try{
    const product_id =req.params.id;
    const product= await Product.findById(product_id);
    if(!product) return res.status(400).json({message:"product not found"});
    return res.status(200).json({name: product.name});   
      }catch(error){
        return res.status(500).json({message:"something went wrong"});
      }

  };

  const updateProduct=async (req, res)=>{
    try{
        const product_id=req.params.id;
         const product= await Product.findById(product_id);
        if(!product) return res.status(400).json({message:"product not found"});
        product.name= req.body.name
        product.description= req.body.description
await product.save();
return res.status(200).json({message:"product updated"});
 
    }catch(error){
        return res.status(500).json({message: error.message});
    }
  };    

  const deleteProducts = async (req, res) => {
    try{
        const product_id = req.params.id;
    const product=await Product.findById(product_id);
    if(!product) return res.status(400).json({message:"product does not exist"});
    let result = await Product.findByIdAndDelete(product_id);
    return res.status(200).json({message:"product deleted successfully"});
    }catch(error){
        return res.status(500).json({message:error.message});
    }

  };
  
  const deleteAllProducts = async (req, res) => {
    try {
      await Product.deleteMany();
      return res.status(200).json({ message: "All products have been deleted" });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Something went wrong" });
    }
  };


{/*module.exports=createProduct;*/}
{/*module.exports=getAllProducts;*/}
{/*module.exports=updateProduct;*/}
{/*module.exports=getProduct;*/}
{/*module.exports=deleteProducts;*/}
 module.exports=deleteAllProducts;
