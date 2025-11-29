# 설치 방법

:::caution
아래 동영상은 ver1.7.0 기준 설명이지만, ver2.0 이후 버전에서도 셋업 절차는 동일합니다.
:::

### 대응 아바타인 경우

<iframe width="100%" height="480" src="https://www.youtube.com/embed/17p4SnL1kus?si=og9SA6Ef8Rwkg3_-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

#### 패키지 준비

1. VRChat Creator Companion(VCC)에서 프로젝트를 엽니다.
2. [Modular Avatar](https://modular-avatar.nadena.dev/ja/) 패키지를 VCC에 추가합니다. ([패키지 링크](vcc://vpm/addRepo?url=https://vpm.nadena.dev/vpm.json))
3. VCC의 “Manage Project”에서 **Gesture Manager**, **Modular Avatar**, **Non-Destructive Modular Framework** 3개를 프로젝트에 추가합니다.
4. 프로젝트를 다시 열어 패키지들이 정상적으로 임포트되었는지 확인합니다.

#### 마시멜로 PB 도입

5. [최신 버전의 마시멜로 PB](https://wataame89.booth.pm/items/4511536)를 프로젝트에 임포트합니다.
6. 아바타를 우클릭하고, 메뉴에서 “wataameya → MarshmallowPB”를 선택합니다.
7. 생성된 `marshmallow_PB_Setup` 오브젝트에서 아바타 프리셋을 선택합니다.
8. Unity 상단 메뉴에서 “Tools → Gesture Manager Emulator”를 선택합니다.
9. Gesture Manager를 실행하여, 마시멜로 PB가 정상적으로 움직이면 셋업 완료입니다.

:::caution
아바타에 이미 **마시멜로 PB ver2.0.0 이하**가 들어 있는 경우, 먼저 파라미터 초기화를 진행해 주세요.  
초기화를 하지 않으면 정상 동작하지 않습니다.  
그래도 문제가 있는 경우, [「문제가 생겼을 때」](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition), [「Q&A」](https://wataame89.github.io/documents-wataameya/marshmallowPB/qa)를 참고해 주세요.
:::

<br/>
<br/>

### 비대응 아바타인 경우

<iframe width="100%" height="480" src="https://www.youtube.com/embed/BYJZBUt0f_w?si=W9nI2fAhSIp5ubg8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

#### 마시멜로 PB 도입

5. [최신 버전의 마시멜로 PB](https://wataame89.booth.pm/items/4511536)를 프로젝트에 임포트합니다.
6. 아바타를 우클릭하고, 메뉴에서 “wataameya → MarshmallowPB”를 선택합니다.
7. 생성된 `marshmallow_PB_Setup`에서 프리셋은 선택하지 않고, 가슴 본을 직접 지정합니다.
8. 아바타에 원래 붙어 있던 가슴 PhysBone 컴포넌트를 삭제합니다. (영상에서는 실수로 그대로 남겨두고 있습니다.)  
   가슴 본 이외에도 해당 부위에 여러 PhysBone이 붙어 있을 수 있으므로, 가슴 관련 PhysBone을 모두 제거해 주세요.
9. `marshmallow_PB_Setup` 하위의 “For Unsupported Avatar/marshmallow_PB_L”를 ON으로 설정합니다.
10. 씬에서 초록색 캡슐 콜라이더의 위치를 확인합니다. 보이지 않는다면 Scene 뷰 상단의 “Gizmos” 버튼이 켜져 있는지 확인해 주세요.
11. 캡슐 콜라이더를 아바타의 왼쪽 가슴 위치로 이동/스케일 조정합니다.  
    옆모습 기준으로, 가슴 곡선의 경계(빨간 선) 부근에 피벗(이동/스케일 기준점)이 오도록 맞추는 것이 목표입니다.
12. 캡슐 콜라이더가 가슴 안에 적당히 들어가도록 스케일을 조정합니다.
13. Gesture Manager를 실행했을 때 정상적으로 움직이면 설정 완료입니다.  
    (실행 시 캡슐 콜라이더는 사라지고, 다른 콜라이더가 자동으로 생성됩니다. 약간 위치가 바뀌지만 정상입니다.)

:::caution
정상적으로 설정이 잘 되지 않는 경우에는 「Q&A」나 「문제가 생겼을 때」를 먼저 확인해 주세요.  
특히 **아바타에 원래 있던 가슴 PhysBone 컴포넌트를 삭제하지 않은 경우** 문제의 원인이 되는 일이 많으므로, 반드시 삭제해 주세요.
:::

<img
src={require('/img/marshmallowPB/hitaioou2.png').default}
style={{ width: '100%' }}
/>

<br/>
<br/>

### 구 방식(Modular Avatar 미사용)

:::danger 비권장 방식
아바타와 FX 레이어를 복제해서 설정하는 방식이기 때문에, 현재는 권장하지 않습니다.  
특별한 이유가 없다면 새로운 방식을 사용해 주세요.

<iframe width="280" height="158" src="https://www.youtube.com/embed/739tyxA7PKo?si=FkVczSvkKsqLBcV9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

작동 확인에는 Gesture Manager를 사용하므로, VRChat Creator Companion(VCC) 환경에서만 정식 지원됩니다.  
(비권장이지만, VRChat 내부에서 직접 테스트만 한다면 VCC가 아니어도 움직이기는 합니다.)

[구 방식 설명 문서(일본어)](https://docs.google.com/document/d/1dvbHSSSIGPoFFt5rA9RUba8309XX7bLs-4dKND2Bam0/edit?usp=sharing)

