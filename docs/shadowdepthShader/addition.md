---
sidebar_position: 4
---

# 追加機能

### アバター由来のPhysBoneの利用
アバター由来のPBを使用したまま、ましゅまろPBのつぶれ機能のみを使用したい場合は設定項目の「つぶれ機能のみ適用(元のPBを使用)」をオンにして下さい。基本的には元のPBの動きのままですが、押した場合にはつぶれます。掴み機能を使用する場合、元のPBのAllow Grabbingはオフにして下さい。

### 平行胸ボーンの使用
「胸の回転の寄与度」を小さくすると、胸が平行に動くようになります。平行に近づくと重量感が増します。なお、デフォルトでは0.8なので、少しだけ平行化されています。

### 頭コライダーの設定
~~ましゅまろPBは「他プレイヤーとの胸干渉」を設定していると、ましゅまろPBを入れていないプレイヤーでも頭のデフォルトコライダーと干渉することが出来ます。しかし、通常の頭コライダーはサイズが小さく、干渉しにくいためAvatar DescripterのColidersの項目を変更してコライダーのサイズを大きくすると効果的です。~~  
ましゅまろPBは「他プレイヤーとの胸干渉」を設定していると、head_タグを持つVRC Contact Senderにより干渉することが出来ます。頭などにVRC Contact Senderを設定すると、他プレイヤーのましゅまろPBに干渉することが出来ます。
<img
  src={require('/img/head.png').default}
  style={{ width: '400px' }}
/>

### つぶれアニメーションの調整方法
ましゅまろPBはつぶれる際に胸ボーンをアニメーションでスケール変更することでもっちりさせています。つぶれアニメーションを変更したい場合は「marshmallow_PB/Animation/MPB_L_Scale_squish・MPB_R_Scale_squish」の2つのアニメーションのScaleのxとyのパラメータを変更してください。

### アバタープリセットの設定項目
<img
  src={require('/img/preset.png').default}
  style={{ width: '400px' }}
/>
アバターのプリセット設定はmarshmallow_PB/Setup/Presetフォルダに存在します。  

#### Path  
胸ボーンやコライダーのアバターからの相対パスです。  

#### breast_L_position、breast_L_scale  
それぞれmarshmallow_PB_Lのローカル座標とスケールです。なお、marshmallow_PB_Rの座標はLの座標を反転して設定されます。  

#### (Parameter)_0、(Parameter)_100  
胸のblendshapeが0、100の時の値を入れます。中間の値はこのパラメータから補完されます。各パラメータは設定項目のPhysBoneのパラメータに対応しています。  

### アバタープリセットの追加方法
1. 胸のblendshapeが0と100の2つのアバターを用意し、それぞれに非対応アバターと同様にしてmarshmallow_PB_Lを設定し、そのときのローカル座標、スケールを記録します。
2. Presetフォルダ内のプリセット0を複製し、名前を適当に変更します。(数字1文字の場合はエラーが発生します)
3. アバター名、Path、breast_L_position、breast_L_scaleをそれぞれ変更します。他のパラメータはそのままでも基本的に問題ありません。
4. セットアップツールで確認してプリセットが追加されていれば完了です。

<!-- もし非対応アバターのプリセットを公式に提供して頂ける場合は[こちらのGooglefrom](https://forms.gle/9qfEqBHDyiEisy4G9)にお送りください。 -->

<!-- ### 手動で導入したい場合(Prefabなど)
ましゅまろPBをツールを用いずに手動で導入したい場合はこちらの動画を参照してください。(非推奨)  
<iframe width="280" height="158" src="https://www.youtube.com/embed/pKpk3hQhihc?si=trFn__bA0hqWF_76" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> -->