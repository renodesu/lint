// import { copyFile, rmSync } from 'fs'
import { copyFile as asdf } from 'fs'
// console.log(copyFile)
import path from 'path'

const x = 666

export { path, x }

export interface Foo {
  lul: string
  lil: boolean
}

export class Kek {
  private foo = 1

  public static readonly myField1 = 1
}

interface Props {
  enabled: boolean
}

const foo = 1
const kek = {
  foo,
}

const Foo = (_props: Props) => {
  const arr: Array<{ id: number }> = []
  return (
    <div>
      foobar'asd
      <button>kek</button>
      {arr.map((item) => {
        return <div key={item.id}>foo</div>
      })}
    </div>
  )
}
