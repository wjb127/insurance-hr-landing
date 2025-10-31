import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Insurance HR - 전문가와 함께하는 보험의 미래",
  description: "보험업계 조직 소개 및 채용 랜딩 페이지 - 함께 성장하는 전문가 그룹",
  keywords: "보험, 채용, HR, 인사, 입사지원, 보험업계",
  openGraph: {
    title: "Insurance HR - 전문가와 함께하는 보험의 미래",
    description: "보험업계 조직 소개 및 채용 랜딩 페이지",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="font-pretendard antialiased" style={{ fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}

