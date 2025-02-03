
# Q&A

:::info 페이지 설명
마시마로 PB가 정상적으로 동작하지만, 불만・의문점이 있을 때 참고하는 페이지입니다.  
(더 고급스러운 사용법을 알고 싶을 때는 [「사용 방법/응용편」](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition), 정상적으로 동작하지 않을 때는 [「문제가 생겼을 때」](https://wataame89.github.io/documents-wataameya/marshmallowPB/howtouse/addition)를 참고)
:::

### VRChat에서 마시마로 PB의 크기를 변경하고 싶다

마시마로 PB의 구조상, VRChat 상에서 크기를 변경할 수는 없습니다.

### 엉덩이에도 도입하고 싶다

마시마로 PB는 하나만 도입할 수 있으므로, 가슴과 엉덩이에 동시에 적용할 수는 없습니다.  
다만, Modular Avatar의 Manual Bake Avatar를 사용하여 아바타에 구워넣으면 사용 가능할 수도 있지만, 이는 공식 지원 대상이 아닙니다.

### 가슴이 너무 늘어난다

#### 숙였을 때 가슴이 지나치게 늘어지는 경우:

셋업 항목의 「가슴 처짐 정도」 값을 작게 설정하면, 가슴이 너무 늘어지지 않게 됩니다.

#### 잡아당겼을 때 가슴이 지나치게 늘어나는 경우:

PhysBone/MaxStretch 값을 작게 해서 대응할 수 있습니다.

### 일반 PB처럼, 마시마로 PB를 고정하고 싶다

마시마로 PB의 구조상, 일반 PhysBone처럼 완전히 고정하는 것은 불가능합니다.

### 마시마로 PB를 적용한 아바타를 판매하고 싶다

규약상, **직접 제작한 아바타에 마시마로 PB를 설정한 뒤 판매하는 것은 허가되지 않습니다.**

### 마시마로 PB를 도입한 아바타를 원래대로 되돌리고 싶다

#### 신방식(새로운 방식)인 경우:

신방식은 비파괴적 도입이므로, 아바타 아래에 생성된 marshmallow_PB_Setup을 삭제하면 도입 전 상태로 되돌릴 수 있습니다.

#### 구방식(Modular Avatar 미사용)인 경우:

구방식으로 설정한 아바타는 아바타와 FX가 복제되므로, 원래 상태로 돌리려면 작업이 필요합니다. 마시마로 PB는 동일 이름의 본(가령 Chest/breast_L/breast_L/…)을 복제하고, 기존 가슴 본을 그 하위에 넣어 두었습니다. 따라서 같은 이름의 부모-자식 본 중 자식 본을 꺼낸 뒤, 부모 본을 삭제하면 원래대로 돌아갑니다. 그 뒤 다른 marshmallow라는 이름이 붙은 오브젝트를 모두 지우고, FX 레이어를 원래 아바타의 것으로 변경해 주세요. 마지막에 아바타 이름 끝의 「\_MPB」를 삭제하면 완료됩니다. (아바타나 FX 이름이 \_MPB로 끝나면 셋업 툴에서 거부됩니다)  
자세한 내용은 아래 영상을 참고해 주세요.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Nh1pLiSWz6I?si=6jGZxrHTBik8gz7L" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

