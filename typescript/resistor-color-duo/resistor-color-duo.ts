export function decodedValue(bands: Array<string>): number {
  interface Color{
    [i: string]: number
  }

  const colors: Color = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  };

  return (colors[bands[0]] * 10) + (colors[bands[1]]);
}
