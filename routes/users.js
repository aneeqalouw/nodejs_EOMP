// import express from 'express';
// import usersController from '../controller/users.js';


// const router = express.Router();

// router.get('/', usersController.getMany);
// router.post('/', usersController.addUser);
// router.put('/:userId', usersController.editUser);
// router.delete('/:userId', usersController.deleteUsers);


// export default router; 


// import express from 'express';
// import usersController from '../controller/users.js';

// const router = express.Router();

// router.get('/', usersController.getMany);
// router.post('/', usersController.addUser);
// router.put('/:userID', usersController.editUser);
// // router.delete('/:userID', usersController.deleteUser); // Fix route parameter name

// export default router;

import express from 'express';
import usersController from '../controller/users.js';
import middleware from '../middleware/userAuthenticate.js';

const router = express.Router();

router.get('/', usersController.getManyUsers);
router.post('/', usersController.addUser);
router.put('/userID', usersController.editUser);

export default router;

