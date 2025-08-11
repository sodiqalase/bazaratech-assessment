import { render, screen } from '@testing-library/react';
import Spinner from '@/components/ui/Spinner';

describe('Spinner Component', () => {
  it('renders with default props', () => {
    render(<Spinner />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveAttribute('width', '16');
    expect(spinner).toHaveAttribute('height', '16');
  });

  it('renders with custom size', () => {
    render(<Spinner size="lg" />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveAttribute('width', '32');
    expect(spinner).toHaveAttribute('height', '32');
  });

  it('renders with custom color', () => {
    const customColor = '#ff0000';
    render(<Spinner colour={customColor} />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveAttribute('stroke', customColor);
  });

  it('has correct SVG attributes', () => {
    render(<Spinner />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveAttribute('viewBox', '0 0 38 38');
    expect(spinner).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
  });

  it('renders animation path', () => {
    render(<Spinner />);
    const animationPath = screen.getByTestId('spinner-animation');
    expect(animationPath).toBeInTheDocument();
    expect(animationPath).toHaveAttribute('d', 'M36 18c0-9.94-8.06-18-18-18');
  });

  it('renders with proper animation attributes', () => {
    render(<Spinner />);
    const animation = screen.getByTestId('spinner-animate');
    expect(animation).toHaveAttribute('attributeName', 'transform');
    expect(animation).toHaveAttribute('type', 'rotate');
    expect(animation).toHaveAttribute('dur', '1s');
    expect(animation).toHaveAttribute('repeatCount', 'indefinite');
  });
});