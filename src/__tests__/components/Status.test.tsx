import { render, screen } from '@testing-library/react';
import Status from '@/components/ui/Status';

describe('Status Component', () => {
  it('renders with active status', () => {
    render(<Status status="active" />);
    const status = screen.getByText('ACTIVE');
    expect(status).toBeInTheDocument();
    expect(status).toHaveClass('text-[#156E19]', 'bg-[#CFFFD1]');
  });

  it('renders with completed status', () => {
    render(<Status status="completed" />);
    const status = screen.getByText('COMPLETED');
    expect(status).toBeInTheDocument();
    expect(status).toHaveClass('text-[#156E19]', 'bg-[#CFFFD1]');
  });

  it('renders with pending status', () => {
    render(<Status status="pending" />);
    const status = screen.getByText('PENDING');
    expect(status).toBeInTheDocument();
    expect(status).toHaveClass('text-yellow-700', 'bg-yellow-100');
  });

  it('renders with canceled status', () => {
    render(<Status status="canceled" />);
    const status = screen.getByText('CANCELED');
    expect(status).toBeInTheDocument();
    expect(status).toHaveClass('text-[#BA1F1F]', 'bg-[#FFCFCF]');
  });

  it('renders with failed status', () => {
    render(<Status status="failed" />);
    const status = screen.getByText('FAILED');
    expect(status).toBeInTheDocument();
    expect(status).toHaveClass('text-[#BA1F1F]', 'bg-[#FFCFCF]');
  });

  it('renders with successful status', () => {
    render(<Status status="successful" />);
    const status = screen.getByText('SUCCESSFUL');
    expect(status).toBeInTheDocument();
    expect(status).toHaveClass('text-[#156E19]', 'bg-[#CFFFD1]');
  });

  it('applies common styles to all statuses', () => {
    render(<Status status="active" />);
    const status = screen.getByText('ACTIVE');
    expect(status).toHaveClass(
      'rounded-[4px]',
      'py-1',
      'font-J-Medium',
      'text-xs',
      'px-5',
      'inline-block',
      'w-auto'
    );
  });
});