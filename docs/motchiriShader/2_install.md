---
sidebar_position: 2
---
# 導入方法
こちらの動画を参照して下さい。

<iframe width="560" height="315" src="https://www.youtube.com/embed/BnpupxYl1XA?si=242cx5mi2yY1-sgL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

1. VRChat Creator Companion(VCC)でプロジェクトを開きます。(**VCCは最新版を使用してください**)
1. [Modular Avatar](https://modular-avatar.nadena.dev/ja/)のパッケージをVCCに導入します。([パッケージのリンクはこちら](vcc://vpm/addRepo?url=https://vpm.nadena.dev/vpm.json))
1. VCC上でプロジェクトのManage Projectから"**Gesture Manager**","**Modular Avatar**","**Non-Destructive Modular Framework**" の3点を追加します。
1. 再度プロジェクトを開き、インポートされていることを確認します。
1. **ver1.9.0以前、またはbeta版のもっちりシェーダーが入っている場合**はmotchiri_shaderフォルダを削除します。(VGCフォルダは既存のFXが入っているため、削除しないでください)
1. [最新版のもっちりシェーダー](https://wataame89.booth.pm/items/4108136)をインポートします。
1. アバターにもっちりシェーダーが入っている場合は、もっちりシェーダーをlilToonに変更し、motchiriオブジェクトを削除し、FXレイヤーを設定前のものに戻します。
1. アバターのシェーダーがlilToonであることを確認します。
1. アバターを右クリックし、メニューからwataameya→MotchiriShaderをクリックします。
1. 生成されたmotchiri_shader_Setupのアバタープリセットを設定します。
1. motchiri_shaderフォルダにあるfor testプレハブをシーン上に置きます。
1. 画面上部のメニューバーからTools→Gesture Manager Emulatorをクリックします。
1. Gesture Managerを起動し、for testを肌に近づけて正常にもっちりしていれば設定完了です。

### 非対応アバターに設定したい場合
プリセット無しの状態でメッシュ、マスクを設定して下さい。  
マスクが存在しない場合、作成する必要があります。  

もっちりシェーダーのマスクは対応するUV位置が白い部分ではへこみ、黒い部分ではへこまないようになります。灰色などでは中間の強度となります。すなわち、へこませたくない部分を黒く塗りつぶしたマスクを作成する必要があります。また、UVの切れ目はへこみ具合が異なると破綻する場合があるので、同じ色に設定してください。(blenderのテクスチャペイントを使うと簡単です)

ペイントソフトを用いて白いテクスチャ上で、体テクスチャのUVの手足部分を黒く塗りつぶしてください。塗りつぶされた手足と繋がる部分(手首、足首の継ぎ目)も黒く塗る必要があります。無くても問題ありませんが、手足以外では首、前腕、肘、膝、へそ、骨盤、脛を黒く塗ると自然なへこみ具合になります。メッシュ上にある白と黒の境目はぼかしてください。また、顔テクスチャも同一の場合、顔も黒く塗ってください。  

竜胆ちゃんのUVのイメージではマスク作成は以下のようになります。

<img
  src={require('/img/hitaiou1.png').default}
  style={{ width: '600px' }}
/>

顔のマスクは一度全て黒く塗りつぶしたテクスチャを作り、UV上のほっぺ部分を白く塗り、ぼかすと簡単です。
<img
  src={require('/img/hitaiou2.png').default}
  style={{ width: '180px' }}
/>

Unityにマスクを導入後、必ずMip Streamingの項目をオンにして下さい。(アップロード時にエラーが発生します)

非対応アバターのマスクが作成出来ましたら[こちらのフォーム](https://forms.gle/KLTTSqsE4qs8uvfN8)から共有して頂けるとありがたいです。([マスク共有フォルダはこちら](https://drive.google.com/drive/folders/1stqqIn21kCK0fb2n-9iuPANs1vyrfCKaCaRX-rHcl3V3LFspC_EzBBgI0mktw_Ot9TtHXLb9?usp=sharing))

### 旧バージョン(ver1.9.0以前)
[こちらのドキュメント](https://docs.google.com/document/d/12P_FFVJuNOV73QjRfC3pZ4aRZqmnqr281_yjS4hq_uY/edit?usp=share_link)を参照してください
