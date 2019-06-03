export interface IOpts {
  greeting?: string
  name?: string
}

export const greet = ({greeting, name}: IOpts) => {
  // tslint:disable-next-line:no-console
  console.log(`${greeting}, ${name}!`)
}
