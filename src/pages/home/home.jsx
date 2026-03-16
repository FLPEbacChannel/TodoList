import { Container } from './styles'
import { MyTaskList } from '../../components/myTasksList/myTaskList'

export function Home() {
    return (
        <Container>
            <MyTaskList />
        </Container>
    )
}