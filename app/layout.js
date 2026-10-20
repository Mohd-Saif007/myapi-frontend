export const metadata = {
  title: "Saif Students App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif", background: "#f4f4f8" }}>
        {children}
      </body>
    </html>
  );
}
