import { useParams } from 'react-router-dom'

const VerCliente = () => {

    const params = useParams()
    console.log(params)

    return (
        <div>
            <h1>Ver Cliente</h1>
        </div>
    )
}

export default VerCliente