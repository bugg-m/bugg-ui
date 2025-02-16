import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ rollupTypes: true, exclude: ['**/*.stories.tsx'] }),
    tsconfigPaths(),
    svgr({ include: '**/*.svg' }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/main.ts'),
      name: 'BuggUi',
      fileName: 'bugg-ui',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
