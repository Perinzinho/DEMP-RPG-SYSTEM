const API_URL = import.meta.env.VITE_API_URL;

export async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem('token');

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || 'Erro na requisição');
  }

  if (response.status === 204) return null;
  return response.json();
}