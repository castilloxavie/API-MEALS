import env from "env-var"

import "dotenv/config"

export const envs = {
    PORT: env.get("PORT").required().asPortNumber(),
    NODE_ENV: env.get("NODE_ENV").required().asString(),
    DB_URI: env.get("DB_URI").required().asString(),
    SECRET_JWT_SEED: env.get("SECRET_JWT_SEED").required().asString(),
    JWT_EXPIRE_IN: env.get("JWT_EXPIRE_IN").required().asString()
}