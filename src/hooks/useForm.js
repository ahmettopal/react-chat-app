/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const getChangedObject = (obj, value) => {
  const newObj = {};
  const keys = Object.keys(obj);
  keys.forEach(key => (newObj[key] = value));
  return newObj;
};

const useForm = (initialState, validationSchema) => {
  const [values, _setValues] = useState(initialState);
  const [errors, setErrors] = useState(getChangedObject(initialState, ''));
  const [touched, setTouched] = useState(getChangedObject(initialState, false));
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isReseted, setIsReseted] = useState(false);

  useEffect(() => {
    validate();
  }, [values]);

  useEffect(() => {
    if (isReseted) {
      setErrors(getChangedObject(initialState, ''));
      setTouched(getChangedObject(initialState, false));
      setIsValid(false);
      setIsSubmitted(false);
      setIsReseted(false);
    }
  }, [isReseted]);

  const validate = async () => {
    if (!validationSchema) return;
    try {
      await validationSchema.validate(values, {
        abortEarly: false,
      });
      setErrors(getChangedObject(initialState, ''));
      setIsValid(true);
    } catch (error) {
      const errors = {};
      error.inner.forEach(({ path, message }) => {
        errors[path] = message;
      });
      setErrors(errors);
      setIsValid(false);
    }
  };

  const setValues = e => {
    _setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

    const newTouched = { ...touched, [e.target.name]: true };
    setTouched(newTouched);
  };

  const setValuesDirectly = obj => {
    _setValues({
      ...values,
      ...obj,
    });

    const touches = Object.keys(obj).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});

    const newTouched = { ...touched, ...touches };
    setTouched(newTouched);
  };

  const onFormSubmit = () => {
    setIsSubmitted(true);
  };

  const clearErrors = () => {
    setErrors(getChangedObject(initialState, ''));
  };

  const resetValues = () => {
    _setValues(getChangedObject(initialState, ''));
    setIsReseted(true);
  };

  const setError = obj => {
    setErrors({ ...errors, ...obj });
  };

  return {
    values,
    setValues,
    errors,
    isValid,
    isSubmitted,
    onFormSubmit,
    clearErrors,
    resetValues,
    setError,
    setValuesDirectly,
  };
};

export default useForm;