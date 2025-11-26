/**
 * @summary
 * External API routes configuration for public endpoints.
 * Handles public access routes without authentication requirements.
 *
 * @module routes/v1/externalRoutes
 */

import { Router } from 'express';
import * as portalController from '@/api/v1/external/portal/controller';

const router = Router();

/**
 * @route GET /portal/products
 * @description Retrieve paginated product catalog
 * @access Public
 */
router.get('/portal/products', portalController.getProductsHandler);

/**
 * @route GET /portal/profile
 * @description Retrieve company institutional profile (history, location, contact)
 * @access Public
 */
router.get('/portal/profile', portalController.getProfileHandler);

export default router;
