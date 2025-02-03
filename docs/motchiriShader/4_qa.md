# Q&A

:::info ページの説明
ましゅまろ PB は正常に動作しているが、不満・疑問点がある場合に参照するページです。  
(より高度な用法を知りたい場合は[「使い方/応用編」](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition)、正常に動作していない場合は[「不具合対応」](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition)を参照)
:::

### もっちりシェーダーを導入したアバターを元に戻したい

#### 新方式の場合：

新方式は非破壊的導入であるため、アバター下の marshmallow_PB_Setup を削除すれば導入前に戻ります。

#### 旧方式の場合：

アバターにもっちりシェーダーが入っている場合は、もっちりシェーダーを lilToon に変更し、motchiri オブジェクトを削除し、FX レイヤーを設定前のものに戻してください。
