import {ReactNode} from 'react';

export interface SwitchButtonProps {
  children: ReactNode;
  onClick: () => void;
  isActive?: boolean;
}
