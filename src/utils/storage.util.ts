import Cookies from "js-cookie";


const cookieOptions = { secure: true, sameSite: "strict" as const };

type storageItem = "token" | "refreshToken";

const localStorage: Partial<Storage> =
    typeof window !== "undefined" ? window?.localStorage : {};

 export const storageHelper = {
    // Cookies Storage

    hasCookieItem: (item: storageItem = "token") => {
        return !!Cookies.get(item);
    },
    getCookieItem: (item: storageItem = "token") => {
        return Cookies.get(item) || null;
    },
    clearCookieItem: (item: storageItem = "token") => {
        Cookies.remove(item);
    },
    setCookieItem: (
        val: string,
        item: storageItem = "token",
        expiresAt?: Date
    ) => {
        Cookies.set(
            item,
            val ?? "",
            expiresAt
                ? {
                      expires: expiresAt,
                      ...cookieOptions,
                  }
                : cookieOptions
        );
    },

    // Local Storage

    hasItem: (item: storageItem = "token") => {
        return !!localStorage.getItem?.(item);
    },
    getItem: (item: storageItem = "token") => {
        return localStorage.getItem?.(item) || null;
    },
    clearItem: (item: storageItem = "token") => {
        localStorage.removeItem?.(item);
    },
    setItem: (val: string,item: storageItem = "token", ) => {
        localStorage.setItem?.(
            item,
            val ?? ""
        );
    },
};


