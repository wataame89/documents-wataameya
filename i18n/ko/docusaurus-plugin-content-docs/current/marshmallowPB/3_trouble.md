# 문제가 생겼을 때

:::info 페이지 설명
마시멜로 PB가 제대로 동작하지 않는 것 같을 때 참고하는 페이지입니다.  
(정상 동작하고 있다면, [「사용법/응용편」](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition)이나 [「Q&A」](https://wataame89.github.io/documents-wataameya/marshmallowPB/qa)를 확인해 주세요.)
:::

### 옷이 가슴을 관통하는 경우

마시멜로 PB의 특성상, 일부 의상에서는 어느 정도 관통이 발생할 수 있습니다. 아래와 같은 대처 방법을 시도해 보세요.

- **VRC 상에서 마시멜로 PB 기능을 제한하기**
  - EX 메뉴에서 마시멜로 PB의 스퀴시 OFF, 일반 PB로 전환, 마시멜로 PB OFF 등을 선택할 수 있습니다.
  - 매번 선택해야 하는 번거로움은 있지만, 마시멜로 PB로 인한 관통은 없어집니다.
- **바디 메시에 설정된 가슴 쉐이프키를 약간 줄이기**
  - 바디 메쉬의 가슴 크기 쉐이프키 값을 의상 쪽보다 약간 작게 설정합니다(예: 바디 90, 의상 100).
  - 많은 경우 이 방법만으로도 효과를 볼 수 있습니다.
- **Inertia・Parallel Bone의 효과 줄이기**
  - Inertia의 Immobile 값을 1 쪽으로, Parallel Bone의 평행도를 0 쪽으로 낮추면 각 시스템의 영향이 작아집니다.
  - 특히 상하로 크게 흔들릴 때 관통이 발생하는 경우에 효과적입니다.
- **가슴 본의 회전 각도 제한하기**
  - PhysBone 설정의 「[LimitAngle(각도 제한)](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)」 값을 줄이면 큰 각도로 꺾이는 것을 억제할 수 있습니다.
  - 크게 흔들렸을 때 관통되는 경우에 효과적입니다.
- **가슴의 눌림(스퀴시) 깊이 줄이기**
  - Anti-Penetration Setting(관통 방지 설정)의 「[LimitColliderPosition(눌림 제한 콜라이더의 위치)](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)」 값을 크게 하면 깊게 눌리기 어려워집니다.
  - PhysBone Setting의 「[MaxSquish](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)」 값을 줄이면 기본 자세에서의 눌림을 얕게 할 수 있습니다.
  - Gravity Setting(중력 기능)의 「[Chest Squish Ease(仰向)](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)」 값을 줄이면 仰向으로 누웠을 때의 눌림이 줄어듭니다.
  - 「LimitColliderPosition」은 위 두 값보다 우선해서 작용하므로, 기본적으로 이 값만 조정해도 충분한 경우가 많습니다.
  - 가슴이 눌렸을 때만 관통되는 경우에 효과적입니다.
- **눌림 기능 자체를 끄기**
  - 「[스퀴시 기능 OFF(관통 대책)](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)」를 ON으로 설정하면, 마시멜로 PB의 눌림 기능을 비활성화할 수 있습니다.
  - VRC 상에서도 EX 메뉴에서 ON/OFF를 전환할 수 있습니다.
  - 가슴이 눌렸을 때만 관통되는 경우, 눌림 깊이를 조절하는 것보다 보다 강력한 대책입니다.

### 마시멜로 PB가 적용되지 않는 경우

Gesture Manager로 재생 모드에 들어갔을 때도 `marshmallow_PB_setup`가 씬에 남아 있다면, 마시멜로 PB가 올바르게 적용되지 않은 상태입니다.

#### 창에 메시지가 표시되는 경우

도입 방법을 다시 확인하고, 메시지에 적힌 지시대로 설정을 수정해 주세요.

#### NDMF Console에 에러가 표시되는 경우

어떤 이유로 처리가 도중에 중단된 상태입니다. 에러 코드를 복사하여 [Booth](https://wataame89.booth.pm)나 [Twitter](https://twitter.com/wataameya_vr)로 보내 주세요.  
단, **재생 모드를 종료할 때** 발생하는 에러는 마시멜로 PB와 관련이 없으므로, **재생 모드에 들어갈 때** NDMF 콘솔에 표시되는 에러를 보내 주시면 됩니다.

#### NDMF Console에 에러가 표시되지 않는 경우

Unity 상단 메뉴에서 「Tools → NDM Framework → Apply on Play」에 체크가 들어 있는지 확인해 주세요.  
체크가 되어 있음에도 동작하지 않는다면, 다시 한 번 에러가 없는지 확인한 후, 필요하다면 문의해 주세요.

<!--
### 흔들림이 지나치게 큰 경우
마시멜로 PB를 눌렀을 때 화면이 떨리듯 흔들리는 경우가 있습니다. 기본적으로 Stiffness(변형되기 어려움)를 올리면 대부분의 떨림이 줄어듭니다.

### 에러 창이 뜨는 경우
대부분의 경우, 셋업 툴에서 설정을 잘못한 것이 원인입니다. 도입 방법 동영상을 참고하여 다시 설정해 주세요.
-->

### 가슴이 저절로 눌려 버리는 경우

「다른 플레이어와의 가슴 간섭」이 ON인 상태에서 버그로 인해, 아무것도 하지 않아도 가슴이 저절로 눌리는 경우가 있습니다.  
대부분의 경우, 이 옵션을 OFF로 하면 해결됩니다.

### 스퀴시 애니메이션이 재생되지 않는 경우

아바타에 다른 FX 레이어가 설정된 경우, 스퀴시 애니메이션이 재생되지 않을 수 있습니다.  
FX 레이어에 빈 컨트롤러를 넣으면 정상적으로 동작합니다.

### 마시멜로 PB의 흔들림이 이상한 경우

PB를 여러 개 가지고 있는 아바타의 경우, 기본 설정만으로는 기존 PB를 모두 삭제하지 못해 움직임이 이상해지는 경우가 있습니다(예: Velle 등).  
이 경우, 「하위 PB를 모두 삭제」 옵션을 ON으로 하면 정상화됩니다.  
비대응 아바타의 경우, 같은 본을 조작하는 기존의 PhysBone/Constraint가 남아 있으면 간섭이 발생하므로, 가능한 한 삭제한 뒤 마시멜로 PB를 도입해 주세요.  
또한, 가슴 본 하위가 아니라 아바타 루트 직하에 컴포넌트가 붙어 있는 경우도 있으니, 전체 계층을 잘 확인해 주세요.

### 마시멜로 PB의 위치가 어긋난 경우(움직이면 메쉬가 깨지는 경우)

어떤 원인으로 마시멜로 PB 오브젝트 위치가 어긋나 있으면, 움직일 때 메쉬가 심하게 깨질 수 있습니다.  
비대응 아바타와 동일한 절차로 다시 위치를 맞추거나, 「[오프셋으로 이 오브젝트의 Transform 사용](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)」을 ON으로 하고 오프셋을 조정해 보세요.

### 아바타의 가슴 메쉬가 꼬이거나 깨지는 경우

**아바타의 애니메이션에서 가슴 본을 직접 조작하고 있는 경우**, 마시멜로 PB와 간섭하여 가슴이 꼬이거나 메쉬가 깨질 수 있습니다(예: Lasyusha, Nepherisa 등).  
FX 레이어를 빈 컨트롤러로 교체했을 때 정상 동작한다면, 가슴 본을 조작하는 애니메이션을 찾아 삭제하거나 수정해 주세요.

### 옷의 가슴 부분 메쉬만 꼬이거나 깨지는 경우

VRCFury의 Armature Link를 사용하는 경우, 의상 가슴 부분 메쉬만 꼬이는 현상이 발생할 수 있습니다.  
이 경우, Modular Avatar의 갈아입기 기능을 사용하는 것을 권장합니다.

---

### 아바타별 문제

#### 「しなの(Shinano)」 – 가슴 흔들림이 이상함 / 좌우가 다름

원래는 삭제되어야 할 가슴 PB가 남아 있는 것이 원인으로 추정됩니다.  
가슴 PB를 미리 삭제해 두면 정상적으로 동작합니다.

#### 「くろなつ(Kuronatu)」 – 마시멜로 PB가 동작하지 않음

くろなつ에서 가슴 크기가 기본값인 경우, FX 레이어 애니메이션 때문에 PB가 움직이지 않도록 되어 있습니다.  
くろなつ의 FX 레이어에서 「Breast_DB」를 삭제하면 정상적으로 동작합니다.

#### 「ルルネ(Rurune)」 – AFK에 들어가면 수수께끼의 물체가 생김

ルルネ의 AFK 애니메이션은 Armature를 압축하는 방식이기 때문에, 마시멜로 PB의 Constraint와 간섭하여 메쉬가 남아 버립니다.  
AFK 애니메이션을 지면 아래로 내리는 방식으로 대처할 수 있습니다. 애니메이션 수정 패치는 [여기](https://drive.google.com/file/d/1GFAQwwUsCjFp7VGXelsKM6SXsQ75dpNT/view?usp=sharing)에서 받을 수 있습니다.

#### 「ラシューシャ(Lasyusha)」 – 가슴이 꼬임

ラシューシャ는 FX 레이어 애니메이션에서 가슴 본 위치를 조작하고 있어, 마시멜로 PB와 간섭해 가슴이 꼬일 수 있습니다.  
이 경우, 「BreastPB Control」 레이어의 Weight를 0으로 하거나, 불필요하다면 레이어를 삭제해 주세요.

#### 「ネフェリサ(Nepherisa)」 – 가슴이 꼬임

ネフェリサ 역시 FX 레이어 애니메이션에서 가슴 본 위치를 조작하고 있어, 마시멜로 PB와 간섭해 가슴이 꼬일 수 있습니다.  
이 경우, 「Bust Size」 레이어의 Weight를 0으로 하거나, 불필요하다면 레이어를 삭제해 주세요.

---

### 알려진 문제

#### 마시멜로 PB를 잡았을 때 콜라이더 판정이 사라지지 않는 경우

마시멜로 PB를 잡았을 때, 콜라이더 판정이 사라지지 않고 남는 현상이 보고되어 있습니다.  
충분히 멀리 끌어당겨 콜라이더에서 떼어 내면, 어느 순간 정상적으로 판정이 사라집니다.  
확인되지는 않았지만, VRChat 쪽 버그일 가능성이 높습니다.  
※ ver2.0 시점에서는 이 기능 자체를 기본적으로 비활성화해 두었습니다.

---

:::caution 이 페이지를 보고도 문제가 해결되지 않는 경우
[문의 방법](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtocontact)을 참고해 주세요.
:::

