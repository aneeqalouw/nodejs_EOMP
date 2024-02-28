// import { pool } from '../config/config.js';

// const getProducts = async () => {
//   try {
//     const [rows] = await pool.query('SELECT * FROM products');
//     return rows;
//   } catch (error) {
//     throw new Error(`Error fetching products: ${error.message}`);
//   }
// };

// const postProduct = async (prodID, prodName, category, price, image, description) => {
//   try {
//     await pool.query('INSERT INTO products (prodID, prodName, category, price, image, description) VALUES (?, ?, ?, ?, ?, ?)', [prodID, prodName, category, price, image, description]);
//     return { success: true };
//   } catch (error) {
//     throw new Error(`Error adding product: ${error.message}`);
//   }
// };

// const deleteProduct = async (prodID) => {
//   try {
//     await pool.query('DELETE FROM products WHERE prodID = ?', [prodID]);
//     return { success: true };
//   } catch (error) {
//     throw new Error(`Error deleting product: ${error.message}`);
//   }
// };

// const updateProduct = async (prodID, prodName, category, price, image, description) => {
//   try {
//     await pool.query('UPDATE products SET prodID = ?, prodName = ?, category = ?, price = ?, image = ?, description = ? WHERE prodID = ?', [prodID, prodName, category, price, image, description]);
//     return { success: true };
//   } catch (error) {
//     throw new Error(`Error updating product: ${error.message}`);
//   }
// };

// // const getSingle = async (prodID) => {
// //   try {
// //     const [response] = await pool.query('SELECT * FROM products WHERE prodID = ?', [prodID]);
// //     return response;
// //   } catch (error) {
// //     throw new Error(`Error fetching single product: ${error.message}`);
// //   }
// // };

// export { getProducts, postProduct, deleteProduct, updateProduct};

import { connection as db } from '../config/config.js';
class Products{
    fetchProducts(req, res){
        const qry = `
            SELECT prodID, prodName, category, price, image, description
            FROM products;
        `
        db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }

    fetchProduct(req, res){
        const qry = `
        SELECT prodID, prodName, category, price, image, description
        FROM products
        WHERE prodID = '${req.params.id}';
    `
    db.query(qry, (err, result)=>{
        if(err) throw err
        res.json({
            status: res.statusCode,
            result: result[0]
        })
    })
    }

    addProduct(req, res){
        const qry = `
            INSERT INTO products
            SET ?;
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'Product successfully added'
            })
        })

    }
    updateProduct(req, res){
    
        const qry = `
            UPDATE products
            SET ?
            WHERE prodID = ${req.params.id};
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err
            res.json({
                    status: res.statusCode,
                    msg: "The information has been updated."
                })
            })
        }
    deleteProduct(req, res){
        const qry = `
            DELETE FROM products
            WHERE prodID = ${req.params.id};
        `
        db.query(qry, (err)=>{
            if (err) throw err 
                res.json({
                    status: res.statusCode,
                    msg: 'Successfully deleted'
                })
            })
        }
    }

export {
    Products
}

