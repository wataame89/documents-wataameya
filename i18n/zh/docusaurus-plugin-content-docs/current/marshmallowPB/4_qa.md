
# Q&A

:::info 页面说明
当 Marshmallow PB 正常工作却仍有不满或疑问时，请参阅本页面。  
（若想了解更进阶的用法，请参阅 [“使用方法 / 应用篇”](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition)；若出现异常则请参阅 [“当遇到问题时”](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition)）
:::

### 想在 VRChat 中更改 Marshmallow PB 的大小

由于 Marshmallow PB 的内部实现方式，无法在 VRChat 内改变其大小。

### 想把它用在臀部

Marshmallow PB 只能引入一个，所以无法同时在胸部和臀部使用。  
不过，如果使用 Modular Avatar 的 Manual Bake Avatar 将 PB 烧录到模型中，可能可以使用，但不在官方支持范围内。

### 胸部拉伸过长

#### 当弯腰时胸部过度下垂：

在设定中将 “胸部下垂程度” 的数值调小，就不会下垂过度。

#### 当抓住拖拽时胸部过度延伸：

通过减小 PhysBone / MaxStretch 值即可应对。

### 想像普通 PB 那样固定住 Marshmallow PB

由于 Marshmallow PB 的内部构造，无法像普通 PhysBone 那样固定。

### 想把已设置的 Marshmallow PB 头像进行贩卖

根据规定，**不允许将其设置在自制头像上之后进行售卖**。

### 想将导入了 Marshmallow PB 的头像还原到最初

#### 使用新方式时：

新方式会以非破坏性的方式引入，因此只要删除头像下的 marshmallow_PB_Setup 即可恢复到导入前状态。

#### 使用旧方式（未用 Modular Avatar）时：

旧方式会对头像和 FX 进行复制，若要还原必须进行操作。Marshmallow PB 会复制同名骨骼（例如 Chest/breast_L/breast_L/…），并将原先的胸部骨骼作为其子。  
所以只需把这两个同名骨骼中的子骨骼提出，然后删除父骨骼即可复原。再删除带有 “marshmallow” 字样的其他对象，并将 FX Layer 切回原始头像。最后把头像名称末尾的 “\_MPB” 删除就完成了。（如果头像或 FX 的名称以 “\_MPB” 结尾，会被引入工具拒绝）  
详情可查看以下视频。

<iframe width="560" height="315" src="https://www.youtube.com/embed/Nh1pLiSWz6I?si=6jGZxrHTBik8gz7L" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

