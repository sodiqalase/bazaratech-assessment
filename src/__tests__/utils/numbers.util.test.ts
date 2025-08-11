import { formatWithCommas } from '@/utils/numbers.util';

describe('formatWithCommas', () => {
  it('formats numbers with commas', () => {
    expect(formatWithCommas(1000)).toBe('1,000');
    expect(formatWithCommas(1000000)).toBe('1,000,000');
    expect(formatWithCommas(1234567.89)).toBe('1,234,567.89');
  });

  it('handles string numbers', () => {
    expect(formatWithCommas('1000')).toBe('1,000');
    expect(formatWithCommas('1000000')).toBe('1,000,000');
    expect(formatWithCommas('1234567.89')).toBe('1,234,567.89');
  });

  it('handles small numbers', () => {
    expect(formatWithCommas(0)).toBe('0');
    expect(formatWithCommas(999)).toBe('999');
    expect(formatWithCommas(-1000)).toBe('-1,000');
  });

  it('returns original value for non-numeric strings', () => {
    expect(formatWithCommas('abc')).toBe('abc');
    expect(formatWithCommas('123abc')).toBe('123abc');
  });

  it('handles decimal numbers', () => {
    expect(formatWithCommas(1000.5)).toBe('1,000.5');
    expect(formatWithCommas(1000.05)).toBe('1,000.05');
    expect(formatWithCommas('1000.005')).toBe('1,000.005');
  });

  it('handles negative numbers', () => {
    expect(formatWithCommas(-1000)).toBe('-1,000');
    expect(formatWithCommas('-1000000')).toBe('-1,000,000');
    expect(formatWithCommas(-1234567.89)).toBe('-1,234,567.89');
  });
});
