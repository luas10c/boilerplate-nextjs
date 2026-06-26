import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true
  },
  test: {
    include: [
      'tests/unit/**/*.{test,spec}.{js,ts,jsx,tsx}',
      'tests/integration/**/*.{test,spec}.{js,ts,jsx,tsx}'
    ],
    setupFiles: ['./tests/setup.ts'],
    environment: 'jsdom',

    // ── Performance ─────────────────────────────────────────
    pool: 'threads',
    isolate: false,
    fileParallelism: true,
    maxWorkers: 2,
    disableConsoleIntercept: true,
    reporter: 'dot'
  }
})
