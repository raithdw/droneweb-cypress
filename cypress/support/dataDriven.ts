export function generateTests<
  T extends Record<string, any>
>(
  baseTitle: string,
  dataset: T,
  testFn: <K extends keyof T>(key: K, value: T[K]) => void,
  getLabel?: <K extends keyof T>(key: K, value: T[K]) => string
) {
  (Object.keys(dataset) as Array<keyof T>).forEach((key) => {
    const value = dataset[key];
    const label = getLabel ? getLabel(key, value) : String(key);

    it(`${baseTitle} ${label}`, () => {
      testFn(key, value);
    });
  });
}