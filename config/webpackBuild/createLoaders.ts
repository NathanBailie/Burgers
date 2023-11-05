import { type RuleSetRule } from 'webpack';
import { createSassLoader } from './loaders/sassLoader';
import { createBabelLoader } from './loaders/babelLoader';

export function createLoaders(isDev: boolean): RuleSetRule[] {
    const sassLoader = createSassLoader(isDev);
    const babelLoader = createBabelLoader(isDev);

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typeScriptLoader,
        sassLoader
    ];
}
