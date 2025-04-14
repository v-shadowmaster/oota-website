"use client";

import { useToast } from "@/hooks/use-toast";

export function ExampleToast() {
  const { toast } = useToast();

  return (
    <button
      onClick={() => {
        toast({
          title: "Scheduled",
          description: "Your order has been scheduled",
        });
      }}
    >
      Show Toast
    </button>
  );
}
