# 応用編

:::info ページの説明
ましゅまろ PB のより高度な用法を知りたい場合に参照するページです。  
(一般的な問題を解決したい場合は[「不具合対応」](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition)、[「Q&A」](https://wataame89.github.io/documents-wataameya/marshmallowPB/qa)を参照)
:::

### アバター由来の PhysBone を利用する

アバター由来の PB を使用したまま、ましゅまろ PB のつぶれ機能のみを使用したい場合は、設定項目の「つぶれ機能のみ適用(元の PB を使用)」をオンにして下さい。基本的には元の PB の動きのままですが、押した場合にはつぶれます。ましゅまろ PB の掴み機能を使用する場合、元の PB の Allow Grabbing はオフにして下さい。

### ましゅまろ PB の揺れ方を調整する

ましゅまろ PB の揺れ方は複数のパラメータによって決定されます。  
PB プリセットは PhysBone の「Pull」、「Momentum」、「Stiffness」、「Gravity」、「GravityFalloff」、「Immobile」を設定します。

PB プリセットで設定されず、揺れ方に関係するパラメータは「StretchMotion」と「胸の回転の寄与度」の 2 つがあります。

- **「StretchMotion」** ： 胸のつぶれやすさのパラメータであり、**つぶれる方向に対しての柔らかさ**を決定します。
- **「胸の回転の寄与度」** ： 胸ボーンの角度に関するパラメータであり、**胸の重量感**を決定します。
  - 値が 1 では通常の PB と同様ですが、値を小さくすると胸が平行に移動するようになります。
  - 実質的に、胸ボーンの中心が後ろに移動することとなり、より自然な揺れとなります。
  - デフォルトの値は 0.8 なので、少しだけ平行化されています。

以上のパラメータを調整することで、揺れ方の詳細な調整が出来ます。各設定の詳細は[設定項目](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)を確認してください。

### ましゅまろ PB の位置、角度を調整する

対応アバターをプリセットで設定するとましゅまろ PB のボーンの位置、角度は固定されていますが、非対応アバターとして設定すると、それぞれ反映されます。胸サイズを大きくした場合などにおすすめです。

### 他プレイヤーのましゅまろ PB と干渉させる

ましゅまろ PB の設定で、「他プレイヤーとの胸干渉」をオンにします。どちらのプレイヤーもこの設定がオンになっている必要があります。なお、デフォルトの値はオフになっています。

### 頭コライダーと干渉させる

~~ましゅまろ PB は「他プレイヤーとの胸干渉」を設定していると、ましゅまろ PB を入れていないプレイヤーでも頭のデフォルトコライダーと干渉することが出来ます。しかし、通常の頭コライダーはサイズが小さく、干渉しにくいため Avatar Descripter の Coliders の項目を変更してコライダーのサイズを大きくすると効果的です。~~  
ましゅまろ PB は「他プレイヤーとの胸干渉」を設定していると、head\_タグを持つ VRC Contact Sender により干渉することが出来ます。頭などに VRC Contact Sender を設定すると、他プレイヤーのましゅまろ PB に干渉することが出来ます。
<img
src={require('/img/marshmallowPB/head.png').default}
style={{ width: '100%' }}
/>

### つぶれアニメーションを調整する

ましゅまろ PB はつぶれる際に胸ボーンをアニメーションでスケール変更することでもっちりさせています。つぶれアニメーションを変更したい場合は「marshmallow_PB/Animation/MPB_L_Scale_squish・MPB_R_Scale_squish」の 2 つのアニメーションの Scale の x と y のパラメータを変更してください。

### 自作のアバタープリセットを追加する

ましゅまろ PB にはアバターごとの設定を記録したプリセット機能が存在します。  
非対応アバターに複数回設定したい場合には、自作のアバタープリセットを作成すると便利です。

#### アバタープリセットの追加方法

1. 胸の blendshape が 0 と 100 の 2 つのアバターを用意し、それぞれに非対応アバターと同様にして設定し、そのときの marshmallow_PB_L の position、rotation、scale を記録します。
2. Preset フォルダ内のプリセット 0 を複製し、名前を適当に変更します。(ただし、数字 1 文字の場合はエラーが発生します)
3. アバター名、Path、breast_L_position、breast_L_rotation、breast_L_scale をそれぞれ変更します。  
    ( 「\_0」 「\_100」 はそれぞれ対応する blendshape のアバターの値を入れてください)  
   他のパラメータはそのままでも基本的に問題ありません。
4. セットアップツールで確認してプリセットが追加されていれば完了です。

#### アバタープリセットの設定項目

<img
src={require('/img/marshmallowPB/preset.png').default}
style={{ width: '80%' }}
/>
アバターのプリセット設定は marshmallow_PB/Setup/Preset フォルダに存在します。

#### Path

胸ボーンやコライダーのアバターからの相対パスです。

#### breast_L_position、breast_L_scale

それぞれ marshmallow_PB_L のローカル座標とスケールです。なお、marshmallow_PB_R の座標は L の座標を反転して設定されます。

#### (Parameter)\_0、(Parameter)\_100

胸の blendshape が 0、100 の時の値を入れます。中間の値はこのパラメータから補完されます。各パラメータは設定項目の PhysBone のパラメータに対応しています。

<!-- もし非対応アバターのプリセットを公式に提供して頂ける場合は[こちらのGooglefrom](https://forms.gle/9qfEqBHDyiEisy4G9)にお送りください。 -->

<!-- ### 手動で導入したい場合(Prefabなど)
ましゅまろPBをツールを用いずに手動で導入したい場合はこちらの動画を参照してください。(非推奨)
<iframe width="280" height="158" src="https://www.youtube.com/embed/pKpk3hQhihc?si=trFn__bA0hqWF_76" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> -->
