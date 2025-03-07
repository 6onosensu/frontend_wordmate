const API_BASE_URL = "http://localhost:3000";

export const fetchWithAuth = async (
  endpoint: string, 
  token: string,
  method: string = "GET",
  body?: any,
) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) throw new Error("Failed to fetch data");

  return response.json();
};

export const fetchUserData = (token: string) => fetchWithAuth("/users/me", token);

export const fetchUserWordsByStatus = (status: string, token: string) => 
  fetchWithAuth(`/user-words?status=${status}&due=true`, token);

export const saveUserWord = async (wordData: any, token: string) => {
  return fetchWithAuth("/userWords", token, "POST", wordData);
};