import "./globals.css";
export const metadata = { title: "Masha Amjad - Portfolio", description: "Frontend Developer from JPJ" };
export default function RootLayout({ children }) {
  return (<html lang="en"><body>{children}</body></html>);
}