import { evaluateFormikError } from '@/utils/formik.utils';
import { FormikErrors, FormikTouched } from 'formik';

interface TestForm {
  field: string;
  nested: {
    field: string;
  };
  array: Array<{
    field: string;
  }>;
}

describe('evaluateFormikError', () => {
  it('returns undefined when errors is undefined', () => {
    const result = evaluateFormikError<TestForm>(
      undefined,
      {} as FormikTouched<TestForm>,
      'field'
    );
    expect(result).toBeUndefined();
  });

  it('returns undefined when touched is undefined', () => {
    const result = evaluateFormikError<TestForm>(
      {} as FormikErrors<TestForm>,
      undefined,
      'field'
    );
    expect(result).toBeUndefined();
  });

  it('returns undefined when field is not touched', () => {
    const errors: FormikErrors<TestForm> = { field: 'error' };
    const touched: FormikTouched<TestForm> = { field: false };
    const result = evaluateFormikError<TestForm>(errors, touched, 'field');
    expect(result).toBeUndefined();
  });

  it('returns undefined when field has no error', () => {
    const errors: FormikErrors<TestForm> = {};
    const touched: FormikTouched<TestForm> = { field: true };
    const result = evaluateFormikError<TestForm>(errors, touched, 'field');
    expect(result).toBeUndefined();
  });

  it('returns error message when field is touched and has error', () => {
    const errors: FormikErrors<TestForm> = { field: 'error message' };
    const touched: FormikTouched<TestForm> = { field: true };
    const result = evaluateFormikError<TestForm>(errors, touched, 'field');
    expect(result).toBe('error message');
  });

  it('handles nested fields', () => {
    const errors: FormikErrors<TestForm> = {
      nested: { field: 'error message' }
    };
    const touched: FormikTouched<TestForm> = {
      nested: { field: true }
    };
    const result = evaluateFormikError<TestForm>(errors, touched, 'nested.field');
    expect(result).toBe('error message');
  });

  it('handles array fields', () => {
    const errors: FormikErrors<TestForm> = {
      array: [{ field: 'error message' }]
    };
    const touched: FormikTouched<TestForm> = {
      array: [{ field: true }]
    };
    const result = evaluateFormikError<TestForm>(errors, touched, 'array[0].field');
    expect(result).toBe('error message');
  });

  it('returns undefined for non-existent fields', () => {
    const errors: FormikErrors<TestForm> = { field: 'error' };
    const touched: FormikTouched<TestForm> = { field: true };
    const result = evaluateFormikError<TestForm>(errors, touched, 'nonexistent');
    expect(result).toBeUndefined();
  });

  it('handles null values', () => {
    const result = evaluateFormikError<TestForm>(null, null, 'field');
    expect(result).toBeUndefined();
  });

  it('handles empty objects', () => {
    const errors: FormikErrors<TestForm> = {};
    const touched: FormikTouched<TestForm> = {};
    const result = evaluateFormikError<TestForm>(errors, touched, 'field');
    expect(result).toBeUndefined();
  });
});