export const getEnv = (key: string): string => {
  const env = process.env[key];

  if (!env) {
    throw new Error(`Env ${key} not found`);
  }

  return env;
};
