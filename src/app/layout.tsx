// app/layout.tsx
import "../styles/globals.css";
import Script from "next/script";

export const metadata = {
  title: 'Website ADEM',
  description: 'Informasi Program Afirmasi Pendidikan Menengah',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="font-sans antialiased bg-white text-gray-800">
          {children}
        {/* Tidak ada Header/Footer di sini, hanya children */}
      </body>
    </html>
  );
}