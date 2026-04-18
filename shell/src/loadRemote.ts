import { registerRemotes } from "@module-federation/runtime";

export type RemoteConfig = {
  type: string;
  name: string;
  module: string;
  route: string;
  url?: string;
};

let initialized = false;

export async function initializeRemotes(remotes: RemoteConfig[]) {
  if (initialized) return;

    registerRemotes(
    remotes
      .filter((r) => r.type === "external")
      .map((r) => ({
        name: r.name,
        entry: r.url!,
        type: "module",
        entryGlobalName: r.name,
        shareScope: "default",
        crossorigin: "anonymous",
      })),
  );

  initialized = true;
}
