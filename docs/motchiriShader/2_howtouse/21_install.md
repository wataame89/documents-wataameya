# 導入方法

### 対応アバターの場合

<iframe width="100%" height="480" src="https://www.youtube.com/embed/BnpupxYl1XA?si=242cx5mi2yY1-sgL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

#### パッケージの導入

1. VRChat Creator Companion(VCC)でプロジェクトを開きます。
2. [Modular Avatar](https://modular-avatar.nadena.dev/ja/)のパッケージを VCC に導入します。([パッケージのリンクはこちら](vcc://vpm/addRepo?url=https://vpm.nadena.dev/vpm.json))
3. VCC 上でプロジェクトの Manage Project から"**Gesture Manager**","**Modular Avatar**","**Non-Destructive Modular Framework**" の 3 点を追加します。
4. 再度プロジェクトを開き、インポートされていることを確認します。

:::caution
**ver1.9.0 以前、または beta 版のもっちりシェーダーが入っている場合**は motchiri_shader フォルダを削除します。(VGC フォルダは既存の FX が入っているため、削除しないでください)
:::

#### もっちりシェーダーの導入

5. [最新版のもっちりシェーダー](https://wataame89.booth.pm/items/4108136)をインポートします。
6. アバターに使用されているシェーダーが lilToon であることを確認します。
7. アバターを右クリックし、メニューから「wataameya→MotchiriShader」をクリックします。
8. 生成された motchiri_shader_Setup のアバタープリセットを設定します。
9. 「Asset/motchiri_shader」フォルダにある for test プレハブをシーン上に置きます。
10. 画面上部のメニューバーから「Tools→Gesture Manager Emulator」をクリックします。
11. Gesture Manager を起動し、for test を肌に近づけて正常にもっちりしていれば設定完了です。

:::caution
正常に動作しない場合は、[「不具合対応」](https://wataame89.github.io/documents-wataameya/motchiriShader/howtouse/addition)、[「Q&A」](https://wataame89.github.io/documents-wataameya/motchiriShader/qa)を確認してみて下さい。  
:::

<br/>
<br/>

### 非対応アバターの場合

<!-- <iframe width="100%" height="480" src="https://www.youtube.com/embed/BYJZBUt0f_w?si=W9nI2fAhSIp5ubg8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> -->

#### もっちりシェーダーの導入

導入方法は対応アバターの場合とほぼ同様です。  
プリセットは「無し」を選択し、メッシュ、マスクを設定して下さい。

マスクが存在しない場合は、作成する必要があります。

#### マスクの作成

アバターの UV 上で、**へこませたくない部分を黒く塗りつぶしたマスク**を作成する必要があります。

<img
src={require('/img/MotchiriShader/Rindo.png').default}
style={{ width: '50%' }}
/>

もっちりシェーダーのマスクは対応する UV 位置が白い部分ではへこみ、黒い部分ではへこまないようになります。(灰色などでは中間の強度となります。)
また、UV の切れ目はへこみ具合が異なると破綻する場合があるので、同じ色に設定してください。(blender のテクスチャペイントを使うと簡単です)

ペイントソフトを用いて白いテクスチャ上で、体メッシュの UV テクスチャ上の手足部分を黒く塗りつぶしてください。塗りつぶされた手足と繋がる部分(手首、足首の継ぎ目)も黒く塗る必要があります。メッシュ上にある白と黒の境目はぼかしてください。

:::caution

- 無くても問題ありませんが、手足以外では首、前腕、肘、膝、へそ、骨盤、脛を黒く塗ると自然なへこみ具合になります。
- 顔テクスチャも同一の場合、顔も黒く塗ってください。

  :::

:::danger

- Unity にマスクを導入後、必ずテクスチャの **Mip Streaming** の項目をオンにして下さい。(アップロード時にエラーが発生します)

  :::

#### 作成例：

竜胆ちゃんの UV のイメージではマスク作成は以下のようになります。

<img
src={require('/img/MotchiriShader/hitaiou1.png').default}
style={{ width: '80%' }}
/>

顔のマスクは一度全て黒く塗りつぶしたテクスチャを作り、UV 上のほっぺ部分を白く塗り、ぼかすと簡単です。
<img
src={require('/img/MotchiriShader/hitaiou2.png').default}
style={{ width: '30%' }}
/>

非対応アバターのマスクが作成出来ましたら[こちらのフォーム](https://forms.gle/KLTTSqsE4qs8uvfN8)から共有して頂けるとありがたいです。  
([マスク共有フォルダはこちら](https://drive.google.com/drive/folders/1stqqIn21kCK0fb2n-9iuPANs1vyrfCKaCaRX-rHcl3V3LFspC_EzBBgI0mktw_Ot9TtHXLb9?usp=sharing))

<br/>
<br/>

### 旧方式(Modular Avatar 不使用)

:::danger 非推奨の方法
アバターと FX レイヤーを複製して設定しているため、現在は非推奨です。  
特別な理由が無い場合は新方式を使用してください。

動作確認に Gesture Manager を使用するため、VRChat Creator Companion(VCC)にのみ対応しています。  
(非推奨ですが、動作確認を VRChat でするのであれば VCC でなくても正常に動作します)

[旧方式の説明書はこちら](https://docs.google.com/document/d/12P_FFVJuNOV73QjRfC3pZ4aRZqmnqr281_yjS4hq_uY/edit?usp=share_link)
:::
