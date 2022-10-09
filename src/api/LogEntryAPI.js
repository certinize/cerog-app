import { get } from '.'

export async function getLogEntries () {
  return await get('logs')
}
