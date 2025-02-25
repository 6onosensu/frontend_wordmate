const API_BASE_URL = "http://localhost:3000/auth";

export const authUser = async (email: string, password: string, mode: "login" | "register") => {
  const endpoint = mode === "login" ? "login" : "register";

  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || `${mode} failed`);

  return data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
};
