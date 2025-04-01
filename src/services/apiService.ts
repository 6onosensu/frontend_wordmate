import { FormattedDataType } from "@/types/wordType";

const API_BASE_URL = "http://localhost:3000";

export const fetchWithAuth = async (
  endpoint: string, 
  token: string,
  method: string = "GET",
  body?: any,
) => {
  const options: RequestInit = {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    ...(body ? { body: JSON.stringify(body) } : {}), 
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const fetchUserData = (token: string) => fetchWithAuth("/users/me", token);

export const fetchUserWordsByStatus = (status: string, token: string) => {
  const encodedStatus = encodeURIComponent(status)
  return fetchWithAuth(
    `/userWords/status/filter?status=${encodedStatus}&due=true`, 
    token
  );
}

export const saveUserWord = async (
  wordData: FormattedDataType, 
  token: string
) => {
  return fetchWithAuth("/userWords/", token, "POST", wordData);
};

export const updateUserWordRepetition = async (
  wordId: number, 
  repetitionCount: number, 
  token: string,
) => {
  return fetchWithAuth(
    `/userWords/${wordId}`, 
    token, 
    "PATCH", 
    { repetitionCount }
  );
}

export const getRandomWords = async (
  count: number,
  token: string,
): Promise<[]> => {
  return fetchWithAuth(
    `/meanings/random?count=${count}`, 
    token
  );
}