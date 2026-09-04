const API_URL = import.meta.env.VITE_API_URL as string

export async function apiFetch<T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = localStorage.getItem('token')

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }

  const init: RequestInit = {
    ...options,
    headers,
  }

  const response = await fetch(`${API_URL}${endpoint}`, init)

  if (!response.ok) {
    const errorData = (await response.json().catch(() => null)) as
      | { message?: string }
      | null
    throw new Error(errorData?.message || 'Erro na requisição')
  }

  const text = await response.text()
  return (text ? JSON.parse(text) : null) as T
}
