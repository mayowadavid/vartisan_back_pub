"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = require("dotenv");
const config = () => {
    dotenv.config({ path: '.env' });
    return {
        database: {
            type: 'postgres',
            host: process.env.DB_HOST,
            port: parseInt(process.env.host_connect),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            synchronize: true,
            ssl: true,
            extra: {
                ssl: {
                    rejectUnauthorized: false,
                },
            },
            entities: ['dist/**/*.entity.js'],
        },
    };
};
exports.config = config;
//# sourceMappingURL=config.js.map