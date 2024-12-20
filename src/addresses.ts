// Environment variables are used for configuring the application.
// They define the addresses of the 3 components that are targets of queries.
// A variable must contain a host and optionally a port and/or a protocol.

const resolveAddress = (environmentVariableName: string): string => {
  const address = process.env[environmentVariableName]
  if (!address) {
    throw new Error(
      `The ${environmentVariableName} environment variable is required`,
    )
  }
  const prefix = address.includes('//') ? '' : `${window.location.protocol}//`
  return `${prefix}${address}`
}

const apiAddress = 'https://kgi.kaspad.net:3147'
const explorerAddress = ''
const kaspaLiveAddress = ''

export { apiAddress, explorerAddress, kaspaLiveAddress }
