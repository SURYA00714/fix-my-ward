/**
 * Unified API Configuration
 * Supports VITE_API_URL or VITE_API_BASE_URL with or without trailing /api.
 * Automatically defaults to the live Render backend so production never defaults to localhost.
 */
export const getApiBase = () => {
  const envUrl =
    import.meta.env.VITE_API_URL ||
    import.meta.env.VITE_API_BASE_URL ||
    "https://fix-my-ward-r2zv.onrender.com";

  let cleaned = envUrl.trim().replace(/\/+$/, "");
  if (cleaned.endsWith("/api")) {
    cleaned = cleaned.slice(0, -4);
  }
  return cleaned;
};

export const API_HOST = getApiBase();

export const apiUrl = (endpoint) => {
  const base = getApiBase();
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  return `${base}${cleanEndpoint}`;
};

export default { getApiBase, API_HOST, apiUrl };
