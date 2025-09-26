import { RouterDecorator } from "./../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { Theme } from "../../src/app/providers/themeProvider";
import { ThemeDecorator } from "./../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import type { Preview } from '@storybook/react';
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import 'loki/configure-react';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;
