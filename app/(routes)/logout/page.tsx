"use client";

import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("user", "");
    toast({
      title: "🔚 Sesion Terminada",
      variant: "default",
    });
    
    router.push("/")
    router.refresh();
  }, [router]);

  return null;
}
