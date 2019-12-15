
import server from "./index";
import { getExample } from "./Controllers/appController";

// server.METHOD(PATH, HANDLER)
server.get("/api/example", getExample);

