import { styled } from './styles'
import { colors } from '@juan-ui/tokens'

const Button = styled('button', {
    fontFamily: '$default',
    backgroundColor: '$ignite500',
    borderRadius: '$md'
})


export function App() {
    return 
    <h1 style={{color: colors.ignite300}}>
        helloworld
    </h1>
}