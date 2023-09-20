import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsPlusLg } from 'react-icons/bs';

import { diaryPerDayOperation, diarySelectors } from 'redux/app/diaryPerDay';
import { getIsModalOpen, openModalAction } from 'redux/app/openModal';

import useViewportDimensions from 'hooks/useViewportDimensions';

import {
  DiaryAddProductForm,
  DiaryDateCalendar,
  DiaryProductsList,
  Header,
  ReactPortal,
  SideBar,
} from 'components';

import {
  PageGrid,
  AddBtnMobile,
  SidebarWrap,
  ContainerDiary,
} from './DiaryPage.styled';

export default function DiaryPage() {
  const dispatch = useDispatch();

  const viewportDimensions = useViewportDimensions();
  const isMobileWidth = viewportDimensions.width <= 767;

  const currentDate = new Date().toLocaleDateString('ru-RU');
  const date = useSelector(diarySelectors.getCurrentDate);
  const isCurrentDay = date === currentDate;

  const isMobileFormOpen = useSelector(getIsModalOpen);

  useEffect(() => {
    dispatch(
      diaryPerDayOperation.actionGetProducts({ date: currentDate }),
    ).then(res => {
      if (typeof res.payload === 'string') {
        dispatch(
          diaryPerDayOperation.actionCreateProductsList({ date: currentDate }),
        );
      }
    });
  }, [currentDate, dispatch]);

  return (
    <>
      <Header localPage="DiaryPage" />

      {!isMobileFormOpen && (
        <PageGrid>
          <ContainerDiary>
            <DiaryDateCalendar />

            {isCurrentDay ? (
              isMobileWidth ? (
                <>
                  <DiaryProductsList />

                  <AddBtnMobile onClick={() => dispatch(openModalAction(true))}>
                    <BsPlusLg size={14} />
                  </AddBtnMobile>
                </>
              ) : (
                <>
                  <DiaryAddProductForm />
                  <DiaryProductsList />
                </>
              )
            ) : (
              <>
                <h2>Alimentos que has consumido hoy:</h2>
                <DiaryProductsList />
              </>
            )}
          </ContainerDiary>

          <SidebarWrap>
            <SideBar date={date} />
          </SidebarWrap>
        </PageGrid>
      )}

      {isMobileFormOpen && (
        <ReactPortal wrapperId="mobile-add-product-form">
          <DiaryAddProductForm />
        </ReactPortal>
      )}
    </>
  );
}
