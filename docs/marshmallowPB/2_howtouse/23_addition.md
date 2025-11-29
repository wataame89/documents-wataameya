# 応用編

:::info ページの説明
**ましゅまろ PB のより高度な使用方法**を知りたい場合に参照するページです。  
(一般的な問題を解決したい場合は[「不具合対応」](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition)、[「Q&A」](https://wataame89.github.io/documents-wataameya/marshmallowPB/qa)を参照)
:::

### ましゅまろ PB の揺れ方を調整する

ましゅまろ PB の揺れ方は主に **Physbone**、**Inertia(慣性/疑似多重ボーン)**、**Parallel Bone(平行ボーン)** のパラメータによって決定されます。

**Physbone**：胸ボーンのメインの挙動に関するパラメータであり、**胸の揺れ方**を決定します。  
**Inertia(慣性/疑似多重ボーン)**：胸ボーンの慣性に関するパラメータであり、**胸の柔軟性**を決定します。  
**Parallel Bone(平行ボーン)**： 胸ボーンの角度保持に関するパラメータであり、**胸の重量感**を決定します。

ましゅまろ PB は通常の Physbone に加え、Inertia、Parallel Bone の機能により、自然な揺れを実現しています。

<div
  style={{
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  }}
>

  <div>
    <p>**× Inertia、Parallel Bone なし**</p>
    <img
      src={require('/img/marshmallowPB/PhysBone_NoInertiaNoParallel.gif').default}
      style={{ width: '100%' }}
    />
  </div>

  <div>
    <p>**○ Inertia、Parallel Bone あり**</p>
    <img
      src={require('/img/marshmallowPB/Physbone.gif').default}
      style={{ width: '100%' }}
    />
  </div>
</div>

以上のパラメータを調整することで、揺れ方の詳細な調整が出来ます。  
各設定の詳細は[設定項目](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)を確認してください。

Physbone と Inertia を微調整したい場合は、再生時にアバター下に生成される「marshmallow_PB/PhysBone_L,R、Inertia_L,R」の PhysBone コンポーネントを直接操作すると、パラメータの影響を即座に確認できます。(Parallel Bone はシステムから設定して下さい)

<img
src={require('/img/marshmallowPB/PhysboneSetting.png').default}
style={{ width: '80%' }}
/>

### ましゅまろ PB の揺れ方を保存・共有する

ましゅまろ PB の PB プリセットを保存・共有することが出来ます。  
**コード形式**：プリセットをコードとして出力し、**SNS などで簡単に保存・共有**することが出来ます。  
**ファイル形式**：プリセットをファイル形式で保存・共有することが可能です。こちらは PB プリセット欄に表示されます。

<img
src={require('/img/marshmallowPB/PBPresetSetting.png').default}
style={{ width: '80%' }}
/>

### ましゅまろ PB のコライダーを設定する

任意の PB コライダーを Physbone 設定の Collider にコライダーを登録すると干渉するようになります。  
二の腕、太ももなどに追加するのがおすすめです。

### ましゅまろ PB の位置、角度、大きさを調整する

対応アバターをプリセットで設定するとましゅまろ PB のボーンの位置、角度、大きさは固定されてしまいます。  
調整したい場合は、対応アバターでも非対応アバターとして設定すると、自由に調整が可能です。

### 他プレイヤーのましゅまろ PB と干渉させる

ましゅまろ PB の設定で、「他プレイヤーとの胸干渉」をオンにすると、胸同士を合わせた際につぶれます。  
どちらのプレイヤーもこの設定がオンになっている必要があります。  
VRC 上でもメニューでオンオフが出来ます。

### 他プレイヤーのデフォルトコライダーと干渉させる

ましゅまろ PB は「他プレイヤーとの胸干渉」をオンにしていると、頭、胴体のデフォルトコライダーと干渉することが出来ます。  
通常の頭コライダーはサイズが小さいため、 Avatar Descripter の Coliders の項目を変更してコライダーのサイズを大きくすると効果的です。

<img
src={require('/img/marshmallowPB/head.png').default}
style={{ width: '100%' }}
/>

### アバター由来の PhysBone を利用する

アバター由来の PB を使用したまま、ましゅまろ PB のつぶれ機能のみを使用したい場合は、設定項目の「つぶれ機能のみ適用(元の PB を使用)」をオンにして下さい。  
基本的には元の PB の動きのままですが、押した場合にはつぶれます。  
※ましゅまろ PB の掴み機能を使用する場合、元の PB の Allow Grabbing はオフにして下さい。

<!-- ### 自作のアバタープリセットを追加する

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

胸の blendshape が 0、100 の時の値を入れます。中間の値はこのパラメータから補完されます。各パラメータは設定項目の PhysBone のパラメータに対応しています。 -->

<!-- もし非対応アバターのプリセットを公式に提供して頂ける場合は[こちらのGooglefrom](https://forms.gle/9qfEqBHDyiEisy4G9)にお送りください。 -->
