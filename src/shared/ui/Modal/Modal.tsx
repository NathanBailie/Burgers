import { type Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useRef, useState, type MutableRefObject, useEffect } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { orderActions } from 'features/Order/model/slices/orderSlice';
import { getModalContiion, getModalText } from 'features/Order';

export const Modal = memo(() => {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const ANIM_DELAY = 300;

    const dispatch = useDispatch();
    const modalCondition = useSelector(getModalContiion);
    const modalText = useSelector(getModalText);

    const onCloseModal = useCallback(() => {
        dispatch(orderActions.closeModal());
    }, [dispatch]);

    const onContentClick = (e: any) => {
        e.stopPropagation();
    };

    const closeHandler = useCallback(() => {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            onCloseModal();
            setIsClosing(false);
        }, ANIM_DELAY);
    }, [onCloseModal]);

    useEffect(() => {
        return () => {
            clearTimeout(timerRef.current);
        };
    }, [modalCondition]);

    const mods: Mods = {
        [cls.opened]: modalCondition,
        [cls.isClosing]: isClosing
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [])}>
                <div className={cls.Modal__window} onClick={(e) => { onContentClick(e) }}>
                    <span>{modalText}</span>
                    <button onClick={closeHandler}>OK</button>
                </div>
            </div>
        </Portal>
    );
});

Modal.displayName = 'Modal';
