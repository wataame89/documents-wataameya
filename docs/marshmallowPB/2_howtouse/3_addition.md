---
sidebar_position: 4
---

# 応用編

### アバター由来の PhysBone の利用

アバター由来の PB を使用したまま、ましゅまろ PB のつぶれ機能のみを使用したい場合は設定項目の「つぶれ機能のみ適用(元の PB を使用)」をオンにして下さい。基本的には元の PB の動きのままですが、押した場合にはつぶれます。掴み機能を使用する場合、元の PB の Allow Grabbing はオフにして下さい。

### 平行胸ボーンの使用

「胸の回転の寄与度」を小さくすると、胸が平行に動くようになります。平行に近づくと重量感が増します。なお、デフォルトでは 0.8 なので、少しだけ平行化されています。

### 頭コライダーの設定

~~ましゅまろ PB は「他プレイヤーとの胸干渉」を設定していると、ましゅまろ PB を入れていないプレイヤーでも頭のデフォルトコライダーと干渉することが出来ます。しかし、通常の頭コライダーはサイズが小さく、干渉しにくいため Avatar Descripter の Coliders の項目を変更してコライダーのサイズを大きくすると効果的です。~~  
ましゅまろ PB は「他プレイヤーとの胸干渉」を設定していると、head\_タグを持つ VRC Contact Sender により干渉することが出来ます。頭などに VRC Contact Sender を設定すると、他プレイヤーのましゅまろ PB に干渉することが出来ます。
<img
src={require('/img/head.png').default}
style={{ width: '400px' }}
/>

### つぶれアニメーションの調整方法

ましゅまろ PB はつぶれる際に胸ボーンをアニメーションでスケール変更することでもっちりさせています。つぶれアニメーションを変更したい場合は「marshmallow_PB/Animation/MPB_L_Scale_squish・MPB_R_Scale_squish」の 2 つのアニメーションの Scale の x と y のパラメータを変更してください。

### アバタープリセットの設定項目

<img
src={require('/img/preset.png').default}
style={{ width: '400px' }}
/>
アバターのプリセット設定は marshmallow_PB/Setup/Preset フォルダに存在します。

#### Path

胸ボーンやコライダーのアバターからの相対パスです。

#### breast_L_position、breast_L_scale

それぞれ marshmallow_PB_L のローカル座標とスケールです。なお、marshmallow_PB_R の座標は L の座標を反転して設定されます。

#### (Parameter)\_0、(Parameter)\_100

胸の blendshape が 0、100 の時の値を入れます。中間の値はこのパラメータから補完されます。各パラメータは設定項目の PhysBone のパラメータに対応しています。

### アバタープリセットの追加方法

1. 胸の blendshape が 0 と 100 の 2 つのアバターを用意し、それぞれに非対応アバターと同様にして marshmallow_PB_L を設定し、そのときのローカル座標、スケールを記録します。
2. Preset フォルダ内のプリセット 0 を複製し、名前を適当に変更します。(数字 1 文字の場合はエラーが発生します)
3. アバター名、Path、breast_L_position、breast_L_scale をそれぞれ変更します。他のパラメータはそのままでも基本的に問題ありません。
4. セットアップツールで確認してプリセットが追加されていれば完了です。

<!-- もし非対応アバターのプリセットを公式に提供して頂ける場合は[こちらのGooglefrom](https://forms.gle/9qfEqBHDyiEisy4G9)にお送りください。 -->

<!-- ### 手動で導入したい場合(Prefabなど)
ましゅまろPBをツールを用いずに手動で導入したい場合はこちらの動画を参照してください。(非推奨)
<iframe width="280" height="158" src="https://www.youtube.com/embed/pKpk3hQhihc?si=trFn__bA0hqWF_76" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> -->
