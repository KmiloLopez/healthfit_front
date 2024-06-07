import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authSelectors, authOperations } from '../../redux/app/auth';
import { getIsModalOpen, openModalAction } from '../../redux/app/openModal';
import { useScrollLock } from '../../hooks/useScrollLock';

import { ReactPortal } from '../../components/ReactPortal';
import { ChoiceModal } from '../../components/ChoiceModal';
import IconBack from '../../assets/images/arrow-mobile.png';
import { useTranslation } from 'react-i18next';

import {
  Thumb,
  UserName,
  ExitButton,
  UserInfoThumb,
  BackButton,
} from './MobileNavigationPanel.styled';

export const MobileNavigationPanel = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(authSelectors.getUserName);
  const [isShowChoiceModal, setIsShowChoiceModal] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();
  const isMobileFormOpen = useSelector(getIsModalOpen);

  const choiceHandler = answer => {
    if (answer) {
      dispatch(authOperations.actionLogout()).then(() => {
        navigate('/login', { replace: true });
      });
    }
    setIsShowChoiceModal(false);
    unlockScroll();
  };

  const onClickGoBackHandler = () => {
    if (isMobileFormOpen) {
      dispatch(openModalAction());
    } else {
      navigate(-1);
    }
  };

  const onClickExit = () => {
    setIsShowChoiceModal(true);
    lockScroll();
  };

  return (
    <Thumb>
      {isShowChoiceModal && (
        <ReactPortal wrapperId="confirmation-modal">
          <ChoiceModal
            text={t('dywExit')}
            choiceHandler={choiceHandler}
          />
        </ReactPortal>
      )}

      <BackButton onClick={onClickGoBackHandler}>
        <img src={IconBack} alt="IconBack" />
      </BackButton>

      <UserInfoThumb>
        <UserName>{userName}</UserName>

        <ExitButton onClick={onClickExit}>{t('exit')}</ExitButton>
      </UserInfoThumb>
    </Thumb>
  );
};
