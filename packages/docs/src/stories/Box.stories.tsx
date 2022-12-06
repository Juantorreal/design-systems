import  {Box} from '@juan-ui/react'
import type { StoryObj, Meta} from '@storybook/react'


export default {
    title: 'Surfaces/Box',
    component: Button,
    args: {
        children: 'Enviar',
    }

} as Meta<ButtonProps>

export const Primary:StoryObj<ButtonProps> = {
   

}
export const Big:StoryObj<ButtonProps> = {
    args: {
       size: 'big'
    },
}