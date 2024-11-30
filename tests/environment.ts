import { TestEnvironment } from 'jest-environment-jsdom'
import type {
  EnvironmentContext,
  JestEnvironmentConfig
} from '@jest/environment'

export default class CustomEnvironment extends TestEnvironment {
  constructor(config: JestEnvironmentConfig, ctx: EnvironmentContext) {
    super(config, ctx)

    /**
     * @note Opt-out from JSDOM using browser-style resolution
     * for dependencies. This is simply incorrect, as JSDOM is
     * not a browser, and loading browser-oriented bundles in
     * Node.js will break things.
     *
     * Consider migrating to a more modern test runner if you
     * don't want to deal with this.
     */
    this.customExportConditions = (config.projectConfig.testEnvironmentOptions
      .customExportConditions as string[]) || ['']

    this.global.TextDecoder = TextDecoder
    this.global.TextEncoder = TextEncoder
    this.global.TextDecoderStream = TextDecoderStream
    this.global.TextEncoderStream = TextEncoderStream
    this.global.ReadableStream = ReadableStream

    this.global.Blob = Blob
    this.global.Headers = Headers
    this.global.FormData = FormData
    this.global.Request = Request
    this.global.Response = Response
    this.global.fetch = fetch
    this.global.structuredClone = structuredClone
    this.global.URL = URL
    this.global.URLSearchParams = URLSearchParams

    this.global.BroadcastChannel = BroadcastChannel
    this.global.TransformStream = TransformStream
  }
}
