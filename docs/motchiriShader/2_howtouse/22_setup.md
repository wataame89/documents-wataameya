# 設定項目

### セットアップツールの設定項目

<img
src={require('/img/MotchiriShader/setup.png').default}
style={{ width: '80%' }}
/>

---

### 基本設定

#### プリセット

対応アバターを選択する場所です。

---

### シェーダー適用箇所 1~3

#### メッシュ

シェーダーを適用するメッシュを選択します。

#### マテリアルスロット番号

シェーダーを適用するマテリアルのマテリアルスロット番号を指定します。  
メッシュの Skinned Mesh Renderer の Materials の項目の中で、対応するマテリアルが入っている番号を指定します。顔など複数マテリアルが設定されているメッシュの場合には注意が必要です。

#### 細分化(高負荷)

メッシュを細分化し、滑らかにします。体に入れる場合はオンにした方が自然です。

#### 範囲指定マスク

シェーダーでもっちりする範囲をマスク(白黒テクスチャ)で指定します。メッシュが細かい部分(指、爪など)は破綻してしまうため、マスクで反応しないように設定します。マスクなしで設定すると判定の存在する人差し指付近が常時破綻してしまうため、体に導入する場合は必ずマスクが必要となります。

---

### 基本設定

#### もっちりの強さ

もっちりの強さ(深さ)を設定します。

#### 効果範囲

もっちりの範囲を設定します。

#### 影の色

もっちりした際に生じる影の色を設定します。肌の色に応じて設定して下さい。

#### 影の強さ

もっちりした際に生じる影の強さを設定します。

#### にじみ範囲

もっちりした際に生じる影がにじむ範囲を設定します。

---

### 詳細設定

#### もっちり判定調整パラメータ

もっちり判定の深さを調整します。通常はメッシュに接触していなくてももっちりしますが、このパラメータを上げる(0.03 程度)と判定がより深い部分に移動し、メッシュに接触してからもっちりするようになります。

#### もっちりパラメータ 1~3

もっちり関数のパラメータを設定します。パラメータを変更すると、もっちりの形状が変化します。

#### 法線修正

もっちりした際のメッシュの法線を再計算するように設定します。マットキャップやリムライトを入れる場合はオンにして下さい。

#### 法線修正パラメータ

法線の再計算のパラメータを設定します。法線がおかしい場合に調整して下さい。

#### EX コライダー使用

EX コライダーの使用を設定します。EX コライダーとは、人差し指以外に反応するコライダーです。  
オンにすると、VRC Contact Sender の EX1~3 のタグに反応するようになります。EX1~3 が直線で繋がったような挙動を示します。  
具体的な挙動は、motchiri_shader/EX/Motchiri_Stick(もっちり棒).prefab を参考にして下さい。(不具合で Gesture Manager 上では動作しないので、VRChat 上で確認してみて下さい。)

#### EX コライダーのスケーリングファクター

EX コライダーのもっちりの効果範囲を変更する場合に設定します。追加コライダーの効果範囲にこの値を乗算します。通常コライダーには影響しません。追加コライダーのみ効果範囲を変えたい場合に使用してください。

#### コンタクトの範囲

現状は設定できません。初期値から変更しないようにして下さい。

#### コンタクトの配置半径

現状は設定できません。初期値から変更しないようにして下さい。
