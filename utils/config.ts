import * as dotenv from 'dotenv';
import * as path from 'path';
const environment = process.env.ENV || 'dev';
dotenv.config({
path: path.resolve(__dirname, `../env/.env.${environment}`),
});
export const Config = {
baseUrl: process.env.BASE_URL || 'https://saucedemo.com',
environment: environment.toUpperCase(),
};