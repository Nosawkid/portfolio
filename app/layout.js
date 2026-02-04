import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});



export const metadata = {
  title: "Muhammed Yaseen Sidhik | Friendly Neighbourhood Developer",
  description: "Portfolio of Muhammed Yaseen Sidhik, a Full Stack Developer & MCA Student at RIT. Building scalable SaaS applications, IoT solutions, and GenAI integrations.",
  keywords: ["Full Stack Developer", "IoT", "Next.js", "React", "MCA Student", "Portfolio", "Bangalore"],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.variable}  antialiased min-h-screen`}
      >
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
