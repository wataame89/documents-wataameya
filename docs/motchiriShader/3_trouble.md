# 困ったときは

:::info ページの説明
もっちりシェーダー が正常に動作していないと思われる場合に参照するページです。  
(正常に動作している場合は、[「使い方/応用編」](https://wataame89.github.io/documents-wataameya/motchiriShader/howtouse/addition)、[「Q&A」](https://wataame89.github.io/documents-wataameya/motchiriShader/qa)を参照)
:::

### シェーダーが機能していない

- Gesture Manager 上でテストしてみて動けばシェーダーは正常です。  
  動作しない場合は一度、新しいプロジェクトでアバターをセットアップしてみてください。
- VRChat の設定の Avatar Intaract の Self Intaract(自分の PB が触れなくなる設定)がオフになっていると自分では触れません。(参考：[公式ドキュメント](https://docs.vrchat.com/docs/permissions-and-settings))
- メッシュのマテリアル変更アニメーションが入っている場合も動作しません。
- WriteDefault が FX レイヤー中で統一されていない場合は動作しないことがあるので、必ず統一してください。
- マテリアルエラーとなる場合、motchiri_shader フォルダを右クリックから Reimport すると直る場合があります。
- VRChat のアバタースケーリングを使用している場合、動作しません。デフォルトのサイズでご利用ください。

### 自分は触れるけどフレンドに触ってもらおうとしたら触れなかった

仕様上、触れるのは一番近い他プレイヤー 1 人のみですので、同時に触ろうとしたり、周囲にプレイヤーが複数人いると上手く機能しないことがあります。また、Contact の設定によっては触れない場合もあります。

判定方法として、PhysBone(耳や尻尾など)に触れるプレイヤーであればもっちりシェーダーも触れるはずです。PB が触れる状態で触れない場合はリセットアバターやアバター変更をすると触れることが多いです。PhysBone も触れない場合は VRChat の Avatar Intaract 内の設定を見直してください。(参考：[公式ドキュメント](https://docs.vrchat.com/docs/permissions-and-settings))

### 人差し指の判定がズレて触れないことがある

VRChat 側で設定された指のデフォルトコライダーはカプセル状なので、そのカプセル内でズレることがあります。正確には、カプセルコライダーの体の中心(motchiri オブジェクト)に近い点に判定が生じます。つまり、もっちり判定は指の先端と指の根本にある場合があります。触れない場合は指の根本を当てるようにするともっちりするはずです。回避方法として、追加コライダーを指に設定することをお勧めしています。

### タイツのメッシュが貫通する

体のみハイポリになっているため、タイツとポリゴンがズレるために起こります。~体のポリゴンと合わせるためにタイツのテッセレーションをオンにすれば直ります。~ 身体のメッシュを消すシェイプキーの値を僅かに設定することで、見た目を損なうことなく貫通を解消できます。

<!-- <img
src={require('/img/MotchiriShader/taitu.png').default}
style={{ width: '800px' }}
/> -->

### ほっぺが上手くもちもちできない

人差し指のコライダーのズレは motchiri プレハブの中心方向に起こるため、ほっぺを触ろうとすると判定が指の根本に移動し、触り辛くなってしまいます。解決策としては指を下側に向けて触ることや、判定がズレない追加コライダーを指に設定することが挙げられます。

### もっちりした部分のメッシュが割れる

マスク上で割れる部分を黒く設定して下さい。Blender 上でアバターの辺にシャープが入っている場合にもメッシュがズレるので、不必要な部分はクリアしてください。

### 体に入れるなでなでシェーダー(shadowdepth_body)と同時に使えない

shadowdepth_body はハイポリ化する前のメッシュを参照して暗くするため、ハイポリ化しているとズレて正常に動作しません。ですが、lilToon に付いている同等の機能である距離フェードを使用すると解決します。shadowdepth_body を外し、もっちりシェーダーのマテリアルを図のように設定すると shadowdepth_body と同程度に機能します。
<img
src={require('/img/MotchiriShader/shadow.png').default}
style={{ width: '800px' }}
/>

### blackbody shader と併用するともっちりした部分が黒くなる

図の一番下のチェックを外すと直ります。
<img
src={require('/img/MotchiriShader/black.png').default}
style={{ width: '400px' }}
/>

---

### アバターごとの不具合

(工事中)

---

### 既知の不具合

### コンタクトが密集している場合に動作しない不具合

もっちりシェーダーなどを入れているアバターが密集する場合など、多数のコンタクトと接触した場合にもっちりシェーダーがうまく動作しなくなる現象です。  
VRChat 側の不具合で、コンタクトのパラメータが初期化されるために発生します。

---

:::caution このページで不具合が解決しない場合
[お問い合わせ](https://wataame89.github.io/documents-wataameya/motchiriShader/howtocontact)を参照してください。
:::
