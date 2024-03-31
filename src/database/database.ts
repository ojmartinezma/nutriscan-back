import { Sequelize } from "sequelize";
import 'dotenv/config';

const sequelize = new Sequelize(
    process.env.DB_DB as string,
    process.env.DB_USER as string,
    process.env.DB_PASS,
    {
        host:process.env.DB_HOST,
        dialect:'postgres',
        dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          }
    }
    );

export { sequelize }