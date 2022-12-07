import  {Box, BoxProps, Text} from '@juan-ui/react'
import type { StoryObj, Meta} from '@storybook/react'


export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: (
            <>
            <Text>Teste Box</Text></>
        ),
    },

} as Meta<BoxProps>

export const Primary:StoryObj<BoxProps> = {
   
}