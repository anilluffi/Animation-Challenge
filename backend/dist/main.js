"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://localhost:3001',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    app.use((req, res, next) => {
        if (req.url.startsWith('/api')) {
            next();
        }
        else {
            req.url = `/api${req.url}`;
            next();
        }
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map