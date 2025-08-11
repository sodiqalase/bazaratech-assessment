"use client";
import AuthLayout from "@/components/layout/AuthLayout";
import Button from "@/components/ui/button";
import InputField from "@/components/ui/form/input-field";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { LoginSchema, LoginSchemaType } from "@/validation/auth.schema";
import { evaluateFormikError } from "@/utils/formik.utils";
import { Toast } from "@/utils/toast.util";
import { IAuthResponse } from "@/data/constant";
import { storageHelper } from "@/utils/storage.util";
import { useAuth } from "@/store/authStore";
const LoginView = () => {
    const [loading, setLoading] = React.useState(false);
    const { setUser, setToken } = useAuth();
    const router = useRouter();

    const form = useFormik<LoginSchemaType>({
        initialValues: {
            email: "",
            password: "",
        },
        validateOnMount: true,
        enableReinitialize: false,
        validationSchema: LoginSchema,
        onSubmit: async (values) => {
            setLoading(true);

            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            setLoading(false);

            if (res.ok) {
                const data = (await res.json()) as IAuthResponse;
                storageHelper.setCookieItem(data.token!);
                setUser(data.user);
                setToken(data.token!);
                Toast.success("Login successful", "Welcome back!");
                router.push("/dashboard");
                setLoading(false);
            } else {
                const data = await res.json();
                Toast.error(
                    "Error",
                    data.error || "Login failed. Please try again."
                );
                setLoading(false);
            }
        },
    });

    const { isValid, errors, touched, getFieldProps, handleSubmit, dirty } =
        form;
    const isButtonDisabled = !isValid || !dirty;

    return (
        <AuthLayout>
            <section className="bg-white flex w-[90vw] sm:w-[400px] items-center flex-col gap-y-6 rounded-[20px] px-6 py-[60px] shadow-[0px_8px_16px_0px_#0000000A]">
                <Image
                    src={"/svgs/logo.svg"}
                    alt="Bazara Logo"
                    width={86}
                    height={22}
                />
                <h3 className="text-baz-black font-bold text-2xl">
                    Login to your account
                </h3>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-y-4 w-full"
                >
                    <InputField
                        {...getFieldProps(`email`)}
                        error={evaluateFormikError(errors, touched, "email")}
                        type="email"
                        label="Email Address/Username"
                    />

                    <div>
                        <InputField
                            {...getFieldProps(`password`)}
                            error={evaluateFormikError(
                                errors,
                                touched,
                                "password"
                            )}
                            type="password"
                            label="Password"
                        />

                        <div className="mt-1 flex justify-end items-center">
                            <Link
                                href="#"
                                className="text-xs text-baz-primaryBlue700 mt-1"
                            >
                                Forgot password?
                            </Link>
                        </div>
                    </div>

                    <Button
                        loading={loading}
                        disabled={isButtonDisabled}
                        type="submit"
                        aria-disabled={isButtonDisabled}
                    >
                        Login
                    </Button>
                </form>
            </section>
        </AuthLayout>
    );
};

export default LoginView;
