import { Color } from "./enum";

interface Log {
  title: string,
  content: string,
  backgroundColor: string,
}

function log(e: Log): void {
  const args: string[] = ["%c ".concat(e.title, " %c ").concat(e.content, " "), "padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: ".concat("#606060", ";"), "padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: ".concat(e.backgroundColor, ";")];
  console.log(...args)
}

/**
 * 声明
 */
export default function () {
  // log({ title: 'Environment', content: Env.PRO, backgroundColor: Color.LIME })
  log({ title: 'NPM', content: '@tomatoes/logger', backgroundColor: Color.BLUE })
}