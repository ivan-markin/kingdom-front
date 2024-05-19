import {iKeyFeature} from '@/interfaces/KeyFeature.interface';

export interface KeyFeaturesItemProps {
  item: iKeyFeature;
  index: number;
  onMouseOver: () => void;
}
