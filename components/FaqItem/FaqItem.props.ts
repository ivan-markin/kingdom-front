import { iFaqItem } from "@/interfaces/FaqItem.interface";

export interface FaqItemProps {
  item: iFaqItem;
  isOpen: boolean;
  onClick: () => void;
}
