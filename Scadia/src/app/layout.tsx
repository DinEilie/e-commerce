import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./shared/Navbar/Navbar";
import Footer from "./shared/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Scadia",
	description: "Your professional warehouse.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<section id="navbar">
					<Navbar />
				</section>
				<section id="body" className="mt-[157px] bg-neutral-100">
					{children}
				</section>
				<section id="footer" className="bg-neutral-800">
					<Footer />
				</section>
			</body>
		</html>
	);
}
