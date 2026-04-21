import modulesConfig from "./modules.json";
import { initializeRemotes } from "./loadRemote";

export async function bootstrap() {
    await initializeRemotes(modulesConfig);
}