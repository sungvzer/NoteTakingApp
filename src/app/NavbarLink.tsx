import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLink(props: { href: string; title: string }) {
  const pathName = usePathname();

  const inactiveClasses = [
    "block",
    "py-2",
    "px-3",
    "md:p-0",
    "text-gray-900",
    "rounded",
    "hover:bg-gray-100",
    "md:hover:bg-transparent",
    "md:hover:text-emerald-700",
    "md:dark:hover:text-emerald-500",
    "dark:text-white",
    "dark:hover:bg-gray-700",
    "dark:hover:text-white",
    "md:dark:hover:bg-transparent",
    "dark:border-gray-700",
  ];
  const activeClasses = [
    "block",
    "py-2",
    "px-3",
    "md:p-0",
    "text-white",
    "bg-emerald-700",
    "rounded",
    "md:bg-transparent",
    "md:text-emerald-700",
    "md:dark:text-emerald-500",
  ];

  const isActive = pathName === props.href;

  return (
    <Link
      href={props.href}
      className={isActive ? activeClasses.join(" ") : inactiveClasses.join(" ")}
      aria-current="page"
    >
      {props.title}
    </Link>
  );
}
