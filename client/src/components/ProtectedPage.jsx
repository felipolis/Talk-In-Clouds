import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// importa para navegar entre as paginas
import { useNavigate } from 'react-router-dom'

const ProtectedPage = ({ children }) => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)
    const navigate = useNavigate()

    useEffect(() => {
        // Se nao estiver logado, redireciona para a pagina de login
        if (!user) {
            navigate('/')
        }
    }, [navigate, user])

    return (
        user ? children : null
    )
}

export default ProtectedPage