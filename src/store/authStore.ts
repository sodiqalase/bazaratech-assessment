"use client";
import { create } from "zustand";
import { useRouter } from "next/navigation";
import { storageHelper } from "@/utils/storage.util";

interface AuthState {
	user: { email: string; role: string; name: string } | null;
	token: string | null;
	setUser: (user: AuthState["user"]) => void;
	setToken: (data: string | null) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	user: null,
	token: null,
	setUser: (user) => set({ user }),
	setToken: (token) => set({ token }),
	logout: () => {
		set({ user: null });
		set({ token: null });
	},
}));

export const useAuth = () => {
	const router = useRouter();

	const { user, setUser, logout, token, setToken } = useAuthStore();
	const handleLogout = () => {
		logout();
        storageHelper.clearCookieItem("token");
		router.push("/login");
	};

	return {
		user,
		token,
		setToken,
		setUser,
		logout: handleLogout,
	};
};
