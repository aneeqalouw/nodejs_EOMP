import express from 'express';
import shopController from '../controller/shop.js';

const router = express.Router();

router.get('/', shopController.getMany);
router.post('/', shopController.addProduct);
router.put('/:prodID', shopController.editProduct);
// router.get('/:prodID', shopController.haveSingle);
router.delete('/:prodID', shopController.deleteItem);

export default router;
