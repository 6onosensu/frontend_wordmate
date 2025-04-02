import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useSnackbar } from "@/context/SnackbarContext";
import { resetUserPassword, updateUserProfile } from "@/services/authService";
import { useUser } from "@/context/UserContext";

export const useEditProfile = () => {
  const { user, refreshUser } = useUser();
  const { token } = useAuth();
  const { showSnackbar } = useSnackbar();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [countryName, setCountryName] = useState("");
  const [number, setNumber] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (!user) return;

    setEmail(user.email);
    setName(user.name);
    setPictureUrl(user.pictureUrl || "");
    setCountryName(user.countryName || "");
    setNumber(user.number || "");
  }, [user]);

  const updateEmail = async () => {
    if (!email || email === user?.email) {
      showSnackbar("Please enter a new email address!", "warning");
      return;
    }
    const res = await updateUserProfile(token!, { email });
    showSnackbar(res.message, res.success ? "success" : "error");
    if (res.success) {
      await refreshUser();
    }
    return true;
  };

  const updateUserInfo = async () => {
    if (!name) {
      showSnackbar("Please enter your full name!", "warning");
      return;
    }
    const res = await updateUserProfile(
      token!, 
      {
        name, pictureUrl, countryName, number,
      }
    );
    showSnackbar(res.message, res.success ? "success" : "error");
    if (res.success) {
      await refreshUser();
    }
    return true;
  };

  const updatePassword = async () => {
    if (!newPassword || !confirmPassword) {
      showSnackbar("All fields are required!", "error");
      return;
    }
    if (newPassword !== confirmPassword) {
      showSnackbar("Passwords do not match!", "error");
      return;
    }
    const res = await resetUserPassword(token!, newPassword);
    showSnackbar(res.message, res.success ? "success" : "error");
    return true;
  };


  return {
    email,
    setEmail,
    name,
    setName,
    pictureUrl,
    setPictureUrl,
    countryName,
    setCountryName,
    number,
    setNumber,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    updateEmail,
    updateUserInfo,
    updatePassword
  };
};
