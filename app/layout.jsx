import "./globals.css";
import Header from "./components/Header.jsx";

export const metadata = {
  title: "KASHflow",
  description: "All your transactions, receipts and expenses in one smart app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
