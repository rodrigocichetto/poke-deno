import { Router } from "https://deno.land/x/oak/mod.ts";

import FirstGenerationController from "../controllers/FirstGenerationController.ts";

const router = new Router();

router.get("/api/poke-deno", FirstGenerationController.index);

export default router;
