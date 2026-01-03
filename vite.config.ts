
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all envs regardless of the `VITE_` prefix.
  // Fix: Cast process to any to avoid "Property 'cwd' does not exist on type 'Process'" error in environments with restricted process types.
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // Fix: Also cast process to any here to prevent potential type errors when accessing environment variables.
      'process.env.API_KEY': JSON.stringify(env.API_KEY || (process as any).env.API_KEY)
    },
    build: {
      outDir: 'dist',
      sourcemap: false
    }
  };
});
