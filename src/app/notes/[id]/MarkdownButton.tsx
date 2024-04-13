export default function MarkdownButton({
  onClick,
  children,
  role,
}: Readonly<{
  onClick: () => void;
  children: React.ReactNode;
  role: "primary" | "secondary";
}>) {
  const primaryClass =
    "bg-emerald-700 text-white rounded-lg px-4 py-2 hover:bg-emerald-800";
  const secondaryClass =
    "bg-white text-emerald-700 rounded-lg px-4 py-2 hover:bg-emerald-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500";
  return (
    <button
      onClick={onClick}
      className={role === "primary" ? primaryClass : secondaryClass}
    >
      {children}
    </button>
  );
}
