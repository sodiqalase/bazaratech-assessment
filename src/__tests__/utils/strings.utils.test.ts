import { cn } from '@/utils/strings.utils';

describe('cn (className utility)', () => {
  it('merges class names', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  it('handles conditional classes', () => {
    expect(cn('base', { conditional: true })).toBe('base conditional');
    expect(cn('base', { conditional: false })).toBe('base');
  });

  it('handles array of classes', () => {
    expect(cn(['class1', 'class2'])).toBe('class1 class2');
  });

  it('handles undefined and null values', () => {
    expect(cn('class1', undefined, 'class2', null)).toBe('class1 class2');
  });

  it('merges Tailwind classes correctly', () => {
    expect(cn('p-4 bg-red-500', 'p-6')).toBe('bg-red-500 p-6');
    expect(cn('text-sm text-gray-500', 'text-lg')).toBe('text-gray-500 text-lg');
  });

  it('handles complex Tailwind combinations', () => {
    const result = cn(
      'flex items-center',
      'p-4 sm:p-6',
      'text-sm md:text-base',
      { 'bg-red-500': true, 'text-white': true, 'opacity-50': false }
    );
    expect(result).toBe('flex items-center p-4 sm:p-6 text-sm md:text-base bg-red-500 text-white');
  });

  it('handles multiple variant classes', () => {
    expect(cn('text-gray-500 hover:text-gray-700', 'text-blue-500')).toBe('hover:text-gray-700 text-blue-500');
  });

  it('handles responsive classes', () => {
    expect(cn('w-full md:w-1/2 lg:w-1/3', 'md:w-full')).toBe('w-full lg:w-1/3 md:w-full');
  });
});
