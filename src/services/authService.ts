const API_BASE_URL = "http://localhost:3000/auth";

const apiRequest = async (
  endpoint: string, 
  method: "POST" | "GET" | "PUT" | "DELETE" = "POST", 
  body?: object
) => {
  const options: RequestInit = {
    method,
    headers: { "Content-Type": "application/json" },
    ...(body && { body: JSON.stringify(body) }),
  };

  const response = await fetch(`${API_BASE_URL}/${endpoint}`, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
};

export const loginUser = async (email: string, password: string) => {
  const data = await apiRequest("login", "POST", { email, password });
  return data.access_token;
};

export const registerUser = async (
  email: string,
  password: string,
  name: string,
  phone?: string,
  country?: string,
  pictureUrl?: string
) => {
  return apiRequest("register", "POST", { email, password, name, phone, country, pictureUrl });
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
};

export const sendPasswordResetEmail = async (email: string) => {
  return handleApiRequest("forgot-password", { email });
}

export const resetUserPassword = async (token: string, newPassword: string) => {
  return handleApiRequest("reset-password", { token, newPassword });
};

const handleApiRequest = async (endpoint: string, body: object) => {
  try {
    const data = await apiRequest(endpoint, "POST", body);
    return { success: true, message: data.message || "Request successful." };
  } catch (error: any) {
    return { success: false, message: error.message || "Something went wrong!" };
  }
};
