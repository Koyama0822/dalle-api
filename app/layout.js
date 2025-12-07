export const metadata = {
  title: "DALL·E API",
  description: "Free DALL·E generator deployed on Vercel"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", padding: 40 }}>
        {children}
      </body>
    </html>
  );
}
