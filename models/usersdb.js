import { pool } from '../config/config.js';

const getUsers = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM users');
    return rows;
  } catch (error) {
    throw new Error(`Error fetching products: ${error.message}`);
  }
};

const postUsers = async (firstName, lastName, age, email, password) => {
  try {
    await pool.query('INSERT INTO users (firstName, lastName, age, email, password) VALUES (?, ?, ?, ?, ?)', [firstName, lastName, age, email, password]);
    return { success: true };
  } catch (error) {
    throw new Error(`Error adding users: ${error.message}`);
  }
};

const deleteUsers = async (userID) => {
  try {
    await pool.query('DELETE FROM users WHERE userID = ?', [userID]);
    return { success: true };
  } catch (error) {
    throw new Error(`Error deleting users: ${error.message}`);
  }
};

const updateUsers = async (firstName, lastName, age, email, password) => {
  try {
    await pool.query('UPDATE users SET userID = ?, firstName = ?, lastName = ?, age = ?, email = ?, password = ? WHERE userID = ?', [firstName, lastName, age, email, password]);
    return { success: true };
  } catch (error) {
    throw new Error(`Error updating users: ${error.message}`);
  }
};


export { getUsers, postUsers, deleteUsers, updateUsers };
  

