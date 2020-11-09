import { Environment as Env } from "./enum";
interface Log {
  title: string,
  content: string,
  backgroundColor: string,
}

enum Color {
  BLUE = '#1475b2',
  GREEN = '#42c02e',
}

function log(e: Log): void {
  const args: string[] = ["%c ".concat(e.title, " %c ").concat(e.content, " "), "padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: ".concat("#606060", ";"), "padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: ".concat(e.backgroundColor, ";")];
  console.log(...args)
}

/** welcome */
export default function () {
  log({ title: 'Environment', content: Env.PRO, backgroundColor: Color.GREEN })
  log({ title: 'NPM', content: '@tomatoes/logger', backgroundColor: Color.BLUE })
  log({ title: 'Build Date', content: '2020-11-04T05:36:24.439Z', backgroundColor: Color.BLUE })
  console.log('\n')
}