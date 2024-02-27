// import { getProducts, postProduct, deleteProduct, updateProduct} from '../models/database.js';

// const getMany = async (req, res) => {
//   try {
//     const products = await getProducts();
//     res.json(products);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // const haveSingle = async (req, res) => {
// //   try {
// //     const singleProduct = await getSingle(+req.params.prodId);
// //     res.json(singleProduct);
// //   } catch (error) {
// //     console.error(error.message);
// //     res.status(500).json({ error: 'Internal server error' });
// //   }
// // };

// const addProduct = async (req, res) => {
//   const { prodID, prodName, category, price, image, description } = req.body;
//   try {
//     await postProduct(prodID, prodName, category, price, image, description);
//     const products = await getProducts();
//     res.json(products);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// const deleteItem = async (req, res) => {
//   const productId = req.params.productId;
//   try {
//     await deleteProduct(productId);
//     const products = await getProducts();
//     res.json(products);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// const editProduct = async (req, res) => {
//   const productID = +req.params.productId;
//   const { prodID, prodName, category, price, image, description } = req.body;
//   try {
//     await updateProduct(prodID, prodName, category, price, image, description);
//     const products = await getProducts();
//     res.json(products);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// export default { getMany, addProduct, deleteItem, editProduct };


import express from 'express';
import bodyParser from 'body-parser';
import { products } from '../models/productsdb.js';
// import cookieParser from 'cookie-parser';

const productRouter = express.Router()

productRouter.get('/', (req, res)=>{
    try{
        products.fetchProducts(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve products'
        })
    }
})
productRouter.get('/:id', (req, res)=>{
    try{
        products.fetchProduct(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve product'
        })
    }
})

productRouter.post('/addProduct', bodyParser.json(), (req, res)=>{
    try{
        products.addProduct(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to add product'
        })
    }
})

productRouter.patch('/updateProduct/:id', bodyParser.json(), (req, res)=>{
    try{
        products.updateProduct(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to update product'
        })
    }
})

export{
    productRouter
}