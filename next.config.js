import path from 'node:path'

/** @type{import('next').NextConfig} */
const config = {
  turbopack: {
    root: path.resolve('.')
  }
}

export default config
