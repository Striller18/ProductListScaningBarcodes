import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import dotenv from "dotenv";

// dotenv.config();

// https://vitejs.dev/config/
export default ({ mode }) =>{
  // process.env = {...process.env, ...loadEnv('dev', process.cwd())};
  return defineConfig({
    plugins: [react()],
    envDir: "./"
  });
}

