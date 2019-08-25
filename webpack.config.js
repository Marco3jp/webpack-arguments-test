const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, env) => {
    if (typeof env.start === "undefined" || typeof env.end === "undefined") {
        throw new Error("Don't fill arguments. メンテナンス期間を正しく引数で与えてください。");
    }
    return {
        entry: {
            "main": "./index.js"
        },
        output: {
            path: __dirname + "/dist",
        },
        mode: "development",
        module: {
            rules: [
                {
                    test: /index\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                        },
                        {
                            loader: 'string-replace-loader',
                            options: {
                                multiple: [
                                    {search: '${start}', replace: env.start},
                                    {search: '${end}', replace: env.end}
                                ]
                            }
                        }
                    ]
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./index.html",
                inject: false
            })
        ]
    };
};
