import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/ui/button';

describe('Button Component', () => {
  it('renders a button with text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('renders a button with icon', () => {
    const TestIcon = () => <span data-testid="test-icon">Icon</span>;
    render(
      <Button icon={<TestIcon />}>
        Click Me
      </Button>
    );
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('renders a button with icon on the right', () => {
    const TestIcon = () => <span data-testid="test-icon">Icon</span>;
    render(
      <Button icon={<TestIcon />} iconPosition="right">
        Click Me
      </Button>
    );
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies the correct classes based on props', () => {
    render(
      <Button fullWidth variant="primary" buttonSize="medium">
        Click Me
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('w-full'); // Full width class
    expect(button).toHaveClass('bg-baz-primaryBlue'); // Primary button variant class
    expect(button).toHaveClass('h-[40px]'); // Medium button size class
  });

  it('disables the button when "disabled" prop is passed', () => {
    render(<Button disabled>Click Me</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders a Next.js Link when "renderAs" is "next_link"', () => {
    render(
      <Button renderAs="next_link" href="/test">
        Next Link
      </Button>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test');
  });

  it('renders an external link when "renderAs" is "external_link"', () => {
    render(
      <Button renderAs="external_link" href="https://external.com" newTab>
        External Link
      </Button>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://external.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('fires onClick event when button is clicked', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click Me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    render(<Button loading>Click Me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(screen.getByText('Click Me')).toHaveClass('opacity-50');
  });

  it('prevents click when disabled', () => {
    const onClickMock = jest.fn();
    render(<Button disabled onClick={onClickMock}>Click Me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClickMock).not.toHaveBeenCalled();
  });
});