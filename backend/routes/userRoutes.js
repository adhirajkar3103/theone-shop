import express from 'express';
const router = express.Router();
import {
    registerUser,
    authUser,
    logoutUser,
    getUsers,
    getUserProfile,
    updateUserProfile,
    deleteUser,
    getUserById,
    updateUser
} from '../controllers/userController.js'
import {protect,admin} from '../middlewares/authMiddleware.js'

// LOGIN and LOGOUT routes
router.route('/').post(registerUser)
router.post('/auth', authUser);
router.post('/logout', logoutUser);

// PROTECTED ROUTES
router.route('/').get(protect,admin,getUsers);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// ADMIN ROUTES
router
  .route('/:id')
  .delete(deleteUser)
  .get(getUserById)
  .put(updateUser);

export default router;
