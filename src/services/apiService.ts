const API_BASE_URL = "http://localhost:3000";

export const fetchUserData = async (token: string) => {
  const response = await fetch(`${API_BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Failed to fetch user data");

  return response.json();
};