const API_BASE_URL = "http://localhost:3000";

export const fetchWithAuth = async (endpoint: string, token: string) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Failed to fetch data");

  return response.json();
};

export const fetchUserData = (token: string) => fetchWithAuth("/users/me", token);

export const fetchUserWordsByStatus = (status: string, token: string) => 
  fetchWithAuth(`/user-words?status=${status}&due=true`, token);

