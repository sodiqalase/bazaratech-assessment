import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="bg-[url('/pngs/login-background.png')] flex items-center  justify-center bg-cover bg-center w-screen min-h-screen sm:min-h-0 h-auto sm:h-screen ">
			{children}
		</main>
	);
};

export default AuthLayout;
