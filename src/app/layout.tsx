import { ReactNode } from "react";
import "./globals.css";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <html>
        <head>
          <link rel="preload" as="image/svg+xml" href="/sprite.svg" />
          <title>Recipe</title>
        </head>
        <body>{children}</body>
      </html>
    </>
  );
};

export default RootLayout;
