import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], 
  server: {
      historyApiFallback: true, // Tambahin ini
      host: true,  // Agar bisa diakses pakai IP
      port: 5173,  // Bisa diganti sesuai kebutuhan
  },
  resolve: {
    alias: { 
        '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
    }
  }
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://103.169.73.3:3000',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // } 
  
})
