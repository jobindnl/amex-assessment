# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.


# Future improvements
- **Linting**
  - Add a dedicated ESLint configuration file (`.eslintrc.js` / `.eslintrc.json`) to enforce consistent React/TypeScript rules.

- **Formatting**
  - Add Prettier for automatic formatting and editor consistency.
  - Use a shared config via `.prettierrc` and `.editorconfig` so formatting works the same in all editors.

- **Testing**
  - Expand the existing `vitest` test coverage to include:
    - accessibility checks
    - edge cases for `Accordion`
    - cross-component integration behavior

- **Editor integration**
  - Recommend VS Code extensions in README:
    - `ESLint`
    - `Prettier - Code formatter`
    - `TypeScript`
  - Add an `.editorconfig` file to standardize tabs, indentation, line endings, and charset.

- **Documentation**
  - Add a small usage section for the `Accordion` component:
    - expected props
    - default behavior
    - example usage
  - This is especially helpful if the component is reused or extended.