import { action } from 'typesafe-actions'
import { RepositoriesTypes, Repository } from './types'

export const loadRequest = (user: string) => action(RepositoriesTypes.LOAD_REQUEST, user)
export const loadSuccess = (data: Repository) => action(RepositoriesTypes.LOAD_SUCCESS, data)
export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE)