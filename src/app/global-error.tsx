"use client";

import Image from "next/image";
import { useEffect } from "react";
import tools from "../assets/icons/tools.svg";
import { Inter } from "next/font/google";
import ToolIcon from "@/components/icons/ToolsIcon";

const interFont = Inter({
    weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-inter",
    subsets: ["latin"],
});

export default function GlobalError({
    error,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (
        <html lang="en">
            <body>
                <div
                    className={`${interFont.variable} h-screen px-5 w-screen grid justify-center items-center font-sans`}
                >
                    <div className="flex flex-col items-center">
                        <ToolIcon />
                        <h6 className="text-[20px] text-sm font-medium text-primary">
                            We encountered an error while loading this page
                        </h6>
                        <p className="text-primary text-sm max-w-[300px] mt-2 text-center">
                            If issue persist after reloading, kindly contact our
                            support team.
                        </p>
                    </div>
                </div>
            </body>
        </html>
    );
}
