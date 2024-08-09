import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTransition from "../components/pageTransition";
import StairTransition from "@/components/stairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: "My Portfolio",
  description: "Bilal Ahmad (Software Developer)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
