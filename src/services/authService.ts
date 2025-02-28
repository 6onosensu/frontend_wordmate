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

  return data.access_token;
};

export const registerUser = async (
  email: string,
  password: string,
  name: string,
  phone?: string,
  country?: string,
  pictureUrl?: string,
) => {
  const requestBody: Record<string, any> = {
    email, password, 
    name, phone, country, pictureUrl
  };

  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody), 
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Registration failed");
  return data.access_token;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
};
