import DarkSwitch from "@ui/DarkSwitch";
import SocialIcons from "@ui/SocialIcons";
import Footer from "layout/footer";
import Header from "layout/header";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#D4ECDD] dark:bg-[#214F50] min-h-screen relative">
        <DarkSwitch />
        <div className="h-screen absolute top-0 bottom-0 left-0 right-0 z-[1]">
          <div className="bg-pattern h-screen dark:bg-pattern-dark opacity-[0.1] bg-cover"></div>
          <div className="absolute inset-x-0 bottom-0 flex justify-center w-full h-screen pt-32 pb-8 pointer-events-none bg-gradient-to-t from-secondary-main dark:from-primary-main"></div>
        </div>
        <main className="font-inconsolata pt-12 relative z-[3]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
