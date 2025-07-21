import "./globals.css";

export const metadata = {
  title: "Plataformania - Ranking",
  description: "Veja o ranking de pontuação do jogo Plataformania",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
