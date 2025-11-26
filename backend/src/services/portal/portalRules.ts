/**
 * @summary
 * Business logic for the Portal feature.
 * Handles data retrieval, pagination, and filtering for products and company profile.
 *
 * @module services/portal/portalRules
 */

import { companyProfileData, productsData } from './data';
import { CompanyProfile, ProductListResponse } from './portalTypes';

/**
 * @summary
 * Retrieves a paginated list of products.
 * Products are sorted by category and then by name.
 *
 * @function getProducts
 * @param {number} page - Page number (1-based)
 * @param {number} pageSize - Number of items per page
 * @returns {Promise<ProductListResponse>} Paginated product list with metadata
 */
export async function getProducts(
  page: number = 1,
  pageSize: number = 12
): Promise<ProductListResponse> {
  // Sort products by category and then by name to ensure consistent grouping
  const sortedProducts = [...productsData].sort((a, b) => {
    if (a.category === b.category) {
      return a.name.localeCompare(b.name);
    }
    return a.category.localeCompare(b.category);
  });

  const total = sortedProducts.length;
  const totalPages = Math.ceil(total / pageSize);

  // Ensure page is within valid bounds
  const currentPage = Math.max(1, Math.min(page, Math.max(1, totalPages)));

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, total);

  const paginatedProducts = sortedProducts.slice(startIndex, endIndex);

  return {
    products: paginatedProducts,
    pagination: {
      page: currentPage,
      pageSize,
      total,
      totalPages,
    },
  };
}

/**
 * @summary
 * Retrieves the company institutional profile.
 * Includes history, mission, values, location, and contact info.
 *
 * @function getCompanyProfile
 * @returns {Promise<CompanyProfile>} Company profile data
 */
export async function getCompanyProfile(): Promise<CompanyProfile> {
  return companyProfileData;
}
