// app/(main)/layout.tsx

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}