
# 设定项目

### 设置工具中的设定项目

<img
src={require('/img/marshmallowPB/setup.png').default}
style={{ width: '80%' }}
/>

---

### 基本设定

#### 预设 (Preset)

在此处选择头像预设。

#### 胸部骨骼

选择您的头像的胸部骨骼。

#### 胸部大小（blendshape）

仅适用于支持的头像，对 **让胸部变大** 的形状键进行数值设置。  
如果是让胸部变小的形状键，则不支持，请当作不支持的头像进行配置。

#### 胸部骨骼 Y 缩放（Transform）

在此处输入胸部骨骼的 **Y 缩放** 值。X、Z 缩放值无需输入。  
即使胸部骨骼的 X、Y、Z 缩放值各不相同，也能正常工作。

#### PB 预设

选择 PhysBone 的预设。  
晃动方式共有 “顺滑 (なめらか)”、“ぷるぷる (PuruPuru)”、“たゆんたゆん (TayunTayun)” 三种，每种又有三段硬度可调。

---

### PhysBone

#### Pull

PhysBone 恢复原状的力量。

#### Momentum

PhysBone 弹力（弹簧强度）的参数。

#### Stiffness

PhysBone 不易弯曲（减少晃动）的参数。

#### Gravity

PhysBone 所受重力的强度。

#### GravityFalloff

相对于初始角度偏移时，受重力影响的程度。

#### Immobile

PhysBone 不易移动的程度。本参数不会影响被碰撞体按压时的行为。

#### LimitAngle

PhysBone 的限制旋转角度。

#### CollisionRadius

PhysBone 碰撞体半径。数值越大，碰触胸部的判定范围越大。

#### LimitColliderPosition

用于防止穿透的碰撞体位置参数。适度增大可作为防穿透对策。  
（例如：从 0.135 改为 0.18）

#### StretchMotion

PhysBone 在挤压方向上的惯性参数。决定当头像前进时胸部因惯性而被挤压的幅度。

#### MaxStretch

PhysBone 能伸长的最大值。值越大能伸得越长。

#### MaxSquish

PhysBone 能被挤压的最大值。值越大挤压越深；反之则挤压较浅，较难穿透。

#### Collider

PhysBone 可交互的碰撞体。最多可设置 6 个。

---

### 详细设定

#### 抓取功能

是否允许抓住 PhysBone。

#### 地面碰撞体

PhysBone 是否与地面发生干涉。

#### 和其他玩家的胸部干涉

是否开启与同样导入 Marshmallow PB 的其他玩家进行胸部干涉。还可与默认头部碰撞体进行干涉。

#### 胸部晃动旋转

晃动时是否在椭圆上运动。如果关闭，则采用平行晃动。  
由于向上方向的运动会受到限制，如果感觉不自然，可以关闭。

#### 双胸互相干涉

是否为头像的左右胸部设置相互干涉的碰撞体。

#### 干涉用碰撞体大小

设置左右胸部相互干涉时使用的碰撞体大小。

#### 胸部骨骼旋转贡献度

PhysBone 旋转对胸部骨骼影响的大小。若设为 0，则胸部骨骼只会平行运动。衣服不同可能导致不同穿透效果；数值越靠近 0，穿透越少。（相当于胸部骨骼的 Rotation Constraint 的 Weight）

#### 挤压动画强度

调整胸部挤压动画的强度。胸部较大时可能在水平方向上显得过于扩张，减小此值可令其更自然。（相当于胸部骨骼的 Scale Constraint 的 Weight）

#### 胸部下垂程度

设置弯腰时胸部下垂的最大值。若为 0 则不会下垂。

#### 胸部挤压灵敏度（仰卧）

设置仰卧时胸部被挤压的最大值。若为 0 则不会挤压。

---

### 高级设定

#### 仅应用挤压功能（使用原本 PB）

保留头像自带的 PB，仅应用 Marshmallow PB 的挤压功能。也就是关闭 Marshmallow PB 的晃动功能后，让原本 PB 保留运动。若使用时想要 Marshmallow PB 的抓取功能，推荐关闭原本 PB 的 Allow Grabbing。

#### 关闭挤压功能（穿透对策）

关闭 Marshmallow PB 的挤压功能，仅保留晃动功能。如果服装穿透严重，可启用此项。

#### 关闭重力功能

停用 Marshmallow PB 在仰卧时挤压、弯腰时伸长的机制。注意此操作不会关闭 PB 本身的 Gravity 参数。

#### 移除本骨骼下所有 PB

通常仅删除选定的胸部骨骼上的 PB，若不支持的头像结构复杂，可启用此选项，一并删除此骨骼下的所有 PB。

#### 使用此对象的 Transform 作为偏移

使用 marshmallow_PB_Setup 的位置、旋转、缩放作为 Marshmallow PB 的偏移量。  
若因穿高跟鞋等原因导致头像上移，则预设位置可能会错位；此时可启用该功能，将 marshmallow_PB_Setup 提升相同高度，就可避免错位。  
当出现 Marshmallow PB 偏移的问题时，可用该功能进行调节。

