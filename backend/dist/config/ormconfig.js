"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1',
    database: 'animation_db',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    logging: true,
};
//# sourceMappingURL=ormconfig.js.map