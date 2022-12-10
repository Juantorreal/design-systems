import  {Avatar, AvatarProps} from '@juan-ui/react'
import type { StoryObj, Meta} from '@storybook/react'


export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/juantorreal.png',
        alt: 'Juan Torreal'
    },

} as Meta<AvatarProps>

export const Primary:StoryObj<AvatarProps> = {
   
}


export const Fallback:StoryObj<AvatarProps> = {
   args: {
    src: undefined,
   },
}
