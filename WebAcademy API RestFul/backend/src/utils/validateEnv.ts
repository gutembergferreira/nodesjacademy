import { cleanEnv, port, num, str } from "envalid";

function validateEnv() {
  cleanEnv(process.env, {
    PORT: port(),
    NODE_ENV: str(),    
    BCRYPT_ROUNDS: num()
  });
}

export default validateEnv;
