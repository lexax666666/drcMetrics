import Navbar from "@/components/landing/Navbar";

export default function AnalyticsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
