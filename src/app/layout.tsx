"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <html lang="en">
      <body className="bg-black text-white ">
        <div className="flex w-1/3 mx-auto items-center my-8">
          <div
            onClick={() => router.push("/")}
            className=" bg-slate-600 hover:bg-slate-500 p-7 rounded-md m-2"
          >
            <h1>Home</h1>
          </div>
          <div
            onClick={() => router.push("/new_group")}
            className="flex w=1/4 bg-slate-600 hover:bg-slate-500 p-7 m-2 rounded-md"
          >
            <h1>Nuevo Grupo</h1>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
