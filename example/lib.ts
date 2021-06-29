export interface IOpts {
  greeting?: string
  name?: string
}

export const greet = ({greeting, name}: IOpts) => {
  console.log(`${greeting}, ${name}!`)
}
