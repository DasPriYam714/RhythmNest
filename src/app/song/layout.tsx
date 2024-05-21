

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        
      
      <h2>Inner Nav</h2>
        {children}
        
    </html>
  );
}
