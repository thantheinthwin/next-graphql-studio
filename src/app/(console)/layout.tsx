import { ThemeToggleButton } from "@/components/ThemeToggleButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-screen-2xl border">
      <div className="flex items-center justify-between border-b p-4">
        <h1 className="text-2xl font-bold">Next.js X GraphQL Apollo</h1>
        <ThemeToggleButton />
      </div>
      {children}
    </div>
  );
}
{
}
