import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import macrosPlugin from "vite-plugin-babel-macros"

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-macros', 'babel-plugin-styled-components'],
      },
    }),
    macrosPlugin(),
  ],
  define: {
    'process.env': {}
  }
})