// 在vuecli - 建立 webpack.config.js
// npm install postcss-loader --save
module.exports = {
    module: {
        rules: [
            {
                use: [
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('tailwindcss'),
                                require('autoprefixer'),
                            ],
                        },
                    },
                ],
            }
        ],
    }
}