export async function main() {
  const { TsconfigPathsPlugin } = await import('tsconfig-paths-webpack-plugin');

  console.log(TsconfigPathsPlugin);
}

main();
