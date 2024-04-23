"use client";

import style from "./FaqItem.module.scss";
import { FaqItemProps } from "./FaqItem.props";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

export default function FaqItem({ item, onClick, isOpen }: FaqItemProps) {
  return (
    <div className={style.faqItem}>
      <div className={style.faqItem__content}>
        <div
          className={cn(style.faqItem__title, {
            [style.faqItem__title_isOpen]: isOpen,
          })}
        >
          <h3 onClick={onClick}>{item.attributes.title}</h3>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.span
              className={style.faqItem__text}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              {item.attributes.text}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <button
        className={cn(style.faqItem__button, {
          [style.faqItem__button_active]: isOpen,
        })}
        onClick={onClick}
      >
        {isOpen ? "–" : "+"}
      </button>
    </div>
  );
}
