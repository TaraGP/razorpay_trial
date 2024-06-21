//backend\routes\paymentRoutes.js
import express from 'express';

import {checkout, paymentVerification} from '../controllers/paymentController.js';

const router=express.Router();

router.post('/checkout', checkout);

router.post('/paymentVerification', paymentVerification);

export default router;
