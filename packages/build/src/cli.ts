#!/usr/bin/env node

import { serve } from './vite/serve.js'
import { build } from './vite/build.js'

const args = process.argv.slice(2)

if (args.length === 0) {
    console.error('No arguments provided')
    process.exit(1)
}

const command = args[0]
const subcommand = args[1]
const currentDir = process.cwd()

if (command === 'vite') {
    await serve(currentDir)
}

if (command === 'vite' && subcommand === 'build') {
    await build(currentDir)
}
