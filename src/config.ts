import { Color, FontSize } from "./enum";
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
