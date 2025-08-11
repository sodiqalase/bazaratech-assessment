import { render, screen } from '@testing-library/react';
import CardWrapper from '@/components/ui/CardWrapper';

// Mock the icons
jest.mock('@/components/ui/Action', () => () => <div data-testid="action-icon" />);

describe('CardWrapper Component', () => {
  it('renders children content', () => {
    render(
      <CardWrapper title="Test Title">
        <div>Test Content</div>
      </CardWrapper>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies default styles', () => {
    const { container } = render(
      <CardWrapper title="Test Title">
        <div>Test Content</div>
      </CardWrapper>
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('rounded-xl', 'border', 'p-4', 'border-baz-border', 'bg-white');
  });

  it('renders with title', () => {
    render(
      <CardWrapper title="Test Title">
        <div>Test Content</div>
      </CardWrapper>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders with action icon by default', () => {
    render(
      <CardWrapper title="Test Title">
        <div>Test Content</div>
      </CardWrapper>
    );
    expect(screen.getByTestId('action-icon')).toBeInTheDocument();
  });

  it('renders multiple children', () => {
    render(
      <CardWrapper title="Test Title">
        <div>First Child</div>
        <div>Second Child</div>
      </CardWrapper>
    );
    expect(screen.getByText('First Child')).toBeInTheDocument();
    expect(screen.getByText('Second Child')).toBeInTheDocument();
  });

  it('renders title with correct styles', () => {
    render(
      <CardWrapper title="Test Title">
        <div>Test Content</div>
      </CardWrapper>
    );
    const title = screen.getByText('Test Title');
    expect(title).toHaveClass('text-baz-primaryText', 'font-bold', 'text-sm');
  });

  it('renders header with correct styles', () => {
    render(
      <CardWrapper title="Test Title">
        <div>Test Content</div>
      </CardWrapper>
    );
    const header = screen.getByText('Test Title').closest('div')?.parentElement;
    expect(header).toHaveClass('flex', 'border-b', 'border-[#F5F5F5]', 'pb-3', 'mb-3', 'justify-between', 'items-center');
  });
});