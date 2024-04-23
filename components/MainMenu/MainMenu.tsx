"use client";

import { useEffect, useRef, useState } from "react";
import style from "./MainMenu.module.scss";
import { MainMenuProps } from "./MainMenu.props";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

export const menuItems = [
  { id: 0, name: "Наши проекты", link: "" },
  { id: 1, name: "О компании", link: "" },
  { id: 2, name: "Этапы работы", link: "" },
  { id: 3, name: "Ответы на вопросы", link: "" },
];

const dropdown = {
  initial: {
    y: -10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const menuItem = {
  initial: {
    y: -10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

export default function MainMenu({}: MainMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;

      if (dropdownRef.current !== null && isOpen) {
        if (!dropdownRef.current.contains(target)) {
          setIsOpen(false);
        }
      }
    };

    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", closeOnClickOutside);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("click", closeOnClickOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <div className={style.mainMenu}>
      <button
        className={cn(style.mainMenu__button, {
          [style.mainMenu__button_active]: isOpen,
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdown}
            initial={"initial"}
            animate={"animate"}
            exit={"initial"}
            className={style.mainMenu__dropdown}
            ref={dropdownRef}
          >
            {menuItems.map((item) => (
              <motion.a
                className={style.mainMenu__item}
                key={item.id}
                href={item.link}
                variants={menuItem}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
