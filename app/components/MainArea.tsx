"use client";

import { useSidebar } from "../providers/SidebarContext";
import AdminTopBar from "./AdminTopBar";
import { cn } from "@/lib/utils";
export default function MainArea({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();

  return (
    <div
      data-col={isCollapsed ? "true" : "false"}
      className={cn(
        `flex min-h-screen flex-col ml-auto `,
        !isCollapsed ? "w-[calc(100%-240px)]" : "w-[calc(100%-64px)]",
      )}
    >
      <AdminTopBar />

      <main className="flex-1  px-8 py-7 ">{children}</main>
    </div>
  );
}
