# 응용편

:::info 페이지 설명
마시마로 PB가 정상적으로 동작하지만, 좀 더 고급 사용법을 알고 싶을 때 참고하는 페이지입니다.  
(일반적인 문제 해결을 원하면 [「문제가 생겼을 때」](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition), [「Q&A」](https://wataame89.github.io/documents-wataameya/marshmallowPB/qa)를 참고)
:::

### 아바타의 원본 PhysBone을 그대로 이용하기

아바타의 원래 PB 동작을 유지하면서 마시마로 PB의 찌그러짐만 적용하고 싶다면, 「찌그러짐 기능만 적용(원본 PB 사용)」을 켜 주세요. 기본적으로는 원본 PB 움직임 그대로이지만, 누를 때만 찌그러집니다. 마시마로 PB의 잡기 기능을 사용하고 싶다면, 아바타 원본 PB의 Allow Grabbing을 OFF로 해 주세요.

### 마시마로 PB의 흔들림 조정

마시마로 PB의 흔들림은 여러 파라미터로 결정됩니다.  
PB 프리셋은 PhysBone의 「Pull」「Momentum」「Stiffness」「Gravity」「GravityFalloff」「Immobile」를 설정합니다.

PB 프리셋에 반영되지 않는, 흔들림에 관계가 큰 파라미터로는 「StretchMotion」과 「가슴 본 회전 기여도」가 있습니다.

- **「StretchMotion」**: 가슴이 찌그러지는 방향으로 받는 관성 정도에 대한 파라미터로, **움직일 때의 부드러움**을 결정합니다.
- **「가슴 본 회전 기여도」**: 가슴 본의 각도와 무게감에 대한 파라미터입니다.
  - 1로 설정하면 일반 PB와 유사하게 동작하고, 0에 가까울수록 가슴 본이 평행 이동을 많이 하게 되어 체감상 뒤로 물러나는 느낌이 들며 더 자연스러울 수 있습니다.
  - 기본값은 0.8로, 약간 평행 이동을 가미해 두었습니다.

이 두 파라미터를 조정함으로써 흔들림 동작을 상세하게 다듬을 수 있습니다. 각 항목의 자세한 설명은 [설정 항목](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)을 참고하세요.

### 마시마로 PB의 위치・각도를 조정하기

대응 아바타를 프리셋으로 설정하면 마시마로 PB의 본 위치나 각도가 고정됩니다만, 비대응 아바타로 설정하는 경우에는 직접 배치한 값이 적용됩니다. 예를 들어 가슴 크기를 늘렸을 때 등 필요에 따라 조정이 가능합니다.

### 다른 플레이어의 마시마로 PB와 간섭하기

마시마로 PB 설정에서 「다른 플레이어와의 가슴 간섭」을 켜면, 서로 마시마로 PB가 적용된 플레이어끼리 상호 간섭이 가능합니다. 양쪽 모두 이 설정이 켜져 있어야 합니다. 기본값은 OFF입니다.

### 머리 콜라이더와의 간섭

~~마시마로 PB는 「다른 플레이어와의 가슴 간섭」 설정을 켜면, 마시마로 PB가 없는 플레이어라도 기본 헤드 콜라이더와 간섭할 수 있습니다. 다만 기본 헤드 콜라이더는 크기가 작으므로, Avatar Descripter의 Coliders 항목을 통해 콜라이더 크기를 키우면 더 쉽게 간섭할 수 있습니다.~~  
마시마로 PB는 「다른 플레이어와의 가슴 간섭」이 켜져 있으면, head_tag가 붙은 VRC Contact Sender를 통해 간섭할 수 있습니다. 머리 등에 VRC Contact Sender를 설정해 두면, 그 머리가 다른 사람의 마시마로 PB와 간섭할 수 있습니다.

<img
src={require('/img/marshmallowPB/head.png').default}
style={{ width: '100%' }}
/>

### 찌그러짐 애니메이션을 조정하기

마시마로 PB는 가슴 본을 애니메이션으로 스케일 조정하여 ‘말캉함’을 표현하고 있습니다. 찌그러짐 애니메이션을 변경하고 싶다면, 「marshmallow_PB/Animation/MPB_L_Scale_squish・MPB_R_Scale_squish」 두 애니메이션의 Scale x와 y 파라미터를 수정하세요.

### 직접 만든 아바타 프리셋을 추가하기

마시마로 PB에는 아바타별 설정을 기록하는 ‘프리셋 기능’이 있습니다.  
비대응 아바타를 여러 개 설정해야 할 경우, 직접 만든 아바타 프리셋을 추가하면 편리합니다.

#### 아바타 프리셋 추가 방법

1. 가슴 셰이프키가 0인 아바타와 100인 아바타 두 종류를 준비해, 각각 비대응 아바타처럼 설정하고 marshmallow_PB_L의 position, rotation, scale 값을 기록합니다.
2. Preset 폴더 안의 프리셋 0(Preset0)을 복제하고, 이름을 적절히 바꿉니다. (단일 숫자 이름은 오류가 발생할 수 있음)
3. 아바타 이름, Path, breast_L_position, breast_L_rotation, breast_L_scale 등을 변경합니다.  
   ( “\_0” “\_100” 각 가슴 셰이프키 상태(0, 100)에 맞춰 값을 넣으세요 )  
   그 외 파라미터는 그대로 둬도 기본적으로 문제 없습니다.
4. 셋업 툴에서 확인해 프리셋이 추가되어 있으면 완료입니다.

#### 아바타 프리셋의 설정 항목

<img
src={require('/img/marshmallowPB/preset.png').default}
style={{ width: '80%' }}
/>
아바타별 프리셋 설정은 “marshmallow_PB/Setup/Preset” 폴더에 있습니다.

#### Path

아바타에서 가슴 본이나 콜라이더까지의 상대 경로입니다.

#### breast_L_position, breast_L_scale

marshmallow_PB_L의 로컬 좌표 및 스케일입니다. marshmallow_PB_R은 L 값을 반전하여 자동으로 설정됩니다.

#### (Parameter)\_0, (Parameter)\_100

각 파라미터의 가슴 셰이프키가 0일 때, 100일 때의 값입니다. 그 중간값은 보간됩니다. 각 파라미터는 [설정 항목](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/setup)에 나오는 PhysBone 파라미터에 대응됩니다.

<!-- 직접 제작한 비대응 아바타용 프리셋을 공식으로 제공해 주실 경우에는 [이 Google Form](https://forms.gle/9qfEqBHDyiEisy4G9)을 통해 보내주시면 감사하겠습니다. -->

<!-- ### 툴을 쓰지 않고 직접 도입(Prefab 등)
툴을 사용하지 않고 마시마로 PB를 수동 도입하고 싶을 경우, (비권장) 아래 영상을 참고해 주세요.
<iframe width="280" height="158" src="https://www.youtube.com/embed/pKpk3hQhihc?si=trFn__bA0hqWF_76" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> -->
