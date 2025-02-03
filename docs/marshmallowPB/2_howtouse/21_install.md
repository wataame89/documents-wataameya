# 導入方法

### 対応アバターの場合

<iframe width="100%" height="480" src="https://www.youtube.com/embed/17p4SnL1kus?si=og9SA6Ef8Rwkg3_-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

#### パッケージの導入

1. VRChat Creator Companion(VCC)でプロジェクトを開きます。
2. [Modular Avatar](https://modular-avatar.nadena.dev/ja/)のパッケージを VCC に導入します。([パッケージのリンクはこちら](vcc://vpm/addRepo?url=https://vpm.nadena.dev/vpm.json))
3. VCC 上でプロジェクトの Manage Project から"**Gesture Manager**","**Modular Avatar**","**Non-Destructive Modular Framework**" の 3 点を追加します。
4. 再度プロジェクトを開き、インポートされていることを確認します。

:::caution
**ver1.7.0 以前のましゅまろ PB が入っている場合**は「marshmallow_PB/Setup/FX」内の生成済み FX を移動し、marshmallow_PB フォルダを削除します。(削除しない場合、エラーが発生します)
:::

#### ましゅまろ PB の導入

5. [最新版のましゅまろ PB](https://wataame89.booth.pm/items/4511536)をインポートします。
6. アバターを右クリックし、メニューから「wataameya→MarshmallowPB」をクリックします。
7. 生成された marshmallow_PB_Setup のアバタープリセットを設定します。
8. 画面上部のメニューバーから「Tools→Gesture Manager Emulator」をクリックします。
9. Gesture Manager を起動し、ましゅまろ PB が正常に動いていれば設定完了です。

:::caution
正常に動作しない場合は、[「不具合対応」](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition)、[「Q&A」](https://wataame89.github.io/documents-wataameya/marshmallowPB/qa)を確認してみて下さい。  
:::

<br/>
<br/>

### 非対応アバターの場合

<iframe width="100%" height="480" src="https://www.youtube.com/embed/BYJZBUt0f_w?si=W9nI2fAhSIp5ubg8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

#### ましゅまろ PB の導入

5. [最新版のましゅまろ PB](https://wataame89.booth.pm/items/4511536)をインポートします。
6. アバターを右クリックし、メニューから「wataameya→MarshmallowPB」をクリックします。
7. 生成された marshmallow_PB_Setup をプリセット無しのまま、胸ボーンを設定します。
8. アバター由来の胸の PhysBone コンポーネントを削除します。(動画では操作ミスでオンのままになっています)  
   胸ボーン以外の部分にコンポーネントが設定されている場合があるので、十分に注意してください。
9. marshmallow_PB_Setup 以下の"For Unsupported Avatar/marshmallow_PB_L"をオンにします。
10. 緑色のカプセルコライダーの位置を確認します。見えない場合は Scene 上部の Gizmos をクリックしてください。
11. カプセルコライダーをアバターの左胸の部分に移動・スケール調整します。目安としては、下図の真横から見たときに胸の境目のカーブ(赤線部分)にピボット(XYZ 方向に動かす部分)の中心が位置するように設定してください。
12. カプセルコライダーが胸に収まるようにスケールを変更します。
13. Gesture Manager を起動し、正常に動いていれば設定完了です。  
    (起動時はカプセルコライダーは消え、代わりに別のコライダーが生成されます。少し位置が変わりますが、正常です。)

:::caution
正常に設定できない場合は、「よくある質問」 「困ったときは」を確認してみて下さい。  
特に**アバター由来の胸の PhysBone コンポーネントを削除されていない場合**は不具合が起こりやすいため、必ず削除してください。
:::

<img
src={require('/img/marshmallowPB/hitaioou2.png').default}
style={{ width: '100%' }}
/>

<br/>
<br/>

### 旧方式(Modular Avatar 不使用)

:::danger 非推奨の方法
アバターと FX レイヤーを複製して設定しているため、現在は非推奨です。  
特別な理由が無い場合は新方式を使用してください。

<iframe width="280" height="158" src="https://www.youtube.com/embed/739tyxA7PKo?si=FkVczSvkKsqLBcV9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

動作確認に Gesture Manager を使用するため、VRChat Creator Companion(VCC)にのみ対応しています。  
(非推奨ですが、動作確認を VRChat でするのであれば VCC でなくても正常に動作します)

[旧方式の説明書はこちら](https://docs.google.com/document/d/1dvbHSSSIGPoFFt5rA9RUba8309XX7bLs-4dKND2Bam0/edit?usp=sharing)
