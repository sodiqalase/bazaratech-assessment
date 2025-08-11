import { Toast } from '@/utils/toast.util';
import toast from 'react-hot-toast';
import { render } from '@testing-library/react';

// Mock react-hot-toast
jest.mock('react-hot-toast', () => ({
  custom: jest.fn(),
}));

describe('Toast Utility', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const testTitle = 'Test Title';
  const testMessage = 'Test Message';

  it('calls toast.custom with success configuration', () => {
    Toast.success(testTitle, testMessage);
    expect(toast.custom).toHaveBeenCalledTimes(1);
    
    // Get the callback function passed to toast.custom
    const callback = (toast.custom as jest.Mock).mock.calls[0][0];
    
    // Render the toast component
    const { container } = render(callback({ visible: true }));
    
    // Verify the content
    expect(container.textContent).toContain(testTitle);
    expect(container.textContent).toContain(testMessage);
    
    // Verify the success icon
    const icon = container.querySelector('.text-green-500');
    expect(icon).toBeInTheDocument();
  });

  it('calls toast.custom with error configuration', () => {
    Toast.error(testTitle, testMessage);
    expect(toast.custom).toHaveBeenCalledTimes(1);
    
    const callback = (toast.custom as jest.Mock).mock.calls[0][0];
    const { container } = render(callback({ visible: true }));
    
    expect(container.textContent).toContain(testTitle);
    expect(container.textContent).toContain(testMessage);
    
    const icon = container.querySelector('.text-red-500');
    expect(icon).toBeInTheDocument();
  });

  it('calls toast.custom with info configuration', () => {
    Toast.info(testTitle, testMessage);
    expect(toast.custom).toHaveBeenCalledTimes(1);
    
    const callback = (toast.custom as jest.Mock).mock.calls[0][0];
    const { container } = render(callback({ visible: true }));
    
    expect(container.textContent).toContain(testTitle);
    expect(container.textContent).toContain(testMessage);
    
    const icon = container.querySelector('.text-blue-500');
    expect(icon).toBeInTheDocument();
  });

  it('calls toast.custom with warning configuration', () => {
    Toast.warning(testTitle, testMessage);
    expect(toast.custom).toHaveBeenCalledTimes(1);
    
    const callback = (toast.custom as jest.Mock).mock.calls[0][0];
    const { container } = render(callback({ visible: true }));
    
    expect(container.textContent).toContain(testTitle);
    expect(container.textContent).toContain(testMessage);
    
    const icon = container.querySelector('.text-yellow-500');
    expect(icon).toBeInTheDocument();
  });

  it('applies animation classes based on visibility', () => {
    Toast.info(testTitle, testMessage);
    expect(toast.custom).toHaveBeenCalledTimes(1);
    
    const callback = (toast.custom as jest.Mock).mock.calls[0][0];
    
    // Test visible state
    const { container: visibleContainer } = render(callback({ visible: true }));
    const visibleToast = visibleContainer.firstChild as HTMLElement;
    expect(visibleToast.className).toContain('animate-enter');
    
    // Test hidden state
    const { container: hiddenContainer } = render(callback({ visible: false }));
    const hiddenToast = hiddenContainer.firstChild as HTMLElement;
    expect(hiddenToast.className).toContain('animate-leave');
  });

  it('renders toast with correct layout structure', () => {
    Toast.info(testTitle, testMessage);
    expect(toast.custom).toHaveBeenCalledTimes(1);
    
    const callback = (toast.custom as jest.Mock).mock.calls[0][0];
    const { container } = render(callback({ visible: true }));
    const toastContainer = container.firstChild as HTMLElement;
    
    expect(toastContainer.className).toContain('max-w-sm');
    expect(toastContainer.className).toContain('w-full');
    expect(toastContainer.className).toContain('bg-white');
    expect(toastContainer.className).toContain('shadow-lg');
    expect(toastContainer.className).toContain('rounded-lg');
    expect(toastContainer.className).toContain('pointer-events-auto');
    expect(toastContainer.className).toContain('flex');
    expect(toastContainer.className).toContain('p-2');
    expect(toastContainer.className).toContain('gap-3');
    expect(toastContainer.className).toContain('items-center');
  });

  it('renders title and message with correct styles', () => {
    Toast.info(testTitle, testMessage);
    expect(toast.custom).toHaveBeenCalledTimes(1);
    
    const callback = (toast.custom as jest.Mock).mock.calls[0][0];
    const { container } = render(callback({ visible: true }));
    
    const titleElement = container.querySelector('.font-semibold');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement?.textContent).toBe(testTitle);
    expect(titleElement).toHaveClass('block', 'mb-1', 'text-sm');
    
    const messageElement = container.querySelector('.text-sm:not(.font-semibold)');
    expect(messageElement).toBeInTheDocument();
    expect(messageElement?.textContent).toBe(testMessage);
  });
});