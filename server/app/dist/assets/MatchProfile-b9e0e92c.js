import{o as s,c as h,a as l,h as _,w as r,v as d,F as c,r as o,M as m,N as p,t as e,j as y}from"./index-8e4fb7b2.js";const b=l("div",{class:"has-text-centered p-2"},[l("h1",{class:"title my-5 has-text-white"},"Match Summary")],-1),S={class:"container"},T={class:"box my-4 has-background-dark"},f=l("h1",{class:"title is-4 mb-5 has-text-danger"}," Red Alliance ",-1),g={class:"title is-5 has-text-success is-dark my-1"},v={class:"table-container"},k={class:"table has-background-dark is-bordered is-striped is-hoverable is-fullwidth has-text-white"},A=l("thead",null,[l("tr",{id:"red"},[l("th",null,[l("a",null,"Team #")]),l("th",null,[l("a",null,"Auto Start Pos")]),l("th",null,[l("a",null,"Auto Mobility")]),l("th",null,[l("a",null,"Auto Pickup")]),l("th",null,[l("a",null,"Auto CS")]),l("th",null,[l("a",null,"Auto GP Total")]),l("th",null,[l("a",null,"Auto Score")]),l("th",null,[l("a",null,"Teleop GP Total")]),l("th",null,[l("a",null,"Overall GP Scored")]),l("th",null,[l("a",null,"Mode Pickup")]),l("th",null,[l("a",null,"EG Start Time")]),l("th",null,[l("a",null,"Est. Cycle Time (s)")]),l("th",null,[l("a",null,"EG CS")]),l("th",null,[l("a",null,"Defence")]),l("th",null,[l("a",null,"Defence Type")]),l("th",null,[l("a",null,"Cycle Over CS?")])])],-1),C=l("h1",{class:"title is-5 has-text-danger mb-0"}," Comments: ",-1),M={class:"has-background-dark card"},P={class:"card-content"},N={class:"title is-5 has-text-white"},w={class:"subtitle is-6 has-text-white"},x={class:"box my-4 has-background-dark"},E=l("h1",{class:"title is-4 mb-5 has-text-info"}," Blue Alliance ",-1),G={class:"title is-5 has-text-success is-dark my-1"},D={class:"table-container"},W={class:"table is-bordered is-striped is-hoverable is-fullwidth has-background-dark has-text-white"},B=l("thead",null,[l("tr",null,[l("th",null,[l("a",null,"Team #")]),l("th",null,[l("a",null,"Auto Start Pos")]),l("th",null,[l("a",null,"Auto Mobility")]),l("th",null,[l("a",null,"Auto Pickup")]),l("th",null,[l("a",null,"Auto CS")]),l("th",null,[l("a",null,"Auto GP Total")]),l("th",null,[l("a",null,"Auto Score")]),l("th",null,[l("a",null,"Teleop GP Total")]),l("th",null,[l("a",null,"Overall GP Scored")]),l("th",null,[l("a",null,"Mode Pickup Type")]),l("th",null,[l("a",null,"EG Start Time")]),l("th",null,[l("a",null,"Est. Cycle Time (s)")]),l("th",null,[l("a",null,"EG CS")]),l("th",null,[l("a",null,"Defence")]),l("th",null,[l("a",null,"Defence Type")]),l("th",null,[l("a",null,"Cycle Over CS?")])])],-1),O=l("h1",{class:"title is-5 has-text-info mb-0"}," Comments: ",-1),R={class:"has-background-dark card"},F={class:"card-content"},V={class:"title is-5 has-text-white"},j={class:"subtitle is-6 has-text-white"},L={data(){return{matchNum:Number,matches:Array,bMatch:Array,rMatch:Array,currentSortField:String,sortDirection:String,Win:String}},methods:{displayArray(u){let n={},a=0,t=null;for(let i of u)n[i]?n[i]++:n[i]=1,n[i]>a&&(a=n[i],t=i);return t},createMatches(){this.bMatch=[],this.rMatch=[],this.matches.forEach(u=>{u.matchNum==this.matchNum&&u.matchSide==="blue"?this.bMatch.push(u):u.matchNum==this.matchNum&&u.matchSide==="red"&&this.rMatch.push(u)})},checkWin(){let u=0,n=0;return this.bMatch.forEach(a=>{a.win&&u++}),this.rMatch.forEach(a=>{a.win&&n++}),u>n?"Blue Alliance":n>u?"Red Alliance":"Tie"}},mounted(){const u=y();this.matchNum=u.params.num},async created(){this.matches=await m.getMatches(),await m.getMatches().then(this.createMatches()),this.Win=this.checkWin()}},z=Object.assign(L,{__name:"MatchProfile",setup(u){return(n,a)=>(s(),h(c,null,[l("nav",null,[_(p)]),b,l("div",S,[l("div",T,[l("div",null,[f,r(l("h1",g," Win ",512),[[d,n.Win==="Red Alliance"]])]),l("div",v,[l("table",k,[A,(s(!0),h(c,null,o(n.rMatch,t=>(s(),h("tbody",null,[l("td",null,[l("h6",null,e(t.teamNum),1)]),l("td",null,[l("h6",null,e(t.autoStartPos),1)]),l("td",null,[l("h6",null,e(t.community),1)]),l("td",null,[l("h6",null,e(t.autoPickupPos.toString()),1)]),l("td",null,[l("h6",null,e(t.autoCS),1)]),l("td",null,[l("h6",null,e(t.gpAutoTotal),1)]),l("td",null,[l("h6",null,e(t.autoScore),1)]),l("td",null,[l("h6",null,e(t.gpTeleopTotal),1)]),l("td",null,[l("h6",null,e(t.gpTotal),1)]),l("td",null,[l("h6",null,e(n.displayArray(t.pickupType)),1)]),l("td",null,[l("h6",null,e(t.endgameStartTime),1)]),l("td",null,[l("h6",null,e(t.estCycleTime),1)]),l("td",null,[l("h6",null,e(t.endgameCS),1)]),l("td",null,[l("h6",null,e(t.defence),1)]),l("td",null,[l("h6",null,e(t.defenceType),1)]),l("td",null,[l("h6",null,e(t.CSCycle),1)])]))),256))]),C,(s(!0),h(c,null,o(n.rMatch,t=>(s(),h("section",null,[l("div",M,[l("div",P,[l("h2",N,e(t.teamNum),1),l("p",w,' "'+e(t.comments)+'" - '+e(t.scoutName),1)])])]))),256))])]),l("div",x,[l("div",null,[E,r(l("h1",G," Win ",512),[[d,n.Win==="Blue Alliance"]])]),l("div",D,[l("table",W,[B,(s(!0),h(c,null,o(n.bMatch,t=>(s(),h("tbody",null,[l("td",null,[l("h6",null,e(t.teamNum),1)]),l("td",null,[l("h6",null,e(t.autoStartPos),1)]),l("td",null,[l("h6",null,e(t.community),1)]),l("td",null,[l("h6",null,e(t.autoPickupPos.toString()),1)]),l("td",null,[l("h6",null,e(t.autoCS),1)]),l("td",null,[l("h6",null,e(t.gpAutoTotal),1)]),l("td",null,[l("h6",null,e(t.autoScore),1)]),l("td",null,[l("h6",null,e(t.gpTeleopTotal),1)]),l("td",null,[l("h6",null,e(t.gpTotal),1)]),l("td",null,[l("h6",null,e(n.displayArray(t.pickupType)),1)]),l("td",null,[l("h6",null,e(t.endgameStartTime),1)]),l("td",null,[l("h6",null,e(t.estCycleTime),1)]),l("td",null,[l("h6",null,e(t.endgameCS),1)]),l("td",null,[l("h6",null,e(t.defence),1)]),l("td",null,[l("h6",null,e(t.defenceType),1)]),l("td",null,[l("h6",null,e(t.CSCycle),1)])]))),256))]),O,(s(!0),h(c,null,o(n.bMatch,t=>(s(),h("section",null,[l("div",R,[l("div",F,[l("h2",V,e(t.teamNum),1),l("p",j,e(t.comments)+" - "+e(t.scoutName),1)])])]))),256))])])])],64))}});export{z as default};