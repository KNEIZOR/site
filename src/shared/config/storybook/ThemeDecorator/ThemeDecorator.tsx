import { Decorator } from "@storybook/react";
import { Theme } from "app/providers/themeProvider";


// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme):Decorator => (Story) => {
    return (
        <div className={`app ${theme}`}>
            <Story />
        </div>
    );
};
