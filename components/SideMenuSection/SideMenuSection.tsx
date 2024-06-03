import {AnimatePresence, motion} from 'framer-motion';
import style from './SideMenuSection.module.scss';
import {SideMenuSectionProps} from './SideMenuSection.props';
import MenuButton from '../MenuButton/MenuButton';
import HeroMenu from '../HeroMenu/HeroMenu';
import SocialLink from '../SocialLink/SocialLink';
import cn from 'classnames';
import {useMediaQuery} from '@/hooks/use-media-query';

const menuVariants = {
  initial: {
    opacity: 0,
    width: 0,
    marginLeft: 0,
  },
  animate: {
    opacity: 1,
    width: 'auto',
    marginLeft: 10,
  },
};

export default function SideMenuSection({
  isMenuOpen,
  toggleHandler,
  closeHandler,
}: SideMenuSectionProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <motion.div
        className={style.sideMenu}
        variants={menuVariants}
        initial={'initial'}
        animate={isMenuOpen ? 'animate' : 'initial'}
        transition={{type: 'spring', duration: 0.7}}
      >
        <div className={style.sideMenu__menuButton}>
          <MenuButton onClick={toggleHandler} isOpen={isMenuOpen} />
        </div>

        <HeroMenu onClick={closeHandler} />

        <div className={style.sideMenu__menuContacts}>
          <div className={style.sideMenu__menuSocials}>
            {/*<span*/}
            {/*  className={cn(*/}
            {/*    style.sideMenu__actionItem,*/}
            {/*    style.sideMenu__actionItem_square,*/}
            {/*    style.sideMenu__actionItem_gray,*/}
            {/*  )}*/}
            {/*>*/}
            {/*  <SocialLink type={'whatsapp'} />*/}
            {/*</span>*/}
            <span
              className={cn(
                style.sideMenu__actionItem,
                style.sideMenu__actionItem_square,
                style.sideMenu__actionItem_gray,
              )}
            >
              <SocialLink type={'telegram'} />
            </span>
          </div>
          <a
            className={cn(
              style.sideMenu__actionItem,
              style.sideMenu__actionItem_gray,
              style.sideMenu__menuPhone,
            )}
            href='tel:84959028888'
          >
            +7 (495) 902-88-88
          </a>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className={style.sideMenu__menuBg}
            onClick={closeHandler}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
