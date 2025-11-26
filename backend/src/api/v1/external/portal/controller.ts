/**
 * @summary
 * API Controller for the Portal feature.
 * Handles HTTP requests for products and company profile.
 *
 * @module api/v1/external/portal/controller
 */

import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { successResponse } from '@/utils/response';
import { getCompanyProfile, getProducts } from '@/services/portal/portalRules';
import { zPositiveInt } from '@/utils/validation';

/**
 * @summary
 * Validation schema for product list query parameters
 */
const productListQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional().default(1),
  pageSize: z.coerce.number().int().positive().max(100).optional().default(12),
});

/**
 * @summary
 * Handler for retrieving the product catalog.
 * Supports pagination via query parameters.
 *
 * @function getProductsHandler
 * @route GET /api/v1/external/portal/products
 */
export async function getProductsHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const query = await productListQuerySchema.parseAsync(req.query);

    const result = await getProducts(query.page, query.pageSize);

    res.json(successResponse(result));
  } catch (error) {
    next(error);
  }
}

/**
 * @summary
 * Handler for retrieving the company profile.
 * Returns institutional info, location, and contact details.
 *
 * @function getProfileHandler
 * @route GET /api/v1/external/portal/profile
 */
export async function getProfileHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const result = await getCompanyProfile();

    res.json(successResponse(result));
  } catch (error) {
    next(error);
  }
}
