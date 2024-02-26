import { pool } from '../config/config.js';

const getProducts = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM products');
    return rows;
  } catch (error) {
    throw new Error(`Error fetching products: ${error.message}`);
  }
};

const postProduct = async (prodID, prodName, category, price, image, description) => {
  try {
    await pool.query('INSERT INTO products (prodID, prodName, category, price, image, description) VALUES (?, ?, ?, ?, ?, ?)', [prodID, prodName, category, price, image, description]);
    return { success: true };
  } catch (error) {
    throw new Error(`Error adding product: ${error.message}`);
  }
};

const deleteProduct = async (prodID) => {
  try {
    await pool.query('DELETE FROM products WHERE prodID = ?', [prodID]);
    return { success: true };
  } catch (error) {
    throw new Error(`Error deleting product: ${error.message}`);
  }
};

const updateProduct = async (prodID, prodName, category, price, image, description) => {
  try {
    await pool.query('UPDATE products SET prodID = ?, prodName = ?, category = ?, price = ?, image = ?, description = ? WHERE prodID = ?', [prodID, prodName, category, price, image, description]);
    return { success: true };
  } catch (error) {
    throw new Error(`Error updating product: ${error.message}`);
  }
};

// const getSingle = async (prodID) => {
//   try {
//     const [response] = await pool.query('SELECT * FROM products WHERE prodID = ?', [prodID]);
//     return response;
//   } catch (error) {
//     throw new Error(`Error fetching single product: ${error.message}`);
//   }
// };

export { getProducts, postProduct, deleteProduct, updateProduct};

