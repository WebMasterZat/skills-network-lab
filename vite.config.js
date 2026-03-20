import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/skills-network-lab", 
  plugins: [react()],
})
