import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginView from '@/modules/login';
import { Toast } from '@/utils/toast.util';
import { useRouter } from 'next/navigation';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

// Mock the toast utility
jest.mock('@/utils/toast.util', () => ({
  Toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

// Mock storage helper
jest.mock('@/utils/storage.util', () => ({
  storageHelper: {
    setCookieItem: jest.fn(),
  },
}));

// Mock auth store
jest.mock('@/store/authStore', () => ({
  useAuth: () => ({
    setUser: jest.fn(),
    setToken: jest.fn(),
  }),
}));

describe('LoginView Component', () => {
  const mockRouter = {
    push: jest.fn(),
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders login form correctly', () => {
    render(<LoginView />);
    
    // Check for main elements
    expect(screen.getByText('Login to your account')).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address\/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByText(/Forgot password\?/i)).toBeInTheDocument();
  });

  it('validates email format', async () => {
    render(<LoginView />);
    
    const emailInput = screen.getByLabelText(/Email Address\/Username/i);
    await act(async () => {
      await userEvent.type(emailInput, 'invalid-email');
      fireEvent.blur(emailInput);
    });

    await waitFor(() => {
      expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
    });
  });

  it('validates password length', async () => {
    render(<LoginView />);
    
    const passwordInput = screen.getByLabelText('Password');
    await act(async () => {
      await userEvent.type(passwordInput, 'short');
      fireEvent.blur(passwordInput);
    });

    await waitFor(() => {
      expect(screen.getByText(/Password must be at least 8 characters long/i)).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ token: 'mock-token', user: { id: 1, name: 'Test User' } }),
    };
    (global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse);

    render(<LoginView />);
    
    // Fill in form
    await act(async () => {
      await userEvent.type(screen.getByLabelText(/Email Address\/Username/i), 'test@example.com');
      await userEvent.type(screen.getByLabelText('Password'), 'password123');
    });
    
    // Submit form
    const submitButton = screen.getByRole('button', { name: /login/i });
    await act(async () => {
      await userEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'test@example.com',
          password: 'password123',
        }),
      });
      expect(mockRouter.push).toHaveBeenCalledWith('/dashboard');
      expect(Toast.success).toHaveBeenCalledWith('Login successful', 'Welcome back!');
    });
  });

  it('handles login failure', async () => {
    const errorMessage = 'Invalid credentials';
    const mockResponse = {
      ok: false,
      json: () => Promise.resolve({ error: errorMessage }),
    };
    (global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse);

    render(<LoginView />);
    
    // Fill in form
    await act(async () => {
      await userEvent.type(screen.getByLabelText(/Email Address\/Username/i), 'test@example.com');
      await userEvent.type(screen.getByLabelText('Password'), 'password123');
    });
    
    // Submit form
    const submitButton = screen.getByRole('button', { name: /login/i });
    await act(async () => {
      await userEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(Toast.error).toHaveBeenCalledWith('Error', errorMessage);
      expect(mockRouter.push).not.toHaveBeenCalled();
    });
  });

  it('disables submit button when form is invalid', async () => {
    render(<LoginView />);
    
    const submitButton = screen.getByRole('button', { name: /login/i });
    expect(submitButton).toHaveAttribute('disabled');

    // Fill in invalid data
    await act(async () => {
      await userEvent.type(screen.getByLabelText(/Email Address\/Username/i), 'invalid-email');
      await userEvent.type(screen.getByLabelText('Password'), 'short');
    });

    expect(submitButton).toHaveAttribute('disabled');

    // Fill in valid data
    await act(async () => {
      await userEvent.clear(screen.getByLabelText(/Email Address\/Username/i));
      await userEvent.type(screen.getByLabelText(/Email Address\/Username/i), 'test@example.com');
      await userEvent.clear(screen.getByLabelText('Password'));
      await userEvent.type(screen.getByLabelText('Password'), 'password123');
    });

    await waitFor(() => {
      expect(submitButton).not.toHaveAttribute('disabled');
    });
  });
});