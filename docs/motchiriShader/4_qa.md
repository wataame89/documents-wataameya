# Q&A

:::info ページの説明
もっちりシェーダー は正常に動作しているが、不満・疑問点がある場合に参照するページです。  
(より高度な用法を知りたい場合は[「使い方/応用編」](https://wataame89.github.io/documents-wataameya/motchiriShader/howtouse/addition)、正常に動作していない場合は[「不具合対応」](https://wataame89.github.io/documents-wataameya/motchiriShader/howtouse/addition)を参照)
:::

### 顔マスクは付属していないのか

顔マスクは、一部のアバターのみ対応しています。付属していないアバター

### Unity ゲームで使いたい

URP 対応のシェーダーとして、別にもっちりシェーダーを開発しています。  
[もっちりシェーダー URP](https://wataame89.booth.pm/items/7260413)をご参照下さい。

使用例：[ミスター秘密侵入 VR](https://www.dlsite.com/maniax/work/=/product_id/RJ01266526.html/?utm_medium=affiliate&utm_campaign=sns_link&utm_content=RJ01266526&utm_source=mr-vr-jp.github.io%2F)

### Poiyomi 対応してほしい

Poiyomi ではカスタムシェーダーが作成できないため、現状対応予定はありません。

### もっちりシェーダーを導入したアバターを元に戻したい

#### 新方式の場合：

新方式は非破壊的導入であるため、アバター下の marshmallow_PB_Setup を削除すれば導入前に戻ります。

#### 旧方式の場合：

アバターにもっちりシェーダーが入っている場合は、もっちりシェーダーを lilToon に変更し、motchiri オブジェクトを削除し、FX レイヤーを設定前のものに戻してください。
