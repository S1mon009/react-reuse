import { Layout } from "@/components/layouts/layout";
import { cn } from "@/lib/utils";

interface sidebarProps {
  children: Readonly<React.ReactNode>;
  className?: string;
}

interface sidebarContentProps extends sidebarProps {}

interface sidebarHeaderProps extends sidebarProps {}

/**
 * Sidebar component renders a container for the sidebar content.
 *
 * Props:
 * - children
 *
 * @param {sidebarProps} props - Contains the children elements and an optional className for additional styling.
 * @returns {JSX.Element} The rendered Sidebar component, which wraps the provided children elements.
 */
export function Sidebar({ className, children }: sidebarProps): JSX.Element {
  return (
    <Layout type="div" className={cn("w-full px-4 pb-4", className)}>
      {children}
    </Layout>
  );
}

/**
 * SidebarContent component renders the content section of the sidebar.
 *
 * @param {sidebarContentProps} props - Contains the children elements and an optional className for additional styling.
 * @returns {JSX.Element} The rendered SidebarContent component, which wraps the provided children elements.
 */
export function SidebarContent({
  children,
  className,
}: sidebarContentProps): JSX.Element {
  return (
    <Layout type="div" className={cn(className)}>
      {children}
    </Layout>
  );
}

/**
 * SidebarHeader component renders the header section of the sidebar.
 *
 * @param {sidebarHeaderProps} props - Contains the children elements and an optional className for additional styling.
 * @returns {JSX.Element} The rendered SidebarHeader component, typically used for section titles.
 */
export function SidebarHeader({
  children,
  className,
}: sidebarHeaderProps): JSX.Element {
  return (
    <Layout type="div" className={`font-semibold py-2 ${className}`}>
      {children}
    </Layout>
  );
}
