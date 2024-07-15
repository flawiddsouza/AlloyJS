import { createServer } from 'vite'
import vue from '@vitejs/plugin-vue'

export async function serve(root: string) {
    const server = await createServer({
        configFile: false,
        root,
        server: {
            port: 5173,
        },
        plugins: [
            vue(),
        ],
    })
    await server.listen()

    server.printUrls()
    server.bindCLIShortcuts({ print: true })
}
