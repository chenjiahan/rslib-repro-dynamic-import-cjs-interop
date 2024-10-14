import { moduleTools, defineConfig } from '@modern-js/module-tools';

export default defineConfig({
  buildConfig: [
    {
      format: 'esm',
      target: 'es2021',
      dts: false,
    },
    {
      format: 'cjs',
      target: 'es2021',
      autoExtension: true,
      dts: false,
    },
  ],
  plugins: [moduleTools()],
});
