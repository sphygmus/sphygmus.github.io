(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[670],{4292:function(e,i,r){Promise.resolve().then(r.bind(r,5870))},5870:function(e,i,r){"use strict";r.r(i),r.d(i,{default:function(){return g}});var c=r(7437),t=r(7585),d=r(6260),a=r(6691),n=r.n(a),o=r(2265),l=r(4769),s=r(9547);let p=r(3745),u=["egg","gluten","fish","milk","mustard","peanuts","nuts","celery","sesame"];function g(){let{t:e}=(0,o.useContext)(s.GlobalContext),[i,r]=(0,o.useState)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.Oo,{}),(0,c.jsxs)("section",{id:"menu",className:"p-8 pt-0 xl:p-24 xl:pt-0",children:[(0,c.jsx)(d.Tabs,{className:"mt-4",flex:!0,children:p.map(i=>(0,c.jsx)(d.TabItem,{id:i.category_id,label:e("Menu.".concat(i.category_id)),children:i.product_group.map(i=>(0,c.jsxs)("div",{className:"space-y-4",children:[(0,c.jsx)("h1",{className:"mt-8 text-center text-xl text-primary-200",children:e("Menu.".concat(i.product_id))}),(0,c.jsx)("div",{className:"grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:i.content.sort((e,i)=>e.id.localeCompare(i.id)).map((i,d)=>(0,c.jsxs)(t.Zb,{className:(0,l.m6)("p-4 gap-0 transition-all hover:pink-shadow",!i.info&&!i.allergen&&"flex-row items-center pt-5 justify-between lg:pt-4"),children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{className:"text-base",children:e("Menu.".concat(i.id))}),i.sub_id&&(0,c.jsx)("h3",{className:"font-mazzard text-sm text-primary-200",children:e("Menu.".concat(i.sub_id))})]}),i.info&&(0,c.jsx)("span",{className:"text-xs italic text-gray-400 mb-1 h-full",children:e("Menu.".concat(i.id,"-info"))}),(0,c.jsxs)("div",{className:(0,l.m6)("flex items-center relative",i.allergen?"justify-between":"justify-end"),children:[i.allergen&&(0,c.jsx)("div",{className:"space-x-1 relative",onMouseEnter:e=>{if(i.allergen){let c=e.currentTarget.getBoundingClientRect();r({x:c.left,y:c.bottom+window.scrollY+4,data:i.allergen})}},onMouseLeave:()=>{r(void 0)},children:i.allergen.map(i=>(0,c.jsx)(n(),{alt:e("allergen-".concat(i)),src:"/icons/allergens/".concat(u[i],".svg"),width:16,height:16,className:"inline"},i))}),(0,c.jsxs)("span",{className:"font-mazzard text-right",children:[i.price," TL"]})]})]},"".concat(i.id,"-").concat(d)))})]},i.product_id))},i.category_id))}),i&&(0,c.jsx)("div",{className:"absolute",style:{left:i.x,top:i.y},children:(0,c.jsx)(t.Zb,{className:"p-3 text-xs bg-background-light",children:i.data.map((i,r)=>(0,c.jsxs)("div",{className:"flex items-center min-w-24",children:[(0,c.jsx)(n(),{alt:e("allergen-".concat(i)),src:"/icons/allergens/".concat(u[i],".svg"),width:16,height:16,className:"inline"}),(0,c.jsx)("span",{className:"ml-2 font-mazzard text-xs",children:e("allergen-".concat(i))})]},r))})})]})]})}},6260:function(e,i,r){"use strict";r.r(i),r.d(i,{TabItem:function(){return a},Tabs:function(){return n}});var c=r(7437),t=r(2265),d=r(4769);function a(e){let{id:i,label:r,children:c,className:t}=e;return c}function n(e){var i;let{children:r,className:a,flex:n=!1,tabsClassName:o}=e,[l,s]=(0,t.useState)(null===(i=r[0])||void 0===i?void 0:i.props.id),p=e=>{s(e)};return(0,c.jsxs)("div",{className:a,children:[(0,c.jsx)("ul",{className:n?"flex flex-wrap gap-1":"space-x-1 space-y-1 text-center",children:r.map(e=>(0,c.jsx)("li",{onClick:()=>p(e.props.id),className:(0,d.m6)("grid place-items-center text-center font-mazzard text-xs text-primary-50 p-1 cursor-pointer transition-all border select-none pt-1.5 lg:text-sm",l===e.props.id?"bg-primary-800 border-primary-500":"bg-primary-800/25 border-primary-500/20 hover:bg-primary-800 active:bg-primary-900",n?"flex-1 first:rounded-l-lg last:rounded-r-lg":"inline-block px-4 rounded-lg"),children:e.props.label},e.props.id))}),r.map(e=>(0,c.jsx)("div",{className:(0,d.m6)("mt-2 ".concat(l===e.props.id?"block":"hidden"),e.props.className),children:e.props.children},e.props.id))]})}},3745:function(e){"use strict";e.exports=JSON.parse('[{"category_id":"foods","product_group":[{"product_id":"appetizers","content":[{"id":"the-game-combo","image_id":"the-game-combo","price":210,"allergen":[0,1,3],"info":true},{"id":"club-sandwich","image_id":"club-sandwich","price":180,"allergen":[0,1,3],"info":true},{"id":"toast","image_id":"toast","price":90,"allergen":[0,1,3],"info":true},{"id":"french-fries","image_id":"fries","price":90,"allergen":[7],"info":true},{"id":"cheese-cubes","image_id":"cubes-of-cheese","price":130,"allergen":[3,6],"info":true}]},{"product_id":"soups","content":[{"id":"lentil-soup","image_id":"lentil-soup","price":130,"allergen":[1,3],"info":true},{"id":"tomato-soup","image_id":"tomato-soup","price":150,"allergen":[1,3,4],"info":true}]},{"product_id":"salads","content":[{"id":"mediterranean-salad","image_id":"mediterranean-salad","price":190,"allergen":[1,3],"info":true},{"id":"caesar-salad","image_id":"caesar-salad","price":220,"allergen":[1,2,3,4],"info":true},{"id":"steak-salad","image_id":"steak-salad","price":260,"allergen":[1,3,4],"info":true}]},{"product_id":"main-course","content":[{"id":"hamburger","image_id":"hamburger","price":275,"allergen":[0,1,3,8],"tag":1,"info":true},{"id":"cheeseburger","image_id":"cheeseburger","price":285,"allergen":[0,1,3,8],"info":true},{"id":"meatballs","image_id":"meatballs","price":300,"allergen":[1,3],"info":true},{"id":"grilled-chicken-bbq","image_id":"grilled-chicken-bbq","price":275,"allergen":[1,3,4],"info":true},{"id":"grilled-tenderloin","image_id":"grilled-tenderloin","price":400,"allergen":[1,4],"tag":2,"info":true},{"id":"steak-wrap","image_id":"steak-wrap","price":300,"allergen":[0,1,3,7],"info":true},{"id":"chicken-wrap","image_id":"chicken-wrap","price":235,"allergen":[0,1,3,7],"info":true},{"id":"vegetable-wrap","image_id":"vegetable-wrap","price":220,"allergen":[0,1,3],"info":true}]},{"product_id":"pasta","content":[{"id":"spaghetti","sub_id":"napolitan-bolognese","image_id":"spaghetti","price":190,"allergen":[0,1,3],"info":true},{"id":"tortellini","image_id":"tortellini","price":210,"allergen":[0,1,3],"info":true}]}]},{"category_id":"cold-drinks","product_group":[{"product_id":"soft-drinks","content":[{"id":"water","price":20},{"id":"cappy","price":50},{"id":"fuse-tea","price":50},{"id":"orange-juice","price":85},{"id":"lemonade","price":85},{"id":"frozen-banana","price":100},{"id":"frozen-strawberry","price":100},{"id":"frozen-apple","price":100}]},{"product_id":"fizzy-drinks","content":[{"id":"soda","price":30},{"id":"coca-cola","price":50},{"id":"coca-cola-zero","price":50},{"id":"fanta","price":50},{"id":"sprite","price":50},{"id":"tonic","price":50}]},{"product_id":"red-bull","content":[{"id":"red-bull-energy","price":100},{"id":"red-bull-organics","price":100}]}]},{"category_id":"warm-drinks","product_group":[{"product_id":"teas","content":[{"id":"tea","price":30},{"id":"herbal-tea","price":30}]},{"product_id":"warm-coffees","content":[{"id":"turkish-coffee","price":60},{"id":"cappucino","price":75},{"id":"single-espresso","price":50},{"id":"double-espresso","price":65},{"id":"americano","price":70},{"id":"latte","price":80},{"id":"caramel-latte","price":85},{"id":"machiatto","price":70},{"id":"drip-coffee","price":65},{"id":"flat-white","price":80},{"id":"mocha","price":85},{"id":"white-chocolate-mocha","price":85},{"id":"chai-tea-latte","price":85},{"id":"nescafe","price":60},{"id":"salep","price":75},{"id":"hot-chocolate","price":75}]},{"product_id":"cold-coffees","content":[{"id":"frappe","price":85},{"id":"ice-latte","price":85},{"id":"ice-americano","price":85}]}]},{"category_id":"alcoholic-drinks","product_group":[{"product_id":"beers","content":[{"id":"efes-draft","sub_id":"30cl","price":120},{"id":"efes-draft","sub_id":"50cl","price":130},{"id":"efes-bottle","sub_id":"33cl","price":125},{"id":"efes-malt-bottle","sub_id":"50cl","price":140},{"id":"efes-ozel-seri-bottle","sub_id":"50cl","price":150},{"id":"bomonti-draft","sub_id":"30cl","price":120},{"id":"bomonti-draft","sub_id":"50cl","price":130},{"id":"bomonti-bottle","sub_id":"50cl","price":140},{"id":"miller-bottle","sub_id":"33cl","price":155},{"id":"bud-bottle","sub_id":"50cl","price":160},{"id":"corona-bottle","sub_id":"35-5cl","price":160},{"id":"heineken-bottle","sub_id":"33cl","price":155},{"id":"amsterdam-bottle","sub_id":"50cl","price":170},{"id":"guinness-can","sub_id":"44cl","price":165},{"id":"becks-bottle","sub_id":"33cl","price":155},{"id":"erdinger-bottle","sub_id":"33cl","price":165},{"id":"grolsch-bottle","sub_id":"45cl","price":180}]},{"product_id":"gin","notice_id":"discount-bottle","content":[{"id":"local-gin","price":195},{"id":"gordons-gin","price":220},{"id":"gordons-pink-gin","price":230},{"id":"tanqueray-dry-gin","price":250},{"id":"tanqueray-no10-gin","price":290},{"id":"beefeater","price":245},{"id":"bombay-sapphire-gin","price":260},{"id":"hendricks","price":310}]},{"product_id":"vodka","notice_id":"discount-bottle","content":[{"id":"istanblue","price":195},{"id":"absolut","price":220},{"id":"smirnoff","price":220},{"id":"ketel-one","price":260},{"id":"ciroc","price":275},{"id":"belvedere","price":290},{"id":"grey-goose","price":290}]},{"product_id":"shots","notice_id":"discount-shots","content":[{"id":"jagermeister","price":120},{"id":"smirnoff-north","price":120},{"id":"smirnoff-electric-apple","price":120},{"id":"olmeca-blanco","price":120},{"id":"olmeca-gold","price":120},{"id":"jose-cuervo","price":120},{"id":"don-julio-blanco-tequila","price":200},{"id":"b-52","price":140}]},{"product_id":"red-wine","content":[{"id":"kavaklidere-angora","sub_id":"glass-200","price":735},{"id":"kavaklidere-yakut","price":780},{"id":"kavaklidere-selection","price":975},{"id":"sarafin-merlot","price":975},{"id":"montes-merlot","sub_id":"chile","price":1125}]},{"product_id":"white-wine","content":[{"id":"kavaklidere-angora","sub_id":"glass-200","price":735},{"id":"kavaklidere-selection","sub_id":"narince","price":975},{"id":"sarafin-chardonnay","price":975},{"id":"montes-sauvignon-blanc","sub_id":"chile","price":975}]},{"product_id":"rose-wine","content":[{"id":"kavaklidere-ancyra-blush","sub_id":"glass-250","price":840},{"id":"sartori-pinot-grigio-blush","sub_id":"italy","price":865}]},{"product_id":"raki","content":[{"id":"yeni-raki-single","price":135},{"id":"yeni-raki-double","price":240}]},{"product_id":"whiskey","notice_id":"discount-bottle","content":[{"id":"jb","price":200},{"id":"johnnie-walker-red-label","price":260},{"id":"johnnie-walker-black-label","price":300},{"id":"johnnie-walker-double-black","price":335},{"id":"johnnie-walker-gold-label","price":345},{"id":"johnnie-walker-green-label","price":365},{"id":"johnnie-walker-18yo","price":350},{"id":"talisker","price":380},{"id":"lagavulin","price":560},{"id":"dimple-golden-selection","price":290},{"id":"bulleit-bourbon","price":255},{"id":"glenfiddich-12yo","price":260},{"id":"the-famous-grouse","price":255},{"id":"the-macallan-12yo","price":450},{"id":"the-glenlivet","price":315},{"id":"chivas-regal-12yo","price":300},{"id":"chivas-regal-18yo","price":340},{"id":"cutty-sark","price":255},{"id":"dewars","price":255},{"id":"gentleman-jack","price":315},{"id":"jack-daniels","price":300},{"id":"jameson","price":290},{"id":"jim-beam","price":270},{"id":"ballantines","price":270}]},{"product_id":"liqueur","content":[{"id":"baileys","price":200},{"id":"safari","price":200},{"id":"archers","price":200},{"id":"campari","price":210},{"id":"kahlua","price":200},{"id":"cointreau","price":210},{"id":"drambuie","price":190},{"id":"malibu","price":190},{"id":"jagermeister","price":190},{"id":"southern-comfort","price":190},{"id":"cardinal-melon","price":190},{"id":"hare","price":190}]},{"product_id":"vermouth-rum","content":[{"id":"captain-morgan-spiced-gold","price":240},{"id":"captain-morgan-white","price":240},{"id":"bacardi","price":240},{"id":"havana-club-anejo-3","price":240},{"id":"havana-club-anejo-7","price":240},{"id":"martini","price":240}]},{"product_id":"cognac-brandy","content":[{"id":"remy-martin-vsop","price":280},{"id":"hennesy-vsop","price":280}]},{"product_id":"cocktails","content":[{"id":"game-over","price":325,"info":true},{"id":"quick-stroke","price":310,"info":true},{"id":"over-the-rainbow","price":310,"info":true},{"id":"painkiller","price":300,"info":true},{"id":"knock-out","price":325,"info":true},{"id":"gin-bull","price":310,"info":true},{"id":"sub-zero","price":310,"info":true},{"id":"scorpion","price":310,"info":true},{"id":"black-russian","price":325,"info":true},{"id":"white-russian","price":325,"info":true},{"id":"cosmopolitan","price":325,"info":true},{"id":"cuba-libre","price":280,"info":true},{"id":"daiquri","price":320,"info":true},{"id":"dry-martini","price":320,"info":true},{"id":"espresso-martini","price":320,"info":true},{"id":"gin-fizz","price":325,"info":true},{"id":"jager-bomb","price":220,"info":true},{"id":"margarita","price":320,"info":true},{"id":"long-island-iced-tea","price":340,"info":true},{"id":"lynchburg-lemonade","price":320,"info":true},{"id":"caipirinhia","price":320,"info":true},{"id":"negroni","price":325,"info":true},{"id":"pina-colada","price":320,"info":true},{"id":"sex-on-the-beach","price":340,"info":true},{"id":"mojito","price":320,"info":true},{"id":"mojito-apple","price":325,"info":true},{"id":"aperol-spritz","price":320,"info":true},{"id":"tequila-sunrise","price":320,"info":true},{"id":"whiskey-sour","price":340,"info":true},{"id":"kamikaze","price":325,"info":true},{"id":"moscow-mule","price":325,"info":true}]},{"product_id":"non-alcoholic-cocktails","content":[{"id":"red-bull-twist-sugarfree","price":140},{"id":"red-bull-twist-white","price":140}]}]}]')}},function(e){e.O(0,[213,509,585,971,938,744],function(){return e(e.s=4292)}),_N_E=e.O()}]);