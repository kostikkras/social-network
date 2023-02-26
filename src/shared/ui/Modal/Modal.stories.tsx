import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/Modal',
    component: Modal,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    isOpen: true,
    children:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus,voluptas, omnis illum enim, eos repellat eveniet voluptate architecto veritatis oditquod ullam accusantium unde delectus quam repellendus vel similique!',
};

export const Dark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dark.args = {
    isOpen: true,
    children:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus,voluptas, omnis illum enim, eos repellat eveniet voluptate architecto veritatis oditquod ullam accusantium unde delectus quam repellendus vel similique!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
