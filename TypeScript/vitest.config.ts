import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    include: ['test/vitest/**/*.{spec,test}.{js,ts}'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html']
    }
  },
});
