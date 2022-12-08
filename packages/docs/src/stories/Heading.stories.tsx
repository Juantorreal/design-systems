import  {Heading,HeadingProps} from '@juan-ui/react'
import type { StoryObj, Meta} from '@storybook/react'


export default {
    title: 'Typography/Heading',
    component:Heading,
    args: {
        children: (
            <>
            <span>Title</span></>
        ),
    },

} as Meta<HeadingProps>

export const Primary:StoryObj<HeadingProps> = {
   
}

export const CustomTag:StoryObj<HeadingProps> = {
   args: {
    children: 'H1 Example',
    as: 'h1',
   }
}