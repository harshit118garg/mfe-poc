import React, { useEffect, useState } from "react";
import { loadRemote } from "@module-federation/runtime";
import { ErrorFallbackPage } from "./pages";

interface RemoteComponentProps {
  name: string;
  module: string;

  [key: string]: any;
}

type RemoteModule<T> = {
  default?: T;
} & T;

export async function loadRemoteComponent<T = any>(remoteName: string, module: string): Promise<T> {
  const mod = await loadRemote(`${remoteName}/${module}`);

  const typedModule = mod as RemoteModule<T>;

  return (typedModule.default ?? typedModule) as T;
}

const RemoteComponent: React.FC<RemoteComponentProps> = ({ name, module }) => {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadRemoteComponent(name, module)
      .then((comp) => setComponent(() => comp))
      .catch((err) => {
        console.error("REMOTE LOAD ERROR:", err);
        setError("Failed to load remote");
      });
  }, [name, module]);

  if (error) return <ErrorFallbackPage />;
  if (!Component) return <div>Loading remote...</div>;

  return <Component />;
};

export default RemoteComponent;
