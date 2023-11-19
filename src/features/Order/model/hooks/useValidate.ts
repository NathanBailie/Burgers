import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { getName, getOrder, getPhone } from '../selectors/getOrderSelectors';
import type { Field } from '../types/OrderSchema';
import { orderActions } from '../slices/orderSlice';
import { fetchOrders } from '../services/fetchOrders';

interface useValidateTypes {
    validateFields: () => void
}

const useValidate = (): useValidateTypes => {
    const dispatch = useDispatch<AppDispatch>();

    const order = useSelector(getOrder);
    const name = useSelector(getName);
    const phone = useSelector(getPhone);

    const validateField = (stateField: string, field: Field) => {
        if (stateField === '') {
            changFieldsError(field, true);
            return true;
        }

        changFieldsError(field, false);
        return false;
    }

    const changFieldsError = (fieldName: Field, condition: boolean) => {
        dispatch(orderActions.changeFieldError({ fieldName, condition }))
    };

    const validateFields = () => {
        const orderError = validateField(order, 'order');
        const nameError = validateField(name, 'name');
        const phoneError = validateField(phone, 'phone');

        console.log(orderError, nameError, phoneError);

        if (!orderError && !nameError && !phoneError) {
            dispatch(fetchOrders(order));
            dispatch(orderActions.resetOrderFiels())
        }
    }

    return {
        validateFields
    }
};

export default useValidate;
