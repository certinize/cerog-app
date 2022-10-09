export const GATEWAY_URL = process.env.REACT_APP_GATEWAY_URL

export async function get (endpoint) {
  console.log(`${GATEWAY_URL}/${endpoint}`)
  const response = await fetch(`${GATEWAY_URL}/${endpoint}`)
  return await response.json()
}
