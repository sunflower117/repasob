import {createPool} from "mysql2/promise";
const pool = createPool({
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_HOST,
    host:process.env.DB_PORT,
    database:DB_NAME
});
