import express, { Router } from 'express';
import { createContact,  deletContactDetails, getAllContactDetails, getContactDetailsById,  updateContactDetails } from '../api/contactController';
const router: Router = express.Router();

router.post('', createContact);
router.get('', getAllContactDetails);
router.get('/:id', getContactDetailsById);
router.put('/:id', updateContactDetails);
router.delete('/:id', deletContactDetails);

export default router;