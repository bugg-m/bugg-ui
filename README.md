<div align="center">
  <h1>🐞 Bugg-ui</h1>
  <p>
    Currently in active development,
    <strong>Bugg-ui</strong> is a UI component library for React built with
    TypeScript and Tailwind CSS—designed for rapid development and scalability.
  </p>
  <p>
    Originally created for personal use, it has become a foundational toolkit
    for various projects. Now, it's freely available to anyone looking to
    integrate it into their workflow.
  </p>

[![npm version](https://badge.fury.io/js/%40bugg-m%2Fbugg-ui.svg)](https://badge.fury.io/js/%40bugg-m%2Fbugg-ui) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![React](https://img.shields.io/badge/React-17%2B-blue)](https://reactjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-4.5%2B-blue)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0%2B-blue)](https://tailwindcss.com/)

</div>

---

## 📖 Table of Contents

1. [🚀 Features](#-features)
2. [📦 Installation](#-installation)
3. [🏁 Quick Start](#-quick-start)
4. [🧩 Components](#-components)
5. [📚 Documentation](#-documentation)
6. [🛠️ Development](#️-development)
7. [🤝 Contributing](#-contributing)
8. [📄 License](#-license)
9. [📞 Support](#-support)
10. [👤 Stay in Touch](#-stay-in-touch)

---

## 🚀 Features

- 📦 **10+ Components**: Intuitive, reusable UI elements for rapid development.
- 🎨 **Customizable**: Full Tailwind CSS support for easy theming and branding.
- 🌗 **Dark Mode**: Built-in light/dark theme support.
- 🔧 **TypeScript First**: Complete type definitions for robust, scalable development.
- 📚 **Storybook Integration**: Interactive live previews and API documentation.

---

## 📦 Installation

### Install Bugg-ui

```bash
npm install @bugg-m/bugg-ui
# or
yarn add @bugg-m/bugg-ui
```

### Set Up Tailwind CSS

Follow the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation) to configure Tailwind CSS in your project.

---

## 🎨 Set Up CSS

Add the following directive to your root CSS file (e.g., `index.css`)

```tsx
@import '@bugg-m/bugg-ui/style.css';
```

Alternatively, import it in your root app file (e.g., `index.tsx`)

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '@bugg-m/bugg-ui/style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## 🏁 Quick Start

```tsx
// Importing components from Bugg-ui
import { Button, Input, Card } from '@bugg-m/bugg-ui';

function App() {
  return (
    <Card>
      <h1>Welcome to Bugg-ui</h1>
      <Input placeholder='Enter your name' />
      <Button variant='primary'>Get Started</Button>
    </Card>
  );
}
```

For advanced usage, see our [full documentation](https://bugg-ui.netlify.app/).

---

## 🧩 Components

Bugg-ui provides versatile components, including:

- **Button**: Configurable buttons with multiple variants.
- **Card**: Stylish container for grouping elements.
- **Input**: Forms simplified with accessible input fields.
- **Modal**: Easy-to-use modal dialogs.
- **Loader**: Visual indicators for loading states.

Check out live examples and code snippets in [Storybook](https://bugg-ui.netlify.app/).

---

## 📚 Documentation

Visit our [Documentation Site](https://bugg-ui.netlify.app/) for details about:

- Component properties and examples.
- Theming and dark mode setup.
- Accessibility best practices.

---

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/bugg-m/bugg-ui.git

# Install dependencies
npm install

# Run the development server
npm run dev

# Start Storybook
npm run storybook

# Build for production
npm run build
```

---

## 🤝 Contributing

We welcome contributions! Check out our [Contributing Guide](CONTRIBUTING.md) for guidelines on how to contribute.

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

## 📞 Support

If you encounter any issues or have questions, feel free to:

- Open an [issue](https://github.com/bugg-m/bugg-ui/issues).
- Contact the author via [GitHub](https://github.com/bugg-m).

---

## 👤 Stay in Touch

- **Author**: [Manish Kumar](https://github.com/bugg-m)
- **GitHub Repository**: [bugg-ui](https://github.com/bugg-m/bugg-ui)
