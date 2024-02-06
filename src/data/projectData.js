const projectsData = [
    {
        id: 1,
        title: "KODAK",
        sub: "Shopping Mall",
        img: "/img/kodak_web.png",
        modal: [
            {
                info: [
                    "<mark>useParams</mark>를 이용하여 동적 데이터 전달로 컴포넌트의 재사용성을 높였습니다. <strong>장바구니, 상세보기</strong> 기능 구현에 적용했습니다.",
                    "<mark>props</mark> 기능을 적극 활용하여 컴포넌트 간의 유기적인 연결을 도모했습니다. 컴포넌트의 데이터 상호작용을 파악하는데 큰 도움이 되었습니다.",
                    "<mark>Redux Toolkit</mark>을 활용하여 <strong>장바구니</strong> 기능을 구현함으로써, 컴포넌트 간의 상태 공유를 효과적으로 관리하는 방법을 배웠습니다.",
                    "프로젝트 배포 후 다시 <mark>TypeScript</mark>로 리팩토링했습니다. 컴파일 시점에서 발생 가능한 오류를 사전에 방지하여 프로젝트의 안정성을 강화했습니다.",
                ],
                skills: ["React","ReduxToolKit","TypeScript"],
                website: "https://sis061.github.io/kodak",
                github: "https://github.com/sis061/kodak_code",
                img: [
                    "/img/kodak_web.png",
                ],
            },
        ],
    },
    {
        id: 2,
        title: "대전 지하철 NOW!",
        sub: "지하철 도착정보 Web",
        img: "/img/subway_web.png",
        modal: [
            {
                info: [
                    "<strong>빠르고 직관적인 정보 제공</strong>에 초점을 맞추어 클릭 한 번으로 역의 남은 도착 시간만 확인할 수 있도록 <strong>UI/UX를 간결화</strong>했습니다.",
                    "대전교통공사의 <mark>Open API</mark>를 활용하였으며, <mark>ExpressJS</mark>를 통해 프록시 서버를 만들어 <strong>CORS 에러</strong>를 해결했습니다.",
                    "<mark>Redux Toolkit</mark>을 통해 역명과 역 번호의 상태를 전역으로 관리했습니다. 역 번호는 <strong>URL 파라미터 ID</strong>로 활용했습니다.",
                    "<mark>Styled-components</mark>로 개발하여 클래스 네이밍 및 코드 유지보수에 편리성을 확보했습니다.",
                ],
                skills: ["React","공공API","Node.js","ExpressJS","Styled-components"],
                website: "https://daejeonsubway-arrival.netlify.app",
                github: "https://github.com/sis061/DaejeonSubwayArrival",
                gif: [
                    "/img/subway_working_test.gif",
                ],
            },
        ],
    },
    {
        id: 3,
        title: "알라딘",
        sub: "Book Website",
        img: "/img/aladin_web.png",
        modal: [
            {
                info: [
                    "클론 코딩 프로젝트를 진행하며 원 사이트의 JS 코드를 참고하지 않고 먼저 기능을 구현한 후, 기존 코드와 비교했습니다.",
                    "<mark>AJAX</mark> 통신을 활용하여 <strong>카카오</strong>의 <mark>도서 Open API</mark> 및 <mark>JSON</mark> 데이터를 동적으로 가져옵니다.",
                    "Hover 및 Click 시 다양한 <strong>인터랙션 요소</strong>를 구현하기 위해 <mark>jQuery</mark>를 활용했습니다.",
                    "대형 웹사이트를 빠르고 효율적으로 개발하기 위해 <mark>Slick</mark> 라이브러리를 이용하여 슬라이더 기능을 구현했습니다.",
                    "도서를 구매할 수 있는 <mark>Sub Page</mark>도 함께 제작하였습니다."
                ],
                skills: ["JavaScript", "Jquery", "OpenAPI", "AJAX"],
                website: "https://sis061.github.io/aladin_clone_open_api",
                github: "https://github.com/sis061/aladin_clone_open_api",
                img: [
                    "/img/aladin_web.png",
                ],
            },
        ],
    },
    {
        id: 4,
        title: "CAFFE MUSEO",
        sub: "Shopping Mall",
        img: "/img/caffe_web.png",
        modal: [
            {
                info: [
                    "기존 프로젝트를 클론함으로써 원본 코드를 심층적으로 이해하고 분석하는 시간을 가졌습니다. 이로써 프로젝트의 구조에 대한 경험을 쌓았습니다.",
                    "반복되는 레이아웃은 <mark>JSON</mark> 데이터를 활용하여 코드의 가독성을 높이고 유지보수하기 쉽게 구성했으며 <mark>AJAX</mark>를 통해 데이터를 호출했습니다.",
                    "사용자와의 상호 작용과 웹사이트의 생동감을 높이기 위해 애니메이션 및 사용자 인터랙션을 <mark>jQuery</mark>를 활용하여 구현했습니다.",
                    "상품 구매를 위한 <mark>Sub Page</mark>도 함께 제작하였습니다.",
                ],
                skills: ["JavaScript", "Jquery","AJAX", "JSON"],
                website: "https://sis061.github.io/caffemuseo",
                github: "https://github.com/sis061/caffemuseo",
                img: [
                    "/img/caffe_web.png",
                ]
            },
        ],
    },
    {
        id: 5,
        title: "GIBSON",
        sub: "Responsive Website",
        img: "/img/gibson_web.png",
        modal: [
            {
                info: [
                    "다양한 디바이스에 대응하기 위해 <mark>미디어쿼리</mark>를 활용하여 반응형 웹사이트를 구현했습니다.",
                    "사용자에게 적절한 양의 정보만을 제공하기 위해 <mark>상호작용 버튼</mark>을 구현하여 필요에 따라 추가 정보를 확인할 수 있도록 했습니다.",
                    "사용자 경험을 향상시키기 위해 <strong>Iframe 태그</strong>를 이용하여 구글 지도를 웹사이트에 통합하였습니다.",
                    "블로그 형식의 <mark>Sub Page</mark>도 함께 제작하였습니다.",
                ],
                skills: ["HTML5", "CSS3"],
                website: "https://sis061.github.io/gibson",
                github: "https://github.com/sis061/gibson",
                img: [
                    "/img/gibson_web.png",
                ],
            },
        ],
    },
    // {
    //     id: 6,
    //     title: "자유게시판",
    //     sub: "Community Forum",
    //     img: "/img/forum_web.gif",
    //     modal: [
    //         {
    //             info: [
    //                 "<mark>MySQL</mark>로 데이터베이스를 제작한 후, <mark>Node.js</mark>를 통해 데이터를 처리했습니다.",
    //                 "데이터 베이스의 기본 요소인 CRUD 기능을 구현하였습니다.",
    //             ],
    //             skills: ["React", "Node.js", "MySQL"],
    //             website: null,
    //             github: "https://github.com/sis061/forum_server/blob/main/index.js",
    //             gif: [
    //                 "/img/forum_web.gif",
    //             ],
    //         },
    //     ],
    // },
];

export default projectsData;
