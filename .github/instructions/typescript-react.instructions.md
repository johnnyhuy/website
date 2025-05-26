---
applyTo: "**/*.ts,**/*.tsx"
---

# TypeScript and React Instructions

Apply the [general project guidelines](../copilot-instructions.md) to all code.

## TypeScript Specific Rules

### Type Definitions
- Always define proper interfaces for component props
- Use type aliases for complex union types
- Prefer `interface` over `type` for object shapes
- Use generic types when components need flexibility

### Component Patterns
```typescript
// Preferred component pattern
interface ComponentProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export const Component: React.FC<ComponentProps> = ({
  title,
  children,
  className
}) => {
  return (
    <div className={cn("base-styles", className)}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
```

### Hook Patterns
- Custom hooks should start with `use`
- Return objects with named properties, not arrays
- Include proper TypeScript return types
- Handle loading and error states

### State Management
- Use `useState` with proper type inference
- Prefer `useReducer` for complex state logic
- Use `useCallback` and `useMemo` appropriately
- Avoid unnecessary re-renders

## React Specific Rules

### Component Structure
- Use functional components exclusively
- Implement proper prop destructuring
- Handle edge cases and loading states
- Include proper error boundaries

### Event Handling
- Use proper TypeScript event types
- Prevent default behavior when necessary
- Handle async operations properly
- Implement debouncing for expensive operations

### Performance
- Use React.memo for expensive components
- Implement proper key props for lists
- Avoid creating objects in render methods
- Use proper dependency arrays in hooks

### Accessibility
- Include proper ARIA attributes
- Ensure keyboard navigation
- Use semantic HTML elements
- Test with screen readers
