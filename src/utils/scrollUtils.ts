import { NavigateFunction } from "react-router-dom";

export const handleNavigate = (section: string, targetPage: string, navigate: NavigateFunction) => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  const isLoggedIn = Boolean(token);

  let finalPage = targetPage;
  if (!isLoggedIn && targetPage !== "/") {
    finalPage = "/";
  }

  if (window.location.pathname !== finalPage) {
    navigate(finalPage, { replace: true });
    setTimeout(() => {
      scrollToSection(section);
    }, 500);
  } else {
    scrollToSection(section);
  }
};

const scrollToSection = (section: string) => {
  setTimeout(() => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      element.classList.add("highlight");
      setTimeout(() => {
        element.classList.remove("highlight");
      }, 8000);
    }
  }, 300);
};
