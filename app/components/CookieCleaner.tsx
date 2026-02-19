"use client";

import { useEffect } from "react";

export function CookieCleaner() {
  useEffect(() => {
    // Function to delete the cookie
    const deleteCookie = (name: string) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
    };

    // Delete i18n_redirected cookie
    deleteCookie("i18n_redirected");
    
    // Also try to remove it if it was set with SameSite=Lax/Strict by overwriting it
    // This is a best-effort attempt to clear the console error source
  }, []);

  return null;
}
