__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var t=r(d[3]).connect(function(t){return{currentUser:r(d[0]).getViewer(t),feedStoryTray:r(d[1]).getFeedStoryTrayWithoutOwn(t)}},function(t){return{onWatchAllStories(n){t(r(d[2]).openReelsMedia(n,'reel_feed_timeline'))}}})(i(d[4]));e.default=t},14024704,[20316500,20316317,20316812,5,14024705]);
__d(function(g,r,i,a,m,e,d){"use strict";function t({feedStoryTray:t,onWatchAllClick:n}){return a(d[3]).createElement(a(d[3]).Fragment,null,a(d[3]).createElement(i(d[5]),{headerText:r(d[6]).STORIES_TEXT,linkTo:"#",onClick:n,placeholder:null==t,secondaryText:null!=t&&t.isEmpty()?null:r(d[6]).WATCH_ALL_TEXT}),a(d[3]).createElement(r(d[4]).Box,{marginTop:2},a(d[3]).createElement(i(d[7]),{useContainer:!0,visibleCount:3.5})))}Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const n=r(d[1]).isDesktop()&&!0===i(d[2])._("80","3",{silent:!0}),l=n?5:3,o=({children:t,marginBottom:n,marginTop:l})=>a(d[3]).createElement(r(d[4]).Box,{color:"ig-primary-background",dangerouslySetClassName:{__className:"b2rUF"},marginBottom:n,marginTop:l,shape:"rounded"},t),s=({children:t})=>a(d[3]).createElement("div",{className:"_8UZ6e"},t),c=52,u=550;var p=class extends a(d[3]).PureComponent{constructor(...t){super(...t),this.state={leftFixedPosition:null},this.$FeedSidebar1=(()=>{const t=u,n=!0===i(d[2])._("67","2");a(d[8]).measure(()=>{if(null==this.$FeedSidebar2)return;let l=null;(n||r(d[9]).canUseDOM&&window.pageYOffset>=c&&window.innerHeight>t)&&(l=this.$FeedSidebar2.getBoundingClientRect().left),a(d[8]).mutate(()=>{null!=this.$FeedSidebar2&&this.setState({leftFixedPosition:l})})})}),this.$FeedSidebar3=(t=>{t.preventDefault();const n=i(d[10])(this.props.feedStoryTray);n.isEmpty()||this.props.onWatchAllStories(n)})}componentDidMount(){this.$FeedSidebar1(),null!=this.props.onDisplayDone&&this.props.onDisplayDone()}render(){const{currentUser:c,feedStoryTray:u}=this.props,{leftFixedPosition:p}=this.state,h=n?s:o;return a(d[3]).createElement(a(d[3]).Fragment,null,a(d[3]).createElement(i(d[11]),{event:"scroll",handler:this.$FeedSidebar1,passive:!0,target:window}),a(d[3]).createElement(i(d[11]),{event:"resize",handler:this.$FeedSidebar1,passive:!0,target:window}),a(d[3]).createElement("div",{className:"XmSS_",ref:t=>this.$FeedSidebar2=t}),a(d[3]).createElement("div",{className:`COOzN ${null!=p?"MnWb5":""} ${r(d[1]).isDesktop()&&!0===i(d[2])._("67","2")?"YT6rB":""}`,style:{left:p}},a(d[3]).createElement("div",{className:`m0NAq ${n?"xrWdL":""}`},a(d[3]).createElement(i(d[12]),{isVerified:!1,name:i(d[10])(c.fullName),profilePictureUrl:i(d[10])(c.profilePictureUrl),username:i(d[10])(c.username)})),!n&&a(d[3]).createElement(o,{marginTop:1},a(d[3]).createElement(t,{feedStoryTray:u,onWatchAllClick:this.$FeedSidebar3})),a(d[3]).createElement(h,{marginBottom:3,marginTop:3},a(d[3]).createElement(i(d[5]),{headerText:r(d[13]).HEADER_TEXT,linkTo:r(d[14]).DISCOVER_PEOPLE_PATH,placeholder:null==u,secondaryText:r(d[15])(1898)}),a(d[3]).createElement(r(d[4]).Box,{marginBottom:1,marginStart:1},a(d[3]).createElement(i(d[13]),{analyticsContext:"desktop",avatarSize:"small",backgroundColor:n?'ig-secondary-background':void 0,borderlessFollowButton:!0,count:l,footer:null,header:null,hideName:!0,hideUpsells:!0,initialRenderCount:l,viewModule:r(d[16]).VIEW_MODULES.desktop_feed}))),a(d[3]).createElement(i(d[17]),{variant:i(d[17]).VARIANTS.sidebar})))}};e.default=p,e.FeedSidebarContainer=o,e.FeedSidebarEmptyContainer=s},14024705,[14024706,20316167,20316313,3,20381740,14024707,10354768,14024708,20316370,9699438,20381724,20316601,14024717,10485770,20316376,20316220,20316775,20119728]);
__d(function() {},14024706,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var o=o=>a(d[0]).createElement(r(d[1]).Box,{alignItems:"center",direction:"row",marginTop:3,paddingX:4,paddingY:1},a(d[0]).createElement(r(d[1]).Box,{flex:"grow"},a(d[0]).createElement(r(d[1]).Text.BodyEmphasized,{color:"ig-secondary-text"},o.headerText)),o.linkTo&&Boolean(o.secondaryText)&&!0===o.placeholder&&a(d[0]).createElement(r(d[1]).Text.Footnote,{color:"ig-secondary-text"},o.secondaryText),o.linkTo&&Boolean(o.secondaryText)&&!0!==o.placeholder&&a(d[0]).createElement(r(d[1]).Button,{borderless:!0,color:"ig-secondary-button",disabled:!!o.placeholder,href:o.linkTo,onClick:o.onClick},a(d[0]).createElement(r(d[1]).Text.FootnoteEmphasized,null,o.secondaryText)));e.default=o},14024707,[3,20381740]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var t=r(d[4]).connect(function(t){const n=r(d[0]).getSeenCountInStoryTray(t);return{broadcasts:r(d[1]).getBroadcastStoryTrayItems(t),hasOwnReel:r(d[0]).userHasReel(t,i(d[2])(t.users.viewerId)),isFullySeen:n=>{if(null!=n){const s=r(d[0]).getFirstUnseenReelItemIndex(t,n);return null!=s&&s<0}return!1},loadingId:t.stories.trayLoadingId,newReelCount:t.stories.feedTray&&t.stories.feedTray.count()-i(d[2])(n),reels:r(d[0]).getFeedStoryTrayWithoutOwn(t),seenReelCount:n,traySession:t.stories.traySession,viewerId:t.users.viewerId}},function(t){return{onLoadReel(n,s,o){t(r(d[3]).openReelsMedia(n,'reel_feed_timeline',s,o))}}})(i(d[5]));e.default=t},14024708,[20316317,20316801,20381724,20316812,5,14024709]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t=r(d[1])(2042),s=68,o=52,n=50,l=r(d[2]).CORE_CONSTANTS.AVATAR_SIZES.medium,p=4,y=10;class _ extends a(d[8]).PureComponent{constructor(...t){super(...t),this.$DesktopStoryTray3=(()=>{const t=this.props.broadcasts.size;return 0!==t&&r(d[3]).hasLiveInStories()?t:0}),this.$DesktopStoryTray4=(()=>{return 0!==this.props.broadcasts.size&&r(d[3]).hasLiveInStories()?this.props.broadcasts.sort((t,s)=>((null===t||void 0===t?void 0:t.ranked_position)||0)-((null===s||void 0===s?void 0:s.ranked_position)||0)).toList():null}),this.$DesktopStoryTray5=((t,s)=>{this.props.onLoadReel(i(d[4])(this.props.reels),t,s)}),this.$DesktopStoryTray6=((t,s)=>{const o=this.props.reels?this.props.reels.get(s-1):null;i(d[5]).log(()=>({a_pk:Number(t),has_my_reel:i(d[4])(this.props.hasOwnReel)?1:0,is_new_reel:this.props.isFullySeen(null===o||void 0===o?void 0:o.id)?0:1,new_reel_count:i(d[4])(this.props.newReelCount),pigeon_reserved_keyword_module:'reel_feed_timeline',reel_type:r(d[6]).getTypeForLogging(null===o||void 0===o?void 0:o.type),tray_position:s,tray_session_id:this.props.traySession,viewed_reel_count:i(d[4])(this.props.seenReelCount)})),r(d[6]).logStoriesEvent({event_name:'reel_tray_impression',containermodule:'reel_feed_timeline',source_of_action:'reel_feed_timeline',ig_userid:this.props.viewerId,tray_session_id:this.props.traySession,media_author:t,tray_position:s,has_my_reel:i(d[4])(this.props.hasOwnReel),new_reel_count:i(d[4])(this.props.newReelCount),viewed_reel_count:i(d[4])(this.props.seenReelCount)})}),this.$DesktopStoryTray7=((t,s)=>{i(d[5]).log(()=>({a_pk:Number(t.broadcast_owner),has_my_reel:i(d[4])(this.props.hasOwnReel)?1:0,is_new_reel:0,live_reel_count:this.$DesktopStoryTray3(),new_reel_count:i(d[4])(this.props.newReelCount),pigeon_reserved_keyword_module:'reel_feed_timeline',reel_type:r(d[7]).getReelTypeForLogging(t),tray_position:s,tray_session_id:this.props.traySession,viewed_reel_count:i(d[4])(this.props.seenReelCount)}))}),this.$DesktopStoryTray8=(({index:t,isVisible:s})=>{const o=this.$DesktopStoryTray4(),n=this.$DesktopStoryTray3();if(t<n&&null!=o){const n=o.get(t);return null!=n&&a(d[8]).createElement("div",{key:t,style:{height:this.$DesktopStoryTray2()}},a(d[8]).createElement(i(d[9]),{avatarSize:this.$DesktopStoryTray1(),broadcast:n,condensed:this.props.useContainer,isVisible:s,onScrollEnter:this.$DesktopStoryTray7,trayPosition:t}))}const l=t-n,p=i(d[4])(this.props.reels).get(l),y=null===p||void 0===p?void 0:p.latestReelMedia;return null!=p&&a(d[8]).createElement("div",{key:t,style:{height:this.$DesktopStoryTray2()}},a(d[8]).createElement(i(d[10]),{avatarSize:this.$DesktopStoryTray1(),condensed:this.props.useContainer,isVisible:s,lastUpdated:i(d[4])(y),onClick:this.$DesktopStoryTray5,onScrollEnter:this.$DesktopStoryTray6,reel:p,trayPosition:l}))}),this.$DesktopStoryTray9=(({index:t,isVisible:s})=>a(d[8]).createElement("div",{key:t,style:{height:this.$DesktopStoryTray2()}},a(d[8]).createElement(i(d[11]),{avatarSize:this.$DesktopStoryTray1(),hideAvatarBorder:this.props.useContainer,rounded:this.props.useContainer})))}$DesktopStoryTray1(){return this.props.useContainer?l-y:n}$DesktopStoryTray2(){return this.props.useContainer?o:s}$DesktopStoryTray10(){null!=this.props.reels&&this.props.onDisplayDone()}componentDidMount(){this.$DesktopStoryTray10()}componentDidUpdate(){this.$DesktopStoryTray10()}render(){const{reels:s,useContainer:o,visibleCount:n}=this.props;if(null!=s&&s.isEmpty())return a(d[8]).createElement(r(d[2]).Box,{marginBottom:4,paddingX:o?4:0,paddingY:2},a(d[8]).createElement(r(d[2]).Text.Body,{color:"ig-secondary-text"},t));const l=this.$DesktopStoryTray2(),y=l*n,_=Math.ceil(y/l);return a(d[8]).createElement(r(d[2]).Box,{dangerouslySetClassName:{__className:o?"":"aD2cN"},marginStart:o?4:0},null==s?a(d[8]).createElement(i(d[12]),{containerSize:y,estimatedItemSize:l,initialRenderCount:_,itemCount:_,overscanCount:0,renderer:this.$DesktopStoryTray9}):a(d[8]).createElement(i(d[12]),{containerSize:y,estimatedItemSize:l,initialRenderCount:_,itemCount:s.count()+this.$DesktopStoryTray3(),overscanCount:p,renderer:this.$DesktopStoryTray8}),i(d[13])._("279")&&a(d[8]).createElement(r(d[14]).HeroHoldTrigger,{description:"DesktopStoryTray",hold:null==s}))}}_.defaultProps={visibleCount:4.5,useContainer:!1};var h=i(d[15])('DesktopStoryTray',_);e.default=h,e.DESKTOP_TRAY_ROW_HEIGHT_CONDENSED=o,e.DESKTOP_STORY_TRAY_AVATAR_SIZE_CONDENSED=l,e.STORY_RING_PADDING=y},14024709,[14024710,20316220,20381740,20316799,20381724,14221338,20316502,20316807,3,14024711,14024714,14024715,20381893,20316217,20316641,20381921]);
__d(function() {},14024710,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({avatarSize:t,broadcast:s,condensed:n,isVisible:o,onScrollEnter:l,trayPosition:c}){const{cobroadcasters:u,muted:b,published_time:p}=s,y=r(d[0]).useDispatch(),f=r(d[1]).useCallback(()=>{y(r(d[2]).openLivePlayerFromStoryTray(s,'live_feed_timeline',c))},[s,y,c]),_=r(d[0]).useSelector(t=>r(d[3]).getDisplayedBroadcasters(t,s.id)),{primary:E}=_;r(d[1]).useEffect(()=>{o&&l(s,c)},[s,o,l,c]);const h=u.length>0?a(d[1]).createElement(r(d[4]).Box,{direction:"row"},a(d[1]).createElement(r(d[4]).Box,{marginEnd:1,maxWidth:132},a(d[1]).createElement(r(d[4]).Text,{display:"truncated",size:"body",weight:"semibold",zeroMargin:!0},E.username)),a(d[1]).createElement(r(d[4]).Text,{size:"body",weight:"semibold",zeroMargin:!0},r(d[5]).liveBroadcasters(u.length))):E.username;return a(d[1]).createElement(i(d[6]),{avatarSize:t,condensed:n,isLive:!0,isMuted:b,label:h,lastUpdated:p,onClick:f,profilePictureUrl:E.profile_pic_url,username:E.username})}},14024711,[5,3,20316802,20316801,20381740,20382088,14024712]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),e.default=function({avatarSize:t,clickTargetElementId:l,condensed:n,isLive:s,isMuted:c,label:u,lastUpdated:o,onClick:v,profilePictureUrl:E,username:_}){return a(d[1]).createElement("button",{className:`jZyv1 ${!0===c?"_6IL7z":""} ${!0===n?"H-yu6":""}`,onClick:v},a(d[1]).createElement(i(d[2]),{clickTargetElementId:l,isClickable:!1,isLink:!1,profilePictureUrl:E,showLivePulse:s,showLiveRing:s,size:t,storyEntrypoint:"reel_feed_timeline",username:_}),a(d[1]).createElement("div",{className:"_-3_95"},a(d[1]).createElement("div",{className:"lri3b"},a(d[1]).createElement("span",{className:"vqgRc"},u)),a(d[1]).createElement("div",{className:"dHGtX"},null!=o&&a(d[1]).createElement(i(d[3]),{className:"_4SLOU",isLong:!0,value:o}))),!0===s&&a(d[1]).createElement(i(d[4]),{fontSize:12,paddingX:3,paddingY:4}))}},14024712,[14024713,3,20382066,10354881,20382073]);
__d(function() {},14024713,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});let t=0;class s extends a(d[3]).PureComponent{constructor(...s){super(...s),this.$DesktopStoryTrayItem1=i(d[0])(s=>`DesktopStoryTrayItem_${t++}`),this.$DesktopStoryTrayItem3=(t=>{t.preventDefault(),this.props.onClick(this.props.reel.id,this.$DesktopStoryTrayItem1(this.props.reel.id))}),this.$DesktopStoryTrayItem2=(()=>{this.props.onScrollEnter(i(d[1])(this.props.reel.userId),this.props.trayPosition)})}componentDidMount(){this.props.isVisible&&this.$DesktopStoryTrayItem2()}componentDidUpdate(t){!t.isVisible&&this.props.isVisible&&this.$DesktopStoryTrayItem2()}render(){const{avatarSize:t,condensed:s,isMuted:o,isViewer:p,lastUpdated:n,profilePictureUrl:l,username:u}=this.props,c=p?r(d[2]).YOUR_STORY_TEXT:u;return a(d[3]).createElement(i(d[4]),{avatarSize:t,clickTargetElementId:this.$DesktopStoryTrayItem1(this.props.reel.id),condensed:s,isMuted:o,label:c,lastUpdated:n,onClick:this.$DesktopStoryTrayItem3,profilePictureUrl:l,username:u})}}s.defaultProps={avatarSize:50,condensed:!1};var o=r(d[7]).connect(function(t,s){const o=r(d[5]).getUserById(t,i(d[1])(s.reel.userId));return{isMuted:Boolean(s.reel.muted),isSeen:r(d[6]).isReelSeen(s.reel),isViewer:t.users.viewerId===s.reel.id,profilePictureUrl:i(d[1])(o.profilePictureUrl),username:i(d[1])(o.username)}})(s);e.default=o},14024714,[20316265,20381724,10354768,3,14024712,20316500,20316317,5]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);var t=function({avatarSize:t,hideAvatarBorder:c,rounded:l}){return a(d[1]).createElement("div",{className:"aDZPy"},a(d[1]).createElement(i(d[2]),{className:"S9Gru",hideAvatarBorder:c,size:t}),a(d[1]).createElement("div",{className:"l9n6R"},a(d[1]).createElement("div",{className:`UhO_X ${l?"DC7KV":""}`}),a(d[1]).createElement("div",{className:`oP6Lh ${l?"DC7KV":""}`})))};e.default=t},14024715,[14024716,3,14221351]);
__d(function() {},14024716,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t=r(d[1]).isDesktop()&&!0===i(d[2])._("80","3",{silent:!0}),n=t?56:50;e.default=function({isVerified:l,name:c,profilePictureUrl:o,username:s}){const u=r(d[3]).useDispatch();return a(d[7]).createElement(r(d[11]).Box,{marginEnd:1,width:"100%"},a(d[7]).createElement(r(d[11]).ListItem,{action:(()=>{if(r(d[4]).hasAccountSwitching()){const t=()=>u(r(d[5]).openAccountSwitcher(r(d[6]).FEED_PATH,'feed_sidebar'));switch(i(d[2])._("124","5",{signal:!0})){case'chevron':return a(d[7]).createElement(i(d[8]),{onClick:t},a(d[7]).createElement(i(d[9]),{alt:r(d[10]).DOWN_CHEVRON_ALT,direction:"down",size:20}));case'switch_text':return a(d[7]).createElement(r(d[11]).Button,{borderless:!0,onClick:t},a(d[7]).createElement(r(d[11]).Text.Footnote,{color:"ig-primary-action",weight:"semibold"},r(d[12]).SWITCH_CTA_TEXT));default:return i(d[13])('Unexpected qe value for switcher_variant'),null}}return null})(),icon:a(d[7]).createElement(i(d[14]),{className:"_2NjG_",isLink:!0,profilePictureUrl:o,size:n,storyEntrypoint:"reel_feed_timeline",username:s}),subtitle:''!==c?a(d[7]).createElement(r(d[11]).Box,{flex:"grow",marginStart:t?3:1},a(d[7]).createElement(r(d[11]).Text.Body,{color:"ig-secondary-text",display:"truncated"},c)):null,title:a(d[7]).createElement(r(d[11]).Box,{direction:"row",flex:"grow",marginStart:t?3:1},a(d[7]).createElement(i(d[15]),{className:"gmFkV",href:r(d[16]).buildUserLink(s)},s),l&&a(d[7]).createElement(r(d[11]).Box,{display:"inlineBlock",marginStart:1},a(d[7]).createElement(r(d[11]).VerifiedBadge,null))),zeroPadding:!0}))}},14024717,[14024718,20316167,20316313,5,20316309,20316542,20316376,3,20381773,20381778,20316513,20381740,20381739,20316244,20382066,20381753,20316419]);
__d(function() {},14024718,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const s=r(d[0])(1724),t=()=>a(d[1]).createElement(r(d[2]).Box,{paddingX:4,paddingY:3},a(d[1]).createElement(r(d[2]).Button,{borderless:!0,href:r(d[3]).DISCOVER_PEOPLE_PATH},r(d[0])(3108)));var l=i(d[10])('FetchingSuggestedUserList',({analyticsContext:l,avatarSize:o="medium",backgroundColor:n,borderlessFollowButton:u=!1,count:c,footer:E,header:U,hideName:S=!1,hideUpsells:_=!1,initialRenderCount:T=r(d[4]).SUL_FETCH_SUGGESTED_COUNT_DEFAULT,onDisplayDone:L,variant:C="LIST",viewModule:h})=>{const{isLoading:D,suggestedUserIds:F}=r(d[5]).useSelector(a(d[1]).useCallback(s=>({isLoading:s.suggestedUsers.isLoadingSuggestions,suggestedUserIds:s.suggestedUsers.ids.toArray()}),[]),r(d[5]).shallowEqual),v=r(d[5]).useDispatch(),b=a(d[1]).useCallback(s=>r(d[6]).hasSuggestedUsersV2()?v(r(d[4]).loadSULV2()):v(r(d[4]).loadSUL({suggestedCount:s})),[v]);return a(d[1]).useEffect(()=>{0===F.length&&b(r(d[4]).SUL_FETCH_SUGGESTED_COUNT_DEFAULT)},[b,F.length]),a(d[1]).useEffect(()=>{F.length>0&&L()},[L,F]),a(d[1]).createElement(a(d[1]).Fragment,null,a(d[1]).createElement(i(d[7]),{analyticsContext:l,avatarSize:o,backgroundColor:n,borderlessFollowButton:u,hideName:S,hideUpsells:_,initialRenderCount:T,isLoading:D,subHeader:void 0!==U?U:s,userIds:isNaN(c)?F.slice(0,r(d[4]).SUL_FETCH_SUGGESTED_COUNT_DEFAULT):F.slice(0,c),variant:C,viewModule:h}),'LIST'===C&&(void 0!==E?E:a(d[1]).createElement(t,null)),i(d[8])._("279")&&a(d[1]).createElement(r(d[9]).HeroHoldTrigger,{description:"FetchingSuggestedUserList",hold:D}))});e.default=l,e.HEADER_TEXT=s},10485770,[20316220,3,20381740,20316376,20316504,5,10485771,10485772,20316217,20316641,20381921]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.hasSuggestedUsersV2=function(t){return i(d[0])._("155","0",t)}},10485771,[20316313]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var n=({analyticsContext:n,avatarSize:t="large",borderlessFollowButton:o=!1,backgroundColor:l="ig-primary-background",children:s,footer:c,hideName:u=!1,hideStoryRings:_=!1,hideUpsells:C=!1,initialRenderCount:E=r(d[0]).SUL_FETCH_SUGGESTED_COUNT_DEFAULT,isLoading:p,onDismiss:f,subHeader:h,userIds:S,variant:v="LIST",viewModule:x})=>{const T={},{canFBConnect:I}=r(d[1]).useSelector(a(d[2]).useCallback(n=>({canFBConnect:r(d[3]).shouldDisplayFacebookConnect(n)}),[]),r(d[1]).shallowEqual),y=({followedByViewer:n,index:t,userId:o})=>{n||F('recommended_follow_button_tapped',o,t)},b=({index:n,userId:t})=>{F('recommended_username_tapped',t,n)},D=(n,t)=>{if(null!=S)for(let o=n;o<=t-1;++o){const n=S[o];T[n]||(F('recommended_user_impression',n,o),T[n]=!0)}},F=(t,o,l)=>{r(d[4]).logConnectionAction({eventName:t,position:l,targetId:o,containerModule:n,viewModule:x})};return'GRID'===v?a(d[2]).createElement(i(d[5]),{avatarSize:t,isLoading:p,onFollowClick:y,onUsernameClick:b,onVisibilityChange:D,subHeader:h,suffix:a(d[2]).createElement(i(d[6]),{href:r(d[7]).DISCOVER_PEOPLE_PATH}),userIds:S||[]}):a(d[2]).createElement(a(d[2]).Fragment,null,null!=h&&a(d[2]).createElement(r(d[8]).Box,{marginBottom:3,marginTop:4,paddingX:3},a(d[2]).createElement(r(d[8]).Text.Section,null,h)),a(d[2]).createElement(r(d[8]).Box,{color:l,paddingY:2},!C&&a(d[2]).createElement(a(d[2]).Fragment,null,r(d[9]).checkGraphDifferentiationQE()&&a(d[2]).createElement(i(d[10]),{analyticsContext:r(d[4]).CONNECTIONS_CONTAINER_MODULES.discover_people}),I&&r(d[9]).checkGraphDifferentiationQE()&&a(d[2]).createElement(r(d[8]).Box,{paddingY:2},a(d[2]).createElement(r(d[8]).Divider,null))),a(d[2]).createElement(i(d[11]),{avatarSize:t,avatarTriggerAnalyticsContext:"suggested_user_avatar",borderlessFollowButton:o,hideName:u,hideStoryRings:_,hoverPositionType:"fixed",initialRenderCount:E,isLoading:Boolean(p),onDismiss:f,onFollowClick:y,onScrollChange:({index:n,userId:t})=>{T[t]||(F('recommended_user_impression',t,n),T[t]=!0)},onUsernameClick:b,truncateListItemText:!0,userIds:S||[],usernameTriggerAnalyticsContext:"suggested_user"}),c))};e.default=n},10485772,[20316504,5,3,10485773,20316775,10485775,10485777,20316376,20381740,20316565,10485779,10354733]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var n=n=>{const{isLoading:t,onFollowClick:l,onUsernameClick:o,onVisibilityChange:s,subHeader:c,suffix:u,userIds:f}=n,k=n=>{l&&l(n)},p=n=>{o&&o(n)};return t?a(d[0]).createElement(r(d[1]).Box,{alignItems:"center",marginTop:4,width:"100%"},a(d[0]).createElement(r(d[1]).Spinner,null)):a(d[0]).createElement(r(d[1]).Deck,{cardType:"USER",hasBlur:!0,headerText:c,onVisibilityChange:(n,t)=>{s&&s(n,t)},suffix:u},f.map((n,t)=>a(d[0]).createElement(i(d[2]),{id:n,key:t,onFollowClick:k,onUsernameClick:p,position:t})))};e.default=n},10485775,[3,20381740,10485776]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var l=l=>{const{analyticsContext:n,id:s,onFollowClick:t,position:o}=l,{relationship:u,user:c}=r(d[0]).useSelector(a(d[1]).useCallback(n=>({relationship:r(d[2]).getRelationship(n.relationships,l.id),user:r(d[3]).getUserById(n,l.id)}),[l.id]),r(d[0]).shallowEqual),{profilePictureUrl:p,suggestionDescription:f,username:C}=c;return null==p||null==f||null==C?null:a(d[1]).createElement(r(d[4]).UserCard,{button:a(d[1]).createElement(i(d[5]),{analyticsContext:n,onClick:()=>{null!=t&&u&&t({index:o,userId:s,followedByViewer:r(d[2]).followedByViewer(u)})},relationship:u,userId:c.id}),isVerified:c.isVerified,onUsernameClick:()=>{l.onUsernameClick({index:o,userId:s})},src:p,subtitle:f,username:C})};e.default=l},10485776,[5,3,20316318,20316500,20381740,10354736]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),r(d[1]);var t=t=>a(d[2]).createElement(i(d[3]),{className:"HUW1v hUQXy",href:t.href,onClick:t.onClick,params:t.params},r(d[4])(1193));e.default=t},10485777,[20381787,10485778,3,20381753,20316220]);
__d(function() {},10485778,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t='connect_to_facebook',n=r(d[0])(46),o=r(d[0])(2569),c=r(d[0])(732);var l=l=>{const{canFBConnect:s,isLoading:u}=r(d[1]).useSelector(a(d[2]).useCallback(t=>({canFBConnect:r(d[3]).shouldDisplayFacebookConnect(t),isLoading:r(d[3]).isInitialLoad(t)}),[]),r(d[1]).shallowEqual),[C,E]=a(d[2]).useState(!1),_=r(d[4]).parseQueryParams();return null!=_[t]&&_[t].length>0&&(i(d[5]).replace(i(d[5]).location.pathname),E(!0)),C?a(d[2]).createElement(r(d[6]).Toast,{duration:1500,onClose:()=>E(!1)},r(d[7]).FACEBOOK_COMPLETED):s&&a(d[2]).createElement(r(d[6]).ListItem,{action:a(d[2]).createElement(r(d[6]).Button,{disabled:u,loading:u,onClick:()=>r(d[8]).redirectToFBOAuth(`${i(d[5]).location.pathname}?${t}=true`,l.analyticsContext)},c),icon:a(d[2]).createElement(r(d[6]).BorderedIcon,{alt:n,color:"facebook",icon:r(d[6]).ICONS.FACEBOOK_CIRCLE_FILLED_24,size:r(d[6]).CORE_CONSTANTS.AVATAR_SIZES.medium}),subtitle:o,title:a(d[2]).createElement(r(d[6]).Text.BodyEmphasized,null,n),truncateText:!1})};e.default=l},10485779,[20316220,5,3,10485773,20316552,20316537,20381740,10485780,20316565]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=65;class s extends a(d[0]).PureComponent{constructor(...t){super(...t),this.$UserList1=a(d[0]).createRef(),this.$UserList2=(t=>{const{onFollowClick:s}=this.props;s&&s(t)}),this.$UserList3=(({index:t,isVisible:s})=>{const{analyticsContext:n,avatarSize:o,avatarTriggerAnalyticsContext:l,borderlessFollowButton:c,entryPoint:u,hideName:h,hoverPositionType:p,isLoading:y,truncateListItemText:C,userIds:L,usernameTriggerAnalyticsContext:U}=this.props;return 0===L.length?y?a(d[0]).createElement(r(d[1]).ListItemPlaceholder,{key:t,size:o}):null:a(d[0]).createElement(i(d[2]),{analyticsContext:n,avatarSize:o,avatarTriggerAnalyticsContext:l,borderlessFollowButton:c,entryPoint:u,hideFollowButton:this.props.hideFollowButton,hideName:h,hideStoryRings:this.props.hideStoryRings,hoverPositionType:p||'absolute',id:L[t],isVisible:s,key:L[t],onDismiss:this.props.onDismiss,onFollowClick:this.$UserList2,onScrollEnter:this.$UserList4,onUsernameClick:this.$UserList5,position:t,truncateText:C,usernameTriggerAnalyticsContext:U})}),this.$UserList4=(t=>{const{onScrollChange:s}=this.props;s&&s(t)}),this.$UserList5=(t=>{const{onUsernameClick:s}=this.props;s&&s(t)})}componentDidUpdate(t){null!=this.$UserList1.current&&this.props.userIds.length===this.props.initialRenderCount&&0===t.userIds.length&&this.$UserList1.current.forceUpdate()}render(){const{containerSize:s,initialRenderCount:n,isLoading:o,onScroll:l,userIds:c}=this.props;return a(d[0]).createElement(a(d[0]).Fragment,null,a(d[0]).createElement(i(d[3]),{containerSize:s,estimatedItemSize:t,initialRenderCount:n,itemCount:c.length||n,onScroll:l,ref:this.$UserList1,renderer:this.$UserList3}),c.length>0&&o&&a(d[0]).createElement(r(d[1]).Box,{alignItems:"center",marginTop:4},a(d[0]).createElement(r(d[1]).Spinner,{size:"medium"})))}}s.defaultProps={avatarTriggerAnalyticsContext:null,borderlessFollowButton:!1,containerSize:'auto',entryPoint:'unknown',hideFollowButton:!1,hideName:!1,hideStoryRings:!1,hoverPositionType:null,initialRenderCount:10,isLoading:!1,usernameTriggerAnalyticsContext:null};var n=s;e.default=n},10354733,[3,20381740,10354734,20381893]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t=({onClick:t,user:n})=>{const{isVerified:l,username:o}=n;return void 0===o?null:a(d[1]).createElement(i(d[2]),{href:r(d[3]).buildUserLink(o),onClick:t,title:o},a(d[1]).createElement(r(d[4]).Box,{direction:"row"},a(d[1]).createElement(r(d[4]).Text.BodyEmphasized,{dangerouslySetClassName:{__className:"rWtOq"},display:"truncated"},a(d[1]).createElement(r(d[4]).Box,{alignItems:"center",direction:"row"},o,!0===l&&a(d[1]).createElement(r(d[4]).Box,{marginStart:2},a(d[1]).createElement(r(d[4]).VerifiedBadge,{size:"small"}))))))};var n=r(d[14]).connect(function(t,n){return{relationship:r(d[5]).getRelationship(t.relationships,n.id),user:r(d[13]).getUserById(t,n.id),viewer:r(d[13]).getViewer(t)}})(({analyticsContext:n,avatarSize:l="medium",avatarTriggerAnalyticsContext:o=null,borderlessFollowButton:s,entryPoint:u,hideFollowButton:c,hideName:E,hideStoryRings:C,hoverPositionType:p=null,id:y,isVisible:S,onDismiss:x=null,onFollowClick:T,onScrollEnter:f,onUsernameClick:v,position:I,relationship:k,truncateText:h,user:w,usernameTriggerAnalyticsContext:A=null,viewer:B})=>{var _;const b=r(d[4]).usePreviousValue(S),[N,V]=r(d[1]).useState(!0),O=r(d[1]).useCallback(()=>{T&&k&&T({index:I,userId:y,followedByViewer:r(d[5]).followedByViewer(k)})},[y,T,I,k]),P=r(d[1]).useCallback(()=>{f({index:I,userId:y})},[y,f,I]),R=r(d[1]).useCallback(()=>{v({index:I,userId:y})},[y,v,I]);r(d[1]).useEffect(()=>{!0!==b&&S&&P()},[P,S,b]);const U=!c&&(null===B||void 0===B?void 0:B.id)!==w.id,z=C?a(d[1]).createElement(i(d[6]),{profilePictureUrl:i(d[7])(w.profilePictureUrl),size:r(d[4]).CORE_CONSTANTS.AVATAR_SIZES[l],username:w.username}):a(d[1]).createElement(i(d[8]),{profilePictureUrl:i(d[7])(w.profilePictureUrl),size:r(d[4]).CORE_CONSTANTS.AVATAR_SIZES[l],storyEntrypoint:u,username:w.username}),F=a(d[1]).createElement(a(d[1]).Fragment,null,a(d[1]).createElement(i(d[9]),{analyticsContext:n,borderless:s,onClick:O,relationship:k,userId:w.id,useSmallText:s}),null!=x&&a(d[1]).createElement(r(d[4]).Box,{marginStart:3,right:!0},a(d[1]).createElement(r(d[4]).IconButton,{alt:r(d[10]).DISMISS_TEXT,icon:r(d[4]).ICONS.GREY_CLOSE,noMinSize:!0,onClick:()=>{V(!1),x(y)}})));return N&&a(d[1]).createElement(r(d[4]).ListItem,{action:U?F:void 0,context:w.suggestionDescription,icon:null!=p&&null!=o?a(d[1]).createElement(i(d[11]),{display:"block",positionType:p,triggerAnalyticsContext:o,userId:w.id},z):z,subtitle:E?null:w.fullName,title:null!=p&&null!=A?a(d[1]).createElement(i(d[12]),{color:"ig-primary-text",onClick:R,positionType:p,triggerAnalyticsContext:A,userId:w.id,username:null!==(_=null===w||void 0===w?void 0:w.username)&&void 0!==_?_:''}):a(d[1]).createElement(t,{onClick:R,user:w}),truncateText:h})});e.default=n},10354734,[10354735,3,20381753,20316419,20381740,20316318,20381786,20381724,20382066,10354736,20316513,10354746,10354765,20316500,5]);
__d(function() {},10354735,[]);