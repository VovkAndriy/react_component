import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { InputField, InputFieldProps } from "./InputField";

export default {
  title: "Example/InputField",
  component: InputField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<InputFieldProps> = (args) => <InputField {...args}/>;


export const Default = Template.bind({});
Default.args ={
    placeholder:"text input"
}
