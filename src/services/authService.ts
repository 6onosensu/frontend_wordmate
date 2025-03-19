const API_BASE_URL = "http://localhost:3000/auth";

const apiRequest = async (
  endpoint: string, 
  method: "POST" | "PATCH" | "DELETE", 
  body?: object,
  token?: string
) => {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }), 
    },
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
  return apiRequest(
    "register", 
    "POST", 
    { email, password, name, phone, country, pictureUrl }
  );
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

export const deleteUserAccount = async () => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  if (!token) {
    return { success: false, message: "User not authenticated." }; 
  }

  return handleApiRequest("delete-account", {}, token, "DELETE"); 
};

export const updateUserProfile = async (profileData: object) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return { success: false, message: "User not authenticated." }; 
  }

  return handleApiRequest("update-profile", profileData, token, "PATCH");
};

const handleApiRequest = async (
  endpoint: string, 
  body: object = {}, 
  token?: string, 
  method: "POST" | "PATCH" | "DELETE" = "POST"
) => {
  try {
    const data = await apiRequest(endpoint, method, body, token);
    return { success: true, message: data.message || "Request successful." };
  } catch (error: any) {
    return { success: false, message: error.message || "Something went wrong!" };
  }
};
