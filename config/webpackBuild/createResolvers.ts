import { type ResolveOptions } from 'webpack';
import path from 'path';

export function createResolvers(src: string): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [src, 'node_modules'],
        preferAbsolute: true,
        alias: {},
        mainFiles: ['index']
    };
}
