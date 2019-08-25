# webpack-arguments-test
主にwebpack-cliにおいて、--configでmodule.exportsするが、ここに引数をもたせてみるテスト。
動くには動いたが、どうしてこうなるか若干わかってない。

## 動かし方
`npm run build -- --start "08/25 10:00" --end "08/27 12:00"`

module.exportsしたconfig objectの**第二引数**はオブジェクトになっていて、`--`以降に`--lang js`などと書くとlang: "js"というkeyValueの関係になる。ちなみにこの場合、第一引数はなぜか`undefined`である。

今回のサンプルでは`string-replace-loader`([GitHub](https://github.com/Va1/string-replace-loader))を用いて、`index.html`の`${start}`と`${end}`を引数のstartとendで置き換えた。
