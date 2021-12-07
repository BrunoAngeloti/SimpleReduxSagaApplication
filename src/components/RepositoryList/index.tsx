import React, { useEffect, useState } from 'react'

import { connect, useDispatch, useSelector } from 'react-redux'
import { ApplicationState } from '../../store'
import { bindActionCreators, Dispatch } from 'redux'

import { RepositoriesTypes, Repository } from '../../store/ducks/repositories/types'
import * as RepositoriesActions from '../../store/ducks/repositories/actions'

interface StateProps {
    repositories: Repository[]
}

interface DispatchProps {
    loadRequest(user: string): void 
}

type Props = StateProps & DispatchProps

function RepositoryList(){

    const rep = useSelector((state:ApplicationState)=>state.repositories.data)
    const err = useSelector((state:ApplicationState)=>state.repositories.error)
    const loading = useSelector((state:ApplicationState)=>state.repositories.loading)

    const dispatch = useDispatch()

    const [user, setUser] = useState('')

    function enviar(){
        dispatch({type: RepositoriesTypes.LOAD_REQUEST, payload: user})
    }

    return(
        <div>
            <input onChange={e => setUser(e.target.value)} type="text" placeholder="Digite o github"/>
            <button onClick={enviar}>Enviar</button>
            <div>
                {rep.map(repository => {return(
                    <h3 key={repository.id}>{repository.name}</h3>
                )})}
                {err && <h2>Usuario nao encontrado</h2>}
                {loading && <h2>Carregando...</h2>}
            </div>           
        </div>
    )
}

export default RepositoryList
