import { memo } from 'react';
import './Error.scss';
import ErrorIcon from 'shared/assets/images/error.png';

export const Error = memo(() => {
    return (
        <div className="Error">
            <h2 className="Error__text">
                Something went wrong! <br />
                Try to reload your page please!
            </h2>
            <img
                src={ErrorIcon}
                alt="error-icon"
                className="Error__image"
            />
        </div >
    );
});

Error.displayName = 'Error';
