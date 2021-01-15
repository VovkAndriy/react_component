import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import {Form, FormProps} from './Form'

export default {
  title: "Example/Form",
  component: Form,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<FormProps> = (args) => <Form {...args}/>;


export const Default = Template.bind({});

