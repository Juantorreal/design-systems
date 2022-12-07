import  {Text, TextProps} from '@juan-ui/react'
import type { StoryObj, Meta} from '@storybook/react'


export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children: (
            <>
            <span>ExampleExample</span></>
        ),
    },

} as Meta<TextProps>

export const Primary:StoryObj<TextProps> = {
   
}

export const CustomTag:StoryObj<TextProps> = {
   args: {
    children: 'Strong Example',
    as: 'strong',
   }
}