import { Inter ,Outfit} from "next/font/google";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import { Providers } from "./store/Providers";
const out = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Filey",
  description: "Upload and share file with your friends",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
    <ClerkProvider>
    <html lang="en">
      <body className={out.className}>
        {children}
        </body>
    </html>
    </ClerkProvider>
    </Providers>

  );
}
