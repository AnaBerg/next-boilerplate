import { getEnv } from '@/helpers/getEnv';

describe('getEnv', () => {
  beforeEach(() => {
    delete process.env.test;
  });
  it('should return the env value', () => {
    process.env.test = 'value';
    const env = getEnv('test');

    expect(env).toMatch('value');
  });
  it('should throw error if env has no value', () => {
    try {
      getEnv('test');
    } catch (error) {
      const e = error as Error;
      expect(e.message).toMatch('Env test not found');
    }
  });
});
