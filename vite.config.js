import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://tobiasalvarezg.github.io/react-rick-morty-api",
  plugins: [react()],
})
