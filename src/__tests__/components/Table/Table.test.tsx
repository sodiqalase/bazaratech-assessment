import { render, screen, fireEvent } from '@testing-library/react';
import Table from '@/components/ui/Table/Table';

// Mock the Loader component
jest.mock('@/components/ui/Loader', () => () => (
  <div data-testid="loader" role="status" aria-label="Loading" />
));

// Mock the icons
jest.mock('@/components/icons/EnvelopIcon', () => () => (
  <div data-testid="envelope-icon" aria-hidden="true" />
));

describe('Table Component', () => {
  const mockColumns = [
    {
      header: 'Name',
      view: (row: any) => row.name,
    },
    {
      header: 'Age',
      view: (row: any) => row.age,
      rowStyle: 'font-bold',
    },
  ];

  const mockData = [
    { name: 'John Doe', age: 25 },
    { name: 'Jane Smith', age: 30 },
  ];

  it('renders table headers correctly', () => {
    render(<Table columns={mockColumns} tableData={mockData} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
  });

  it('renders table data correctly', () => {
    render(<Table columns={mockColumns} tableData={mockData} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });

  it('shows loading state', () => {
    render(<Table columns={mockColumns} isLoading={true} />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('shows empty state when no data', () => {
    render(<Table columns={mockColumns} tableData={[]} />);
    expect(screen.getByTestId('envelope-icon')).toBeInTheDocument();
    expect(screen.getByText(/No Item primaryText/i)).toBeInTheDocument();
    expect(screen.getByText(/Request found will be displayed here/i)).toBeInTheDocument();
  });

  it('applies custom row styles', () => {
    render(<Table columns={mockColumns} tableData={mockData} />);
    const ageCells = screen.getAllByText(/\d+/); // Find cells with numbers (ages)
    ageCells.forEach(cell => {
      expect(cell.closest('td')).toHaveClass('font-bold');
    });
  });

  it('handles row click events', () => {
    const mockClickAction = jest.fn();
    render(<Table columns={mockColumns} tableData={mockData} clickRowAction={mockClickAction} />);
    
    const firstRow = screen.getByText('John Doe').closest('tr');
    fireEvent.click(firstRow!);
    
    expect(mockClickAction).toHaveBeenCalledWith(mockData[0], 0);
  });

  it('adds hover class to rows when clickRowAction is provided', () => {
    const mockClickAction = jest.fn();
    render(<Table columns={mockColumns} tableData={mockData} clickRowAction={mockClickAction} />);
    
    const rows = screen.getAllByRole('row').slice(1); // Skip header row
    rows.forEach(row => {
      expect(row.className).toContain('hover:bg-baz-primaryBlue50');
      expect(row.className).toContain('cursor-pointer');
    });
  });

  it('renders complex header content', () => {
    const complexColumns = [
      {
        header: <div data-testid="complex-header">Complex Header</div>,
        view: (row: any) => row.name,
      },
    ];
    
    render(<Table columns={complexColumns} tableData={mockData} />);
    expect(screen.getByTestId('complex-header')).toBeInTheDocument();
  });

  it('maintains column alignment', () => {
    render(<Table columns={mockColumns} tableData={mockData} />);
    
    const headers = screen.getAllByRole('columnheader');
    const cells = screen.getAllByRole('cell');
    
    headers.forEach(header => {
      expect(header.className).toContain('text-left');
    });
    
    cells.forEach(cell => {
      expect(cell.className).toContain('text-left');
    });
  });

  it('handles undefined view function gracefully', () => {
    const columnsWithoutView = [
      {
        header: 'Test',
      },
    ];
    
    render(<Table columns={columnsWithoutView} tableData={mockData} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('applies correct table wrapper styles', () => {
    render(<Table columns={mockColumns} tableData={mockData} />);
    const wrapper = screen.getByRole('table').closest('div');
    expect(wrapper?.className).toContain('border');
    expect(wrapper?.className).toContain('border-baz-border');
    expect(wrapper?.className).toContain('rounded-lg');
  });

  it('applies correct header styles', () => {
    render(<Table columns={mockColumns} tableData={mockData} />);
    const header = screen.getAllByRole('rowgroup')[0];
    expect(header.className).toContain('bg-baz-primaryBlue600');
  });
});