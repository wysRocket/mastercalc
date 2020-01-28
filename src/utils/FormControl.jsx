import React from 'react';

export const Input = ({input, meta, ...props}) => {

const hasError = meta.touched && meta.error;

return (
<>
    <input {...input} {...props} className={"form-control" + ' ' + 
        (hasError ? "is-invalid" : "" )} />
    { hasError &&
    <div className="invalid-feedback">
        Обязательное поле
    </div> }
</>

)
}

export const Select = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    
    return (
    <>
        <select {...input} {...props} className={"form-control" + ' ' + 
            (hasError ? "is-invalid" : "" )} />
        { hasError &&
        <div className="invalid-feedback">
            Обязательное поле
        </div> }
    </>
    
    )
    }