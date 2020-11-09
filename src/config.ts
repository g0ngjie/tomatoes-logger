import { Color, FontSize, Level } from "./enum";
import { Logger } from "./interface";

export const InfoSet: Logger = {
  disabled: false,
  color: Color.BLACK,
  fontSize: FontSize.NORMAL
}

export const DebugSet: Logger = {
  disabled: false,
  color: Color.GRAY,
  fontSize: FontSize.NORMAL
}

export const WarnSet: Logger = {
  disabled: false,
  color: Color.ORANGE,
  fontSize: FontSize.NORMAL
}

export const ErrorSet: Logger = {
  disabled: false,
  color: Color.RED,
  fontSize: FontSize.NORMAL
}

export const LevelToArray: string[] = [
  Level.INFO, Level.DEBUG, Level.WARN, Level.ERROR,
]

export const KeyToLevel: any = {
  [Level.DEBUG]: [Level.DEBUG],
  [Level.INFO]: [Level.INFO],
  [Level.WARN]: [Level.WARN],
  [Level.ERROR]: [Level.ERROR],
}