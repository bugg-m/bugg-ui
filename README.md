````markdown
# Bugg-ui

In development phase...
A modern, flexible UI component library built with React, TypeScript, and Tailwind CSS.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the library, run:

```bash
npm install @bugg-m/bugg-ui
# or
yarn add @bugg-m/bugg-ui
```
````

## Usage

First, ensure you have Tailwind CSS set up in your project. Then, you can import and use components like this:

```jsx
import { Button, Input, Card } from '@bugg-m/bugg-ui';

function App() {
  return (
    <div>
      <Card>
        <h1>Welcome to My App</h1>
        <Input placeholder='Enter your name' />
        <Button>Submit</Button>
      </Card>
    </div>
  );
}
```

## Components

This library includes the following components:

- Button
- Input
- Text
- Card
- Modal
- Checkbox
- Select
- Loader

For detailed usage and props for each component, please refer to our [Storybook documentation](#) ([link to be added when deployed](https://bugg-ui.netlify.app/)).

## Development

This project uses:

- React
- TypeScript
- Tailwind CSS
- Storybook for component development and documentation
- Vite for fast development and building

To start the development server:

```bash
npm run dev
# or
yarn dev
```

To run Storybook:

```bash
npm run storybook
# or
yarn storybook
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
