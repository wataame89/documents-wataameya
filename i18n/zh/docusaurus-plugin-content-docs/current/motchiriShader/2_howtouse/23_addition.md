
# 进阶篇

:::info 页面说明
如果想了解「もっちりシェーダー」更高级的使用方法，可参考本页面。  
（若遇到一般性问题，请参见 [「不具合対応」](https://wataame89.github.io/documents-wataameya/motchiriShader/howtouse/addition) 或 [「Q&A」](https://wataame89.github.io/documents-wataameya/motchiriShader/qa)）
:::

### EX 碰撞体的设置

「もっちりシェーダー」默认包含 4 个碰撞体（自己左右食指、对方左右食指），另外可以设定 EX 碰撞体（胶囊碰撞体）。

在 Avatar 的骨骼下放入 motchiri_shader/EX/Motchiri_Stick(もっちり棒).prefab，即可添加新的碰撞体。默认情况下，也能触发他人 Avater 上的「もっちりシェーダー」。请勿同时使用两个以上的该 prefab，以免冲突。

在 prefab 内含有 EX_Sender_1~3 三个碰撞体，虽然看上去是 3 个球状体，但实际上会连成 EX1-EX2-EX3 的胶囊形状。（默认碰撞体与其判定机制不同）

可通过移动 EX_Sender_1~3 来自由设定碰撞体的位置。若想做成球状碰撞体，可将 EX_Sender_1~3 重叠放置。

<img
src={require('/img/MotchiriShader/excollider.png').default}
style={{ width: '400px' }}
/>

### 应用于其他网格（脸、尾巴、服装等）

与身体相同，可在安装工具中指定网格即可。但如果网格整体形状不均匀（例如衣服的某些边缘、面部多处细分等），需要制作遮罩以避免破损。（如尾巴等网格均匀的部位则无需额外遮罩）  
若希望让脸颊产生弹软效果，需要制作一张单独的面部遮罩，或使用官方提供的支持面部的预设（如舞夜头像）。

### 让布料膨胀的系统

通过反转「もっちりシェーダー」并应用于服装，可实现类似 [此推文](https://x.com/kuukuukon/status/1814951825608785997) 显示的效果。  
目前尚无简单的设置方式，后续会考虑提供更便利的功能。

