import modulesConfig from "./modules2.json";
import { initializeRemotes } from "./loadRemote";

export async function bootstrap() {
    await initializeRemotes(modulesConfig);
}