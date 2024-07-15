import { build as viteBuild } from 'vite'
import vue from '@vitejs/plugin-vue'

export async function build(root: string) {
    await viteBuild({
        root,
        plugins: [
            vue(),
        ],
    })
}
