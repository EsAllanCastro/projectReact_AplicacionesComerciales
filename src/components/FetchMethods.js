const headers = { 'Content-Type': 'application/json' }
const getENVProjectUrl = () => {
  return process.env.REACT_APP_API_URL
}
const urlApi = getENVProjectUrl()

async function getFetch(path) {
  let response = await fetch(`${urlApi}/${path}`, { credentials: 'include' })
  return (await response).json()
}

async function postFetch(path, body) {
  let response = await fetch(`${urlApi}/${path}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
    credentials: 'include',
  })
  return (await response).json()
}

async function putFetch(path, body, id) {
  let response = await fetch(`${urlApi}/${path}/${id}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(body),
    credentials: 'include',
  })
  return (await response).json()
}

async function deleteFetch(path) {
  let response = await fetch(`${urlApi}/${path}`, {
    method: 'DELETE',
    credentials: 'include',
  })
  return (await response).json()
}

export { getFetch, postFetch, putFetch, deleteFetch }
