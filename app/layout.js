import "remixicon/fonts/remixicon.css"
import "./globals.css";

export const metadata = {
  title: "Ushpae",
  description: "Get ytou on shape uhn shapt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cyberpunk">
      <body>
        {children}
      </body>
    </html>
  );
}
