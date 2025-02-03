
# 도입 방법

### 대응 아바타인 경우

<iframe width="100%" height="480" src="https://www.youtube.com/embed/17p4SnL1kus?si=og9SA6Ef8Rwkg3_-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

#### 패키지 도입

1. VRChat Creator Companion(VCC)에서 프로젝트를 엽니다.
2. [Modular Avatar](https://modular-avatar.nadena.dev/ja/) 패키지를 VCC에 도입합니다. ([패키지 링크](vcc://vpm/addRepo?url=https://vpm.nadena.dev/vpm.json))
3. VCC 상에서 “Manage Project”를 열어 "**Gesture Manager**", "**Modular Avatar**", "**Non-Destructive Modular Framework**" 이 세 가지를 추가합니다.
4. 다시 프로젝트를 열어, 임포트되었는지 확인합니다.

:::caution
**ver1.7.0 이전의 마시마로 PB**가 있는 경우, “marshmallow_PB/Setup/FX” 내의 이미 생성된 FX를 이동시키고, marshmallow_PB 폴더를 삭제해 주세요. (삭제하지 않으면 오류가 발생합니다)
:::

#### 마시마로 PB 도입

5. [최신 버전의 마시마로 PB](https://wataame89.booth.pm/items/4511536)를 임포트합니다.
6. 아바타를 우클릭하고, “wataameya → MarshmallowPB”를 클릭합니다.
7. 생성된 marshmallow_PB_Setup의 아바타 프리셋을 설정합니다.
8. 화면 상단 메뉴에서 “Tools → Gesture Manager Emulator”를 클릭합니다.
9. Gesture Manager를 실행했을 때 마시마로 PB가 정상적으로 움직이면 설정 완료입니다.

:::caution
정상적으로 동작하지 않을 경우, [「문제가 생겼을 때」](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition), [「Q&A」](https://wataame89.github.io/documents-wataameya/marshmallowPB/qa)를 확인해 보세요.  
:::

<br/>
<br/>

### 비대응 아바타인 경우

<iframe width="100%" height="480" src="https://www.youtube.com/embed/BYJZBUt0f_w?si=W9nI2fAhSIp5ubg8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

#### 마시마로 PB 도입

5. [최신 버전의 마시마로 PB](https://wataame89.booth.pm/items/4511536)를 임포트합니다.
6. 아바타를 우클릭하고, “wataameya → MarshmallowPB”를 클릭합니다.
7. 생성된 marshmallow_PB_Setup에서 프리셋 없이 가슴 본을 설정합니다.
8. 아바타에서 원래 사용하던 가슴의 PhysBone 컴포넌트를 삭제합니다. (영상에서는 실수로 켜둔 상태)  
   가슴 본 외 다른 부분에 PhysBone이 설정되어 있을 수 있으니 주의해 주세요.
9. marshmallow_PB_Setup 아래의 “For Unsupported Avatar/marshmallow_PB_L”을 켭니다.
10. 초록색 캡슐 콜라이더의 위치를 확인합니다. 보이지 않을 경우 Scene 상단의 Gizmos를 클릭해 주세요.
11. 캡슐 콜라이더를 아바타의 왼쪽 가슴 부분에 이동・스케일 조정합니다. 옆에서 본 시야 기준으로, 가슴의 경계 곡선(빨간 선) 부근에 피벗(이동 축)이 오도록 설정하는 것이 좋습니다.
12. 캡슐 콜라이더가 가슴에 들어맞도록 스케일을 조정합니다.
13. Gesture Manager를 실행했을 때 정상적으로 움직이면 설정 완료입니다.  
    (실행 시에는 캡슐 콜라이더가 사라지고 다른 콜라이더가 생성됩니다. 약간 위치가 바뀌어 보여도 정상입니다.)

:::caution
정상적으로 설정할 수 없는 경우, 「자주 하는 질문」, 「문제가 생겼을 때」를 확인해 주세요.  
특히 **아바타에 원래 있던 가슴 PhysBone 컴포넌트를 삭제하지 않은 경우**, 문제가 발생하기 쉬우니 반드시 삭제해 주세요.
:::

<img
src={require('/img/marshmallowPB/hitaioou2.png').default}
style={{ width: '100%' }}
/>

<br/>
<br/>

### 구방식(Modular Avatar 미사용)

:::danger 권장하지 않는 방법
아바타와 FX 레이어를 복제하여 설정하므로 현재는 권장되지 않습니다.  
특별한 이유가 없다면 신방식을 이용해 주세요.

<iframe width="280" height="158" src="https://www.youtube.com/embed/739tyxA7PKo?si=FkVczSvkKsqLBcV9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

동작 확인에 Gesture Manager를 사용하므로, VRChat Creator Companion(VCC)에만 대응합니다.  
(권장되지 않지만, VRChat 상에서 직접 확인한다면 VCC가 아니어도 정상 동작하긴 합니다)

[구방식 설명서는 여기(일본어)](https://docs.google.com/document/d/1dvbHSSSIGPoFFt5rA9RUba8309XX7bLs-4dKND2Bam0/edit?usp=sharing)

