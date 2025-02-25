const API_BASE_URL = "http://localhost:3000/auth";

export const loginUser = async (email: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Login failed");

  return data;
};

export const registerUser = async (
  email: string,
  password: string,
  name: string,
  phone?: string,
  country?: string,
  profilePictureUrl?: string
) => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, phone, country, profilePictureUrl }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Registration failed");

  return data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
};
