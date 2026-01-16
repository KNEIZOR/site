import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defauldAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersMapObject<StateSchema>,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defauldAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
