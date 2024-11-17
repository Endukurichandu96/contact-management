import express from 'express'
import contactRoutes from './contactRoutes';

const router = express.Router()
router.use('', contactRoutes);
export { router as apiRouter }