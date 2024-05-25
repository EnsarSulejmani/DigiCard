"use client";
import { useEffect, useState } from "react";

const Display: React.FC = () => {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    // Ensure execution only on the client-side
    const isClient = typeof window !== "undefined";
    if (isClient) {
      // Dynamically import useRouter to avoid NextRouter not mounted error
      import("next/router")
        .then((routerModule) => {
          const router = routerModule.useRouter();
          setId(router.query.id as string | null);
        })
        .catch((error) => {
          console.error("Error importing useRouter:", error);
        });
    }
  }, []);

  return <div>Display for company with ID {id}</div>;
};

export default Display;
