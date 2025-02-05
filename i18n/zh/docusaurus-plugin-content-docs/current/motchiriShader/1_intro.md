
# 简介

<img
src="https://booth.pximg.net/fa10e05a-2beb-4ed5-bce0-808f4aa52e0b/i/4108136/1d135fdd-842f-4863-b438-e352b4528ce5_base_resized.jpg"
style={{ width: '300px' }}
/>

### 产品说明

[もっちりシェーダー](https://wataame89.booth.pm/items/4108136)是一款利用 Avatar Dynamics 实现的、任何人都可以戳捏“弹软感”的着色器。通过人食指对网格进行接触，自身以及没有导入该着色器的其他玩家也可以进行触碰。

借助 Modular Avatar 的套件化系统，可轻松以非破坏性的方式进行导入。即使是并未提供适配的头像，只要后述部分自制遮罩（Mask），也能够进行设置。

使用本着色器需要一张指定“弹软强度”的遮罩。通过这张遮罩可以防止变形崩坏，或者让骨骼等部分保持硬度。适配的头像本身会附带相应遮罩，但如果想要更精细地调整或使用非适配头像，则需要自己制作遮罩。

本着色器基于 lilLab 制作的 [lilToon](https://booth.pm/ja/items/3087170)，因此会在将原有 lilToon 转换的基础上进行设置。利用 lilToon 的细分（高多边形化）功能，可以让低模部分（如大腿等）呈现“弹软”效果。基本上只要是脸部、身体、尾巴等网格均匀的部位，都可以实现弹软。

同一时间只能与自身及最邻近的一名其他玩家进行网格接触。默认对人食指做出反应，但也可以通过设置更换或新增碰撞体（Collider）。
从 ver2.0.0 开始，支持 Modular Avatar 的 [Non-Destructive Modular Framework(NDMF)](https://github.com/bdunderscore/ndmf)，可实现非破坏性导入。

<iframe width="640" height="360" src="https://player.vimeo.com/video/1052573235?h=04bac04696&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

### 功能

- 弹软功能：用食指即可捏出柔软感！
- 着色器转换功能：可自动将 lilToon 转换为弹软着色器！
- 追加碰撞体功能：通过 EX 碰撞体设置，可使食指之外的部位也能触碰！
- 其他各种细节调节（弹软函数微调、法线修正、等）

### 支持的 Avatar

あまなつ Amanatsu、あのん Anon、カルキア Carukia、シエル Ciel、ハオラン Haoran、イメリス Imeris、カリン Karin、桔梗 Kikyo、ここあ Kokoa、狐雪 Koyuki、リーファ Leefa、響狐リク Liqu、ルルリア Luruleah、まりえる Mariel、舞夜 Maya、メリノ Merino、竜胆 Rindo、ルシナ Rushina、セレスティア Selestria、ティコ Tycho、うるる Ururu、ウルフェリア Wolferia、チセ Chise、AA_body、アッシュ Ash、セフィラ Sephira、エリンニヤ Elinyaa、いぬいぬ Inuinu、ナユ Nayu、RadDollV2、レイニィ Rainy、リアアリス RearAlice、ラスク Rusk、シノノメ Shinonome、ソラハ Soraha、TETRA、幽狐さん Yuukosan、ゾメ Zome、京狐 Kyoko、ルーシュカ Rushka、LSbody、リミリア limilia、ラリィ Ruary、リリシア Lilithia、モナ Mona、めいゆん Meiyun、萌 Moe、ディエス DiEZ、狐薄 kohaku、ライム Lime、ルキフェル Lucifer、マヌカ Manuka、シフォン Chiffon、デルタフレア DELTAFLAIR、くろなつ Kuronatu、ラシューシャ Lasyusha、リルモワ Liloumois、瑞希 Mizuki、ルルネ Rurune、森羅 Sinra、しお Sio、卯月 Uzuki、ヴェール Velle、龍のヨルちゃん Yollchang、愛莉 Airi、しなの Shinano

### 注意事项

- 不支持 Quest 版 VRChat。
- 无法与使用真实阴影系统等 lilToon 的自定义着色器同时并用。
- 默认食指碰撞体是胶囊碰撞体，可能会存在偏移。
- 若使用 VRChat 的 Avatar 缩放功能，则无法正常工作。请在默认大小下使用。
- 使用细分（高多边形化）功能会增加系统负担。若觉得卡顿，请减少细分次数或将其关闭。
- 仅支持 Unity 2022.3.22f1 版本。
- 在 mac 环境下会报错，因此不提供支持。
- 请遵守公序良俗后再进行使用。

