(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``,l=!!a;if(l)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let u=document.createElement(`link`);if(u.rel=o?`stylesheet`:e,o||(u.as=`script`),u.crossOrigin=``,u.href=i,c&&u.setAttribute(`nonce`,c),document.head.appendChild(u),o)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})},i=()=>` <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
        </linearGradient>
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1" />
        </filter>
      </defs>

      <!-- 404 Numbers -->
      <text
        x="160"
        y="85"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        font-size="48"
        font-weight="600"
        fill="url(#blueGradient)"
        text-anchor="middle"
      >
        404
      </text>

      <!-- Icon decoration -->
      <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8" />
      <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8" />
      <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5" />
      <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5" />

      <!-- Message -->
      <text
        x="160"
        y="110"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        font-size="14"
        font-weight="400"
        fill="#5f6368"
        text-anchor="middle"
      >
        페이지를 찾을 수 없습니다
      </text>

      <!-- Subtle bottom accent -->
      <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3" />
    </svg>

    <a
      href="/"
      data-link
      class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >홈으로</a
    >
  </div>`;var a=i;const o=()=>` <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
    <!-- 검색창 -->
    <div class="mb-4">
      <div class="relative">
        <input
          type="text"
          id="search-input"
          placeholder="상품명을 검색해보세요..."
          value=""
          class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                  focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <!-- 필터 옵션 -->
    <div class="space-y-3">
      <!-- 카테고리 필터 -->
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">카테고리:</label>
          <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
        </div>
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">카테고리:</label>
          <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button
          ><span class="text-xs text-gray-500">&gt;</span
          ><button
            data-breadcrumb="category1"
            data-category1="생활/건강"
            class="text-xs hover:text-blue-800 hover:underline"
          >
            생활/건강</button
          ><span class="text-xs text-gray-500">&gt;</span
          ><span class="text-xs text-gray-600 cursor-default">주방용품</span>
        </div>

        <div class="flex flex-wrap gap-2">
          <div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>
        </div>
        <div class="flex flex-wrap gap-2">
          <button
            data-category1="생활/건강"
            class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
           bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            생활/건강
          </button>
          <button
            data-category1="디지털/가전"
            class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
           bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            디지털/가전
          </button>
        </div>
        <!-- 2depth 카테고리 -->
      </div>
      <!-- 기존 필터들 -->
      <div class="flex gap-2 items-center justify-between">
        <!-- 페이지당 상품 수 -->
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">개수:</label>
          <select
            id="limit-select"
            class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="10">10개</option>
            <option value="20" selected="">20개</option>
            <option value="50">50개</option>
            <option value="100">100개</option>
          </select>
        </div>
        <!-- 정렬 -->
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">정렬:</label>
          <select
            id="sort-select"
            class="text-sm border border-gray-300 rounded px-2 py-1
                     focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="price_asc" selected="">가격 낮은순</option>
            <option value="price_desc">가격 높은순</option>
            <option value="name_asc">이름순</option>
            <option value="name_desc">이름 역순</option>
          </select>
        </div>
      </div>
    </div>
  </div>`;var s=o;const c=()=>` <div class="mb-6">
    <div>
      <!-- 상품 개수 정보 -->
      <div class="mb-4 text-sm text-gray-600">총 <span class="font-medium text-gray-900">340개</span>의 상품</div>
      <!-- 상품 그리드 -->
      <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
          <div class="aspect-square bg-gray-200"></div>
          <div class="p-3">
            <div class="h-4 bg-gray-200 rounded mb-2"></div>
            <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
            <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
            <div class="h-8 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div
          class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
          data-product-id="85067212996"
        >
          <!-- 상품 이미지 -->
          <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
            <img
              src="https://shopping-phinf.pstatic.net/main_8506721/85067212996.1.jpg"
              alt="PVC 투명 젤리 쇼핑백 1호 와인 답례품 구디백 비닐 손잡이 미니 간식 선물포장"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
              loading="lazy"
            />
          </div>
          <!-- 상품 정보 -->
          <div class="p-3">
            <div class="cursor-pointer product-info mb-3">
              <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                PVC 투명 젤리 쇼핑백 1호 와인 답례품 구디백 비닐 손잡이 미니 간식 선물포장
              </h3>
              <p class="text-xs text-gray-500 mb-2"></p>
              <p class="text-lg font-bold text-gray-900">220원</p>
            </div>
            <!-- 장바구니 버튼 -->
            <button
              class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
                 hover:bg-blue-700 transition-colors add-to-cart-btn"
              data-product-id="85067212996"
            >
              장바구니 담기
            </button>
          </div>
        </div>
        <div
          class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
          data-product-id="86940857379"
        >
          <!-- 상품 이미지 -->
          <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
            <img
              src="https://shopping-phinf.pstatic.net/main_8694085/86940857379.1.jpg"
              alt="샷시 풍지판 창문 바람막이 베란다 문 틈막이 창틀 벌레 차단 샤시 방충망 틈새막이"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
              loading="lazy"
            />
          </div>
          <!-- 상품 정보 -->
          <div class="p-3">
            <div class="cursor-pointer product-info mb-3">
              <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                샷시 풍지판 창문 바람막이 베란다 문 틈막이 창틀 벌레 차단 샤시 방충망 틈새막이
              </h3>
              <p class="text-xs text-gray-500 mb-2">이지웨이건축자재</p>
              <p class="text-lg font-bold text-gray-900">230원</p>
            </div>
            <!-- 장바구니 버튼 -->
            <button
              class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
                 hover:bg-blue-700 transition-colors add-to-cart-btn"
              data-product-id="86940857379"
            >
              장바구니 담기
            </button>
          </div>
        </div>
      </div>
      <div class="text-center py-4">
        <div class="inline-flex items-center">
          <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
        </div>
      </div>
      <div class="text-center py-4 text-sm text-gray-500">모든 상품을 확인했습니다</div>
    </div>
  </div>`;var l=c;const u=()=>[s(),l()].join(``);var d=u;const f=` <footer class="bg-white shadow-sm sticky top-0 z-40">
  <div class="max-w-md mx-auto py-8 text-center text-gray-500">
    <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
  </div>
</footer>`,p=` <header class="bg-white shadow-sm sticky top-0 z-40">
  <div class="max-w-md mx-auto px-4 py-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
      </div>
      <div class="flex items-center space-x-2">
        <!-- 장바구니 아이콘 -->
        <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>`,m=({children:e})=>`
    ${p}
    <main class="relative w-full max-w-md mx-auto px-4 py-4 flex-1 overflow-y-auto">${e}</main>
    ${f}
  `;var h=m;function g(){let e=new Set,t=t=>{if(typeof t!=`function`)throw TypeError(`Listener must be a function`);return e.add(t),()=>e.delete(t)},n=()=>{e.forEach(e=>{try{e()}catch(e){console.error(`Observer listener error:`,e)}})};return{subscribe:t,notify:n}}function _(e){let t=e,{subscribe:n,notify:r}=g(),i=()=>t;function a(e){let n=typeof e==`function`?e(t):e;n!==t&&(t=n,r())}return{getState:i,setState:a,subscribe:n}}const v=_({productList:[],isProductListLoading:!1,isProductListSuccess:!1}),y=`/front_6th_chapter1-1`,b={[`/${y}`]:()=>d()},x=document.getElementById(`root`),S=()=>{let e=window.location.pathname,t=b[e]||a;x.innerHTML=h({children:t()})};function C(){S(),window.addEventListener(`popstate`,()=>{S()}),v.subscribe(S)}const w=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-DisPLzhh.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));w().then(C);