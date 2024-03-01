import { connection as db } from '../config/config.js';
class Products{
    fetchProducts(req, res){
        const qry = `
            SELECT *
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
        const addedProduct = req.body;
        db.query(qry, addedProduct, (err)=>{
        //     if(err) throw err
        //     res.json({
        //         status: res.statusCode,
        //         msg: 'Product successfully added'
        //     })
        // }
        if (err) {
            console.error('Error adding product:', err);
            res.status(500).json({
                status: 500,
                msg: 'Failed to add product'
            });
        } else {
            res.json({
                status: res.statusCode,
                msg: 'Product successfully added'
            });
        }
    });
    }
    updateProduct(req, res){
        const qry = `
            UPDATE products
            SET ?
            WHERE prodID = '${req.params.id}';
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
            WHERE prodID = '${req.params.id}';
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

