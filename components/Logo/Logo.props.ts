export enum LogoTypeEnum {
  MAIN = 'main',
  INNER = 'inner',
}

export interface LogoProps {
  className?: string;
  type?: LogoTypeEnum;
}
