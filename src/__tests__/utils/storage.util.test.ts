import { storageHelper } from '@/utils/storage.util';
import Cookies from 'js-cookie';

// Mock js-cookie
jest.mock('js-cookie', () => ({
  get: jest.fn(),
  set: jest.fn(),
  remove: jest.fn(),
}));

describe('storageHelper', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    // Clear localStorage
    localStorage.clear();
  });

  describe('Cookie Storage', () => {
    it('checks if cookie exists', () => {
      (Cookies.get as jest.Mock).mockReturnValue('test-token');
      expect(storageHelper.hasCookieItem('token')).toBe(true);
      expect(Cookies.get).toHaveBeenCalledWith('token');

      (Cookies.get as jest.Mock).mockReturnValue(null);
      expect(storageHelper.hasCookieItem('token')).toBe(false);
    });

    it('gets cookie value', () => {
      const testToken = 'test-token';
      (Cookies.get as jest.Mock).mockReturnValue(testToken);
      expect(storageHelper.getCookieItem('token')).toBe(testToken);
      expect(Cookies.get).toHaveBeenCalledWith('token');
    });

    it('sets cookie value', () => {
      const testToken = 'test-token';
      const expiresAt = new Date();
      
      // Test without expiry
      storageHelper.setCookieItem(testToken, 'token');
      expect(Cookies.set).toHaveBeenCalledWith('token', testToken, {
        secure: true,
        sameSite: 'strict'
      });

      // Test with expiry
      storageHelper.setCookieItem(testToken, 'token', expiresAt);
      expect(Cookies.set).toHaveBeenCalledWith('token', testToken, {
        secure: true,
        sameSite: 'strict',
        expires: expiresAt
      });
    });

    it('clears cookie value', () => {
      storageHelper.clearCookieItem('token');
      expect(Cookies.remove).toHaveBeenCalledWith('token');
    });
  });

  describe('Local Storage', () => {
    it('checks if item exists in localStorage', () => {
      localStorage.setItem('token', 'test-token');
      expect(storageHelper.hasItem('token')).toBe(true);

      localStorage.removeItem('token');
      expect(storageHelper.hasItem('token')).toBe(false);
    });

    it('gets item from localStorage', () => {
      const testToken = 'test-token';
      localStorage.setItem('token', testToken);
      expect(storageHelper.getItem('token')).toBe(testToken);
    });

    it('sets item in localStorage', () => {
      const testToken = 'test-token';
      storageHelper.setItem(testToken, 'token');
      expect(localStorage.getItem('token')).toBe(testToken);
    });

    it('clears item from localStorage', () => {
      localStorage.setItem('token', 'test-token');
      storageHelper.clearItem('token');
      expect(localStorage.getItem('token')).toBeNull();
    });
  });

  describe('Default Values', () => {
    it('uses "token" as default item for cookie operations', () => {
      storageHelper.hasCookieItem();
      expect(Cookies.get).toHaveBeenCalledWith('token');

      storageHelper.getCookieItem();
      expect(Cookies.get).toHaveBeenCalledWith('token');

      storageHelper.setCookieItem('test-token');
      expect(Cookies.set).toHaveBeenCalledWith('token', 'test-token', {
        secure: true,
        sameSite: 'strict'
      });

      storageHelper.clearCookieItem();
      expect(Cookies.remove).toHaveBeenCalledWith('token');
    });

    it('uses "token" as default item for localStorage operations', () => {
      storageHelper.hasItem();
      expect(localStorage.getItem('token')).toBeNull();

      storageHelper.getItem();
      expect(localStorage.getItem('token')).toBeNull();

      storageHelper.setItem('test-token');
      expect(localStorage.getItem('token')).toBe('test-token');

      storageHelper.clearItem();
      expect(localStorage.getItem('token')).toBeNull();
    });
  });
});
