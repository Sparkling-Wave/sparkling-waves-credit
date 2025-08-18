import { toast } from "react-toastify";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Asynchronously fetches data from a specified API endpoint.
 *
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @param {string} token - The Bearer token for authorization.
 * @returns {Promise<Object>} - A promise that resolves to the fetched data.
 * @throws {Error} - Throws an error if the fetch operation fails.
 *
 * This function constructs a GET request to the provided endpoint, using the
 * base URL defined by `BASE_URL`. The request includes an Authorization header
 * with a Bearer token and sets the `Content-Type` to `application/json`. If the
 * response is not ok (status code outside the range 200-299), an error is thrown.
 * If the request is successful, the response is parsed as JSON and returned.
 * Any errors encountered during the fetch operation are caught, logged to the
 * console, and rethrown for further handling.
 */
export const getAllApiRequest = async (endpoint: string, token?: string) => {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const fullUrl = `${BASE_URL}${endpoint}`;

    const response = await fetch(fullUrl, {
      method: "GET",
      headers,
    });
    if (!response.ok) {
      const errorMessage = `HTTP ${response.status}: ${response.statusText}`;
      // console.error(`API Error for ${endpoint}:`, errorMessage);
      throw new Error(
        `Failed to fetch data from ${endpoint} - ${errorMessage}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // console.error(error);
    throw error;
  }
};
