export declare const config: () => {
    database: {
        type: string;
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
        synchronize: boolean;
        ssl: boolean;
        extra: {
            ssl: {
                rejectUnauthorized: boolean;
            };
        };
        entities: string[];
    };
};
