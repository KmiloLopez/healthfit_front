import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {authOperations} from '../../redux/app/auth';
import {authSelectors} from '../../redux/app/auth';
import useViewportDimensions from '../../hooks/useViewportDimensions';

import { Logo } from '../../components/Logo';
import { Burger } from '../../components/Burger';
import { MobileNavigationPanel } from '../../components/MobileNavigationPanel';
import { ReactPortal } from '../../components/ReactPortal';
import { ChoiceModal } from '../../components/ChoiceModal';
import { NavMenuModal } from '../../components/NavMenuModal';

import {
  Thumb,
  NavThumb,
  UserThumb,
  LogoutBtn,
  TabletNavigationThumb,
  NavLinkStyled,
  DesktopNavigationThumb,
  UserName,
  LogoStyled,
} from './AuthNav.styled';

export const AuthNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const viewportDimensions = useViewportDimensions();
  const isMobileView = viewportDimensions.width <= 767;

  const isDesktopView = viewportDimensions.width >= 1280;
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const userName = useSelector(authSelectors.getUserName);
  // const userAvatar = useSelector(authSelectors.getUserAvatar);
  const [isShowChoiceModal, setIsShowChoiceModal] = useState(false);

  const choiceHandler = answer => {
    if (answer) {
      dispatch(authOperations.actionLogout()).then(() => {
        navigate('/login', { replace: true });
      });
    }
    setIsShowChoiceModal(false);
  };

  return (
    <>
      <Thumb>
        <DesktopNavigationThumb>
          <LogoStyled>
            <Logo />
          </LogoStyled>

          {isDesktopView && (
            <NavThumb>
              
              <NavLinkStyled to="/diary">Agenda</NavLinkStyled>
              <NavLinkStyled to="/calculator">Calculadora</NavLinkStyled>
            </NavThumb>
          )}
        </DesktopNavigationThumb>

        <TabletNavigationThumb>
          {!isMobileView && (
            <UserThumb>
              {/* <button type="button" onClick={() => {}}>
                <img src={userAvatar} alt="" width={50} height={50} />
              </button> */}

              <UserName>{userName}</UserName>
              <LogoutBtn
                type="button"
                onClick={() => setIsShowChoiceModal(true)}
              >
                Salir
              </LogoutBtn>
            </UserThumb>
          )}

          {!isDesktopView && (
            <Burger handleOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
          )}
        </TabletNavigationThumb>
      </Thumb>

      {isMobileView && <MobileNavigationPanel />}

      {isShowChoiceModal && (
        <ReactPortal wrapperId="confirmation-modal">
          <ChoiceModal
            text={'Desea salir de su cuenta?'}
            choiceHandler={choiceHandler}
          />
        </ReactPortal>
      )}

      {isOpenMenu && (
        <ReactPortal wrapperId="nav-menu-modal">
          <NavMenuModal handleMenuOpen={setIsOpenMenu} />
        </ReactPortal>
      )}
    </>
  );
};
