# 困ったときは

### 服を貫通してしまう場合

仕様上、服によってはどうしても貫通してしまいます。以下のような対策があります。

- 胸の大きさのシェイプキーを服のシェイプキーに対してごく僅かに小さくする。(多くの場合はこれで対応できます)
- **胸のつぶれ深さを浅くする。**
  - PhysBone 設定の「[LimitColliderPosition](https://wataame89.github.io/documents-marshmallowPB/setup#limitcolliderposition)」の数値をを大きくする、もしくは「[MaxSquish](https://wataame89.github.io/documents-marshmallowPB/setup#maxsquish)」の数値を小さくすることで設定できます。
  - 仰向けになったときのつぶれ具合は「[胸のつぶれやすさ(仰向け)](https://wataame89.github.io/documents-marshmallowPB/setup#%E8%83%B8%E3%81%AE%E3%81%A4%E3%81%B6%E3%82%8C%E3%82%84%E3%81%99%E3%81%95%E4%BB%B0%E5%90%91%E3%81%91)」の数値を小さくすることで設定できます。
- **つぶれたときの変形を抑える。**
  - 「[つぶれアニメーションの強さ](https://wataame89.github.io/documents-marshmallowPB/setup#%E3%81%A4%E3%81%B6%E3%82%8C%E3%82%A2%E3%83%8B%E3%83%A1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E5%BC%B7%E3%81%95)」を小さくすることで設定できます。
- どうしても貫通してしまう場合には、**つぶれ機能をオフ**にして下さい。この方法は PB がつぶれなくなりますが、貫通しなくなります。
  - 「[つぶれ機能オフ(貫通対策)](https://wataame89.github.io/documents-marshmallowPB/setup#%E3%81%A4%E3%81%B6%E3%82%8C%E6%A9%9F%E8%83%BD%E3%82%AA%E3%83%95%E8%B2%AB%E9%80%9A%E5%AF%BE%E7%AD%96)」をオンにすることで設定できます。

### ましゅまろ PB を導入したアバターを元に戻したい場合

#### 新方式の場合：

新方式は非破壊的導入であるため、アバター下の marshmallow_PB_Setup を削除すれば導入前に戻ります。

#### 旧方式の場合：

旧方式で設定したアバターの場合は複製されるものの、アバターと FX も元の状態に戻すには作業が必要です。ましゅまろ PB は複製した同名のボーンに既存の胸ボーンを入れ子として入れています(例:Chest/breast_L/breast_L/…)。そのため、2 つ並んだ同名の親子ボーンのうち、子ボーンを取り出し、親ボーンを削除すると元に戻ります。更に、他の marshmallow と名のついたオブジェクトを消し、FX レイヤーを元のアバターのものに変更してください。最後にアバター末尾の「\_MPB」を削除すれば完了です。(アバターや FX の名前の末尾が\_MPB のままだとセットアップツールで弾かれます)  
詳細は動画をご覧ください。

<iframe width="560" height="315" src="https://www.youtube.com/embed/Nh1pLiSWz6I?si=6jGZxrHTBik8gz7L" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

<!-- ### ブレが大きい場合
ましゅまろPBは押した際にブレが発生することがあります。基本的にブレはStiffness(変形しにくさ)を上げることで解消されます。

### エラーウィンドウが出た場合
大抵の場合、セットアップの設定が間違っているので導入方法の動画を参考に設定し直してください。 -->

### 勝手に胸がつぶれてしまう場合

「他プレイヤーとの胸干渉」がオンになっている場合、この機能が何らかの不具合によって勝手に動作することで胸がつぶれてしまうことがあります。基本的には「他プレイヤーとの胸干渉」をオフにすることで解消されるはずです。

### ましゅまろ PB の動きがおかしい場合

PB を複数持つアバターの場合、通常の設定では PB を削除しきれず、動きがおかしくなる場合があります(ヴェールなど)。この場合、「配下の PB を全削除」をオンにすると直ります。

### ましゅまろ PB の設定位置がおかしい場合(動くとメッシュが激しく破綻する場合)

ましゅまろ PB の位置が何らかの理由でズレている可能性が考えられます。非対応アバターと同様に設定するか、「[オフセットとしてこのオブジェクトの Transform を使用](https://wataame89.github.io/documents-marshmallowPB/setup#%E3%82%AA%E3%83%95%E3%82%BB%E3%83%83%E3%83%88%E3%81%A8%E3%81%97%E3%81%A6%E3%81%93%E3%81%AE%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AEtransform%E3%82%92%E4%BD%BF%E7%94%A8)」
をオンにしてオフセットを設定することで調整して下さい。

### ましゅまろ PB が適用されない場合

Gesture Manager や再生モードに入っても marshmallow_PB_setup が残っている場合は何らかの理由でましゅまろ PB が適用されていません。

#### ウィンドウにメッセージが表示されている場合：

再度導入方法を確認し、メッセージに従って修正してください。

#### Console でエラーが発生している場合：

何らかの不具合により処理が中断されているため、そのコードの詳細を[Booth](https://wataame89.booth.pm)か[Twitter](https://twitter.com/wataameya_vr)に送ってください。  
ただし、**再生モードを解除した際に発生するエラーはましゅまろ PB のエラーとは関係がない**ので、再生モードに入ったときに発生するエラーを送ってください。

#### Console でエラーが発生していない場合：

ウィンドウ上部の Tools→NDM Framework→Apply on Play にチェックが入っているかを確認してください。入っていない場合はチェックを入れてください。チェックが入っているのに動かない場合はもう一度エラーを確認した後、ご相談ください。

### 既知の不具合

- ましゅまろ PB を掴んだ際にコライダーの判定が消えない不具合。引っ張るなどして、コライダーから離れると正常に判定が消えます。
  恐らく VRChat 側の仕様変更による不具合だと思われます。

### 不具合が起きた場合

[Booth](https://wataame89.booth.pm)、[Twitter](https://twitter.com/wataameya_vr)にて作者までご連絡ください。  
軽微なバグ・不具合を見つけた場合は[こちらの Googleform まで](https://forms.gle/DHajiroywcGEGHb98)お願いします。
