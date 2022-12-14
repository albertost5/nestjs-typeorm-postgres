import { DataSource, DataSourceOptions } from "typeorm";

export const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: process.env.NODE_ENV == 'dev',
    // Don't use in prod
} as DataSourceOptions);

