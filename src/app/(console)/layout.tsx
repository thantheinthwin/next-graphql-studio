export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-screen-2xl border">
      <div className="flex items-center justify-between border-b p-4">
        <h1 className="text-3xl font-bold">Next.js X GraphQL Apollo</h1>
      </div>
      {children}
    </div>
  );
}
{
}
