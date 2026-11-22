/**
 * Unified API Configuration
 * Supports VITE_API_URL or VITE_API_BASE_URL with or without trailing /api.
 */
export const getApiBase = () => {
  const envUrl = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
  let cleaned = envUrl.trim().replace(/\/+$/, "");
  if (cleaned.endsWith("/api")) {
    cleaned = cleaned.slice(0, -4);
  }
  return cleaned;
};

export const apiUrl = (endpoint) => {
  const base = getApiBase();
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  return `${base}${cleanEndpoint}`;
};

export default { getApiBase, apiUrl };
