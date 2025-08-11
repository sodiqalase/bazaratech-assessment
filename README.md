# Bazara Assessment

A modern Next.js 14 application built with TypeScript, TailwindCSS, and various modern React libraries for optimal performance and developer experience.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **UI Components:** [Base UI Components](https://base-ui-components.vercel.app/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Form Handling:** 
  - [Formik](https://formik.org/)
  - [Yup](https://github.com/jquense/yup) (Validation)
- **Data Fetching:** [@tanstack/react-query](https://tanstack.com/query/latest)
- **Testing:** 
  - [Jest](https://jestjs.io/)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Project Structure

```
src/
├── __tests__/           # Test files
├── app/                 # Next.js 14 App Router pages
│   ├── api/            # API routes
│   ├── dashboard/      # Dashboard pages
│   └── login/         # Authentication pages
├── components/         # Reusable components
│   ├── icons/         # SVG icons components
│   ├── layout/        # Layout components
│   └── ui/            # UI components (buttons, forms, etc.)
├── data/              # Static data and constants
├── hooks/             # Custom React hooks
├── interfaces/        # TypeScript interfaces
├── modules/           # Feature-specific modules
│   ├── dashboard/     # Dashboard-specific components
│   └── login/        # Authentication components
├── store/             # Zustand store configurations
├── styles/            # Global styles and CSS modules
├── utils/             # Utility functions
└── validation/        # Schema validation rules

public/               # Static assets
├── pngs/            # PNG images
└── svgs/            # SVG files
```

## Key Features

- 🔐 Authentication system
- 📊 Dashboard with analytics
- 📱 Responsive design
- 🎨 Modern UI components
- 📈 Data visualization with Recharts
- 🧪 Unit testing setup
- 🔍 Type-safe development
- 🚀 Performance optimized

## Getting Started

1. **Install dependencies:**
   ```bash
   yarn install
   ```

2. **Run the development server:**
   ```bash
   yarn dev
   ```

3. **Build for production:**
   ```bash
   yarn build
   ```

4. **Run tests:**
   ```bash
   yarn test
   ```

## Development Tools

- **Linting:** ESLint with TypeScript and Prettier integration
- **Git Hooks:** Husky for pre-commit checks
- **Testing:** Jest and React Testing Library
- **State Management:** Zustand for simple and efficient state management
- **API Client:** Axios for HTTP requests
- **Form Management:** Formik with Yup validation
- **Styling:** TailwindCSS with SCSS support

## Project Conventions

- **Components:** Follow a modular structure with dedicated folders for different types of components
- **Testing:** Unit tests are placed in `__tests__` directory mirroring the source structure
- **Styling:** Utilize TailwindCSS classes with custom utilities when needed
- **State Management:** Zustand stores for global state, React Query for server state
- **API Routes:** Implemented in the `app/api` directory following Next.js 14 conventions
- **Error Handling:** Global error boundary and toast notifications
- **Type Safety:** Strict TypeScript configuration with comprehensive interfaces

## Environment Setup

The project uses various configuration files:
- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - TailwindCSS configuration
- `jest.config.ts` - Jest testing configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration for TailwindCSS

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Write/update tests as needed
4. Ensure all tests pass
5. Submit a pull request

## License

This project is private and confidential.