import  {Button, ButtonProps} from '@juan-ui/react'
import type { StoryObj, Meta} from '@storybook/react'
import { ArrowRight} from 'phosphor-react'


export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Send',
    },

} as Meta<ButtonProps>

export const Primary:StoryObj<ButtonProps> = {
   
}


export const Secondary:StoryObj<ButtonProps> = {
   args: {
    variant: 'secondary',
    children: 'Create New',
   },
}

export const Tertiary:StoryObj<ButtonProps> = {
    args: {
     variant: 'tertiary',
     children: 'Cancel',
    },
 }
 
 export const Small:StoryObj<ButtonProps> = {
    args: {
     size: 'small',
    },
 }

  
 export const Disabled:StoryObj<ButtonProps> = {
    args: {
     disabled: true,
    },
 }

 export const WithIcon:StoryObj<ButtonProps> = {
    args: {
     childen: {
        <>
        Próximo Passo 
        <ArrowRight />
        </>
     }
    },
 }
 

 
 

 
