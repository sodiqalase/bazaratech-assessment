import { getIn, FormikErrors, FormikTouched } from 'formik';

export const evaluateFormikError = <T = any>(
    errors: FormikErrors<T> | undefined | null,
    touched: FormikTouched<T> | undefined | null,
    name: string
): string | undefined => {
    const isTouched = getIn(touched, name);
    const error = getIn(errors, name);
    if (isTouched && error) {
        return error;
    }
    return undefined;
};
