import { createApp } from "./app";
import { logger } from "./config/observability";
import cors from "cors";

const main = async () => {
    const app = await createApp();
    const port = process.env.FUNCTIONS_CUSTOMHANDLER_PORT || process.env.PORT || 3100;
   // Use CORS middleware with specific configuration
  
    app.listen(port, () => {
        logger.info(`Started listening on port ${port}`);
    });
};

main();