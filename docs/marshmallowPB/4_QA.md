# Q&A

:::info ページの説明
ましゅまろ PB は正常に動作しているが、不満・疑問点がある場合に参照するページです。  
(より高度な用法を知りたい場合は[「使い方/応用編」](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition)、正常に動作していない場合は[「不具合対応」](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition)を参照)
:::

### VRChat 上でましゅまろ PB のサイズを変更したい

ましゅまろ PB の仕組み上、VRChat 上でのサイズ変更は出来ません。

### お尻にも導入したい

ましゅまろ PB は一つのみ導入できるため、胸と同時に導入は出来ません。  
ただし、Modular Avatar の Manual Bake Avatar を使用することで、アバターに焼き込むことが出来るため、使用できる可能性があります。なお、こちらはサポート対象外です。

### 胸が伸びすぎる

#### 屈んだ際に胸が伸び過ぎる場合：

設定項目の「胸の垂れ下がりやすさ」の値を小さくすることで、胸が伸びすぎなくなります。

#### 引っ張った際に胸が伸びすぎる場合：

設定項目の PhysBone/MaxStretch の値を小さくすることで対応できます。

### 通常の PB のように、ましゅまろ PB を固定したい

ましゅまろ PB の仕組み上、通常の PhysBone の様に固定は出来ません。

### ましゅまろ PB を自作アバターに導入した状態で販売したい

規約上、許可されません。

### ましゅまろ PB を導入したアバターを元に戻したい

#### 新方式の場合：

新方式は非破壊的導入であるため、アバター下の marshmallow_PB_Setup を削除すれば導入前に戻ります。

#### 旧方式の場合：

旧方式で設定したアバターの場合は複製されるものの、アバターと FX も元の状態に戻すには作業が必要です。ましゅまろ PB は複製した同名のボーンに既存の胸ボーンを入れ子として入れています(例:Chest/breast_L/breast_L/…)。そのため、2 つ並んだ同名の親子ボーンのうち、子ボーンを取り出し、親ボーンを削除すると元に戻ります。更に、他の marshmallow と名のついたオブジェクトを消し、FX レイヤーを元のアバターのものに変更してください。最後にアバター末尾の「\_MPB」を削除すれば完了です。(アバターや FX の名前の末尾が\_MPB のままだとセットアップツールで弾かれます)  
詳細は動画をご覧ください。

<iframe width="560" height="315" src="https://www.youtube.com/embed/Nh1pLiSWz6I?si=6jGZxrHTBik8gz7L" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
