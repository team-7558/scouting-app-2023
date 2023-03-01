import{u as v,o as h,c as _,a as t,b as n,n as u,d as k,e as C,_ as T,M as y,T as x,w as m,v as p,f as g,g as P,h as b,t as f,F as $,N as A}from"./index-caa4915f.js";const D={class:"tile is-ancestor"},N={class:"tile is-parent is-vertical"},E={class:"buttons tile has-addons has-text-centered"},M={class:"tile is-parent is-vertical"},w={class:"buttons tile has-addons has-text-centered"},G={class:"tile is-parent is-vertical"},I={class:"buttons tile has-addons has-text-centered"},z={__name:"Grid",setup(a){const e=v();return(r,s)=>(h(),_("div",D,[t("div",N,[t("button",{onClick:s[0]||(s[0]=o=>n(e).gpAdd("cone",0,2)),class:"button is-large box is-warning is-light box has-text-centered is-responsive"},"△"),t("button",{onClick:s[1]||(s[1]=o=>n(e).gpAdd("cone",0,1)),class:"button is-large tile box is-warning is-light box has-text-centered is-responsive"},"△"),t("div",E,[t("button",{onClick:s[2]||(s[2]=o=>n(e).gpAdd("cone",0,0)),class:"button is-large column is-warning is-light is-responsive"},"△"),t("button",{onClick:s[3]||(s[3]=o=>n(e).gpAdd("cube",0,0)),class:"button is-large column is-link is-light is-responsive"},"□")])]),t("div",M,[t("button",{onClick:s[4]||(s[4]=o=>n(e).gpAdd("cone",1,2)),class:"button is-large tile box is-link is-light box has-text-centered is-responsive"},"□"),t("button",{onClick:s[5]||(s[5]=o=>n(e).gpAdd("cone",1,1)),class:"button is-large tile box is-link is-light box has-text-centered is-responsive"},"□"),t("div",w,[t("button",{onClick:s[6]||(s[6]=o=>n(e).gpAdd("cone",1,0)),class:"button is-large column is-warning is-light is-responsive"},"△"),t("button",{onClick:s[7]||(s[7]=o=>n(e).gpAdd("cone",1,0)),class:"button is-large column is-link is-light is-responsive"},"□")])]),t("div",G,[t("button",{onClick:s[8]||(s[8]=o=>n(e).gpAdd("cone",2,2)),class:"button is-large box is-warning is-light box has-text-centered is-responsive"},"△"),t("button",{onClick:s[9]||(s[9]=o=>n(e).gpAdd("cone",2,1)),class:"button is-large tile box is-warning is-light box has-text-centered is-responsive"},"△"),t("div",I,[t("button",{onClick:s[10]||(s[10]=o=>n(e).gpAdd("cone",2,0)),class:"button is-large column is-warning is-light is-responsive"},"△"),t("button",{onClick:s[11]||(s[11]=o=>n(e).gpAdd("cone",2,0)),class:"button is-large column is-link is-light is-responsive"},"□")])])]))}},W={class:"container"},F=t("label",{class:"label is-size-6 has-text-centered mb-2"},"Chargestation:",-1),q={class:"buttons tile has-addons has-text-centered mb-2"},B={__name:"Chargestation",setup(a){const e=v();return(r,s)=>(h(),_("div",W,[F,t("div",q,[t("button",{onClick:s[0]||(s[0]=o=>n(e).setAutoCS("Docked")),class:u([n(e).autoCS==="Docked"?"button is-primary column is-medium px-5":"button is-dark column is-medium px-5"])},"D",2),t("button",{onClick:s[1]||(s[1]=o=>n(e).setAutoCS("Parked")),class:u([n(e).autoCS==="Parked"?"button column is-medium px-5":"button is-dark column is-medium px-5"])},"P",2),t("button",{onClick:s[2]||(s[2]=o=>n(e).setAutoCS("Engaged")),class:u([n(e).autoCS==="Engaged"?"button is-danger column is-medium px-5":"button is-dark column is-medium px-5"])},"E",2)])]))}},V={class:"container"},H=t("label",{class:"label is-size-6 has-text-centered mb-2"},"Community:",-1),O={class:"buttons tile has-addons has-text-centered mb-2"},R={__name:"Community",setup(a){const e=v();return(r,s)=>(h(),_("div",V,[H,t("div",O,[t("button",{onClick:s[0]||(s[0]=o=>n(e).setCommunity(!0)),class:u([n(e).community==!0?"button is-active column is-large px-5":"button is-dark column is-large px-5"])},"Y",2),t("button",{onClick:s[1]||(s[1]=o=>n(e).setCommunity(!1)),class:u([n(e).community==!1?"button is-active column is-large px-5":"button is-dark column is-large px-5"])},"N",2)])]))}},L={data(){return{teams:[],matches:[],singleTeamMatches:[]}},methods:{getValue(){let a=document.getElementById("defence").value;c.setDefence(a)},setEndgameCS(){let a=document.getElementById("endgameCS").value;c.setEndgameCS(a)},setScoutName(){let a=document.getElementById("scoutName").value;c.setScoutName(a)},setComments(){let a=document.getElementById("comments").value;c.setComments(a)},matchPush(){S.matchCheck(c.matchNum)||S.matchPush(c.matchNum)},getDefence(){return c.defence},setDefenceType(a){c.setDefenceType(a)},setCSCycle(a){c.setCSCycle(a)},setWin(a){c.setWin(a)},async createMatch(){y.create(c.matchData),console.log(y.getMatches()),this.matches=await y.getMatches(),this.updateTeam(),this.resetMatchData(),i.$reset()},resetMatchData(){c.$reset()},updateTeam(){let a="";this.teams.forEach(e=>{e.teamNum==c.teamNum&&(a=e._id)}),console.log(a),x.update(a,this.teamAvg())},teamAvg(){return console.log(this.matches),this.matches.forEach(e=>{e.teamNum==c.teamNum&&(i.communityPush(e.community),i.autoCSPush(e.autoCS),i.gpTotalPush(e.gpTotal),i.gpAutoTotalPush(e.gpAutoTotal),i.gpTeleopTotalPush(e.gpTeleopTotal),i.gpAutoScorePush(e.gpAutoScore),i.gpTeleopScorePush(e.gpTeleopScore),i.gpTotalScorePush(e.gpTotalScore),i.autoStartPosPush(e.autoStartPos),i.pickupTypePush(e.pickupType),i.autoPickupPosPush(e.autoPickupPos),i.endgameStartTimePush(e.endgameStartTime),i.estCycleTimePush(e.estCycleTime),i.endgameCSPush(e.endgameCS),i.defencePush(e.defence),i.defenceTypePush(e.defenceType),i.CSCyclePush(e.CSCycle),i.winPush(e.win))}),console.log(i.estCycleTimeArray),{teamNum:c.teamNum,modeCommunity:this.findMode(i.communityArray),modeAutoCS:this.findHighestCS(i.autoCSArray),avgGpTotal:this.findAvg(i.gpTotalArray),avgGpAutoTotal:this.findAvg(i.gpAutoTotalArray),avgGpTeleopTotal:this.findAvg(i.gpTeleopTotalArray),avgGpAutoScore:this.findAvg(i.gpAutoScoreArray),avgGpTeleopScore:this.findAvg(i.gpTeleopScoreArray),avgGpTotalScore:this.findAvg(i.gpTotalScoreArray),modeAutoStartPos:this.findMode(i.autoStartPosArray),modePickupType:this.findMode(i.pickupTypeArray),modeAutoPickupPos:this.findMode(i.autoPickupPosArray),avgEndgameStartTime:this.findAvgTime(i.endgameStartTimeArray),avgEstCycleTime:this.findAvg(i.estCycleTimeArray),modeEndgameCS:this.findHighestCS(i.endgameCSArray),modeDefence:this.findMode(i.defenceArray),modeDefenceType:this.findMode(i.defenceTypeArray),modeCSCycle:this.findMode(i.CSCycleArray),modeWin:this.findMode(i.winArray)}},findMode(a){console.log(a);let e=a.filter(d=>d!=""||d==!1);console.log(e);var r="",s={},o=0;for(var l in e)s[e[l]]=(s[e[l]]||0)+1,s[e[l]]>o&&(o=s[e[l]],r=e[l]);return r},findAvg(a){let e=a.filter(o=>o!=null),r=0;e.forEach(o=>{r+=o});let s=parseFloat((r/e.length).toFixed(0));return s=="NaN"?0:s},findHighestCS(a){return a.indexOf("Engaged")>=0?"Engaged":a.indexOf("Docked")>=0?"Docked":a.indexOf("Parked")>=0?"Parked":"None"},findAvgTime(a){console.log(a);let e=0,r=0;a.forEach(o=>{if(o!=""){let l=parseFloat(o.substring(0,1)*60)+parseFloat(o.substring(2,4));e+=l,r++}});let s=Math.round(e/r);return(s-(s%=60))/60+(9<s?":":":0")+s}},async mounted(){this.teams=await x.getTeams(),this.matches=await y.getMatches()}},c=v(),S=k(),i=C(),Y={class:"field"},Z=t("label",{class:"label"},"Scout Name",-1),j={class:"control"},J={class:"field"},K=t("label",{class:"label"},"Chargestation Endgame",-1),Q={class:"control"},U={class:"select"},X=t("option",{value:"Docked"},"Docked",-1),ee=t("option",{value:"Engaged"},"Engaged",-1),te=t("option",{value:"Parked"},"Parked",-1),se=t("option",{value:"None"},"None",-1),ne=[X,ee,te,se],oe={class:"field my-5"},ie=t("label",{class:"label"},"Defense",-1),ae={class:"control"},le={class:"select"},de=P('<option value="No Defence">0 - No Defence</option><option value="Rarely Defends">1 - Rarely Defends</option><option value="Some Defence">2 - Some Defence</option><option value="Frequent Defence">3 - Frequent Defence</option><option value="Only Plays Defence">4 - Only Plays Defence</option>',5),ue=[de],re={class:"field my-5"},ce=t("label",{class:"label"}," Defence Type ",-1),me={class:"control"},pe={class:"radio mx-5"},ge={class:"radio mx-5"},be={class:"radio mx-5"},ve={class:"radio mx-5"},he={class:"field my-5"},_e=t("label",{class:"label"}," Cycle Over Chargestation ",-1),ye={class:"control"},xe={class:"radio mx-5"},fe={class:"radio mx-5"},Se={class:"field my-5"},ke=t("label",{class:"label"}," Win ",-1),Ce={class:"control"},Te={class:"radio mx-5"},Pe={class:"radio mx-5"},$e=t("div",{class:"field"},[t("label",{class:"label"}," RP Gained"),t("input",{class:"input",type:"number",placeholder:"RP"})],-1),Ae={class:"field"},De=t("label",{class:"label"},"Comments",-1),Ne={class:"control"},Ee={class:"field is-grouped"},Me={class:"control"},we=t("div",{class:"control"},[t("button",{class:"button is-link is-light"},"Cancel")],-1);function Ge(a,e,r,s,o,l){return h(),_("div",null,[t("div",Y,[Z,t("div",j,[t("input",{class:"input",type:"text",placeholder:"Name",id:"scoutName",onInput:e[0]||(e[0]=(...d)=>l.setScoutName&&l.setScoutName(...d))},null,32)])]),t("div",J,[K,t("div",Q,[t("div",U,[t("select",{id:"endgameCS",onChange:e[1]||(e[1]=(...d)=>l.setEndgameCS&&l.setEndgameCS(...d))},ne,32)])])]),t("div",oe,[ie,t("div",ae,[t("div",le,[t("select",{id:"defence",onChange:e[2]||(e[2]=(...d)=>l.getValue&&l.getValue(...d))},ue,32)])])]),m(t("div",re,[ce,t("div",me,[t("label",pe,[t("input",{type:"radio",name:"defenceType",id:"Line",onInput:e[3]||(e[3]=d=>l.setDefenceType("Line"))},null,32),g(" Line ")]),t("label",ge,[t("input",{type:"radio",name:"defenceType",id:"Zone/Trap",onInput:e[4]||(e[4]=d=>l.setDefenceType("Zone/Trap"))},null,32),g(" Zone/Trap ")]),t("label",be,[t("input",{type:"radio",name:"defenceType",id:"Man",onInput:e[5]||(e[5]=d=>l.setDefenceType("Man"))},null,32),g(" Man ")]),t("label",ve,[t("input",{type:"radio",name:"defenceType",id:"Tbone",onInput:e[6]||(e[6]=d=>l.setDefenceType("Tbone"))},null,32),g(" Tbone ")])])],512),[[p,l.getDefence()!="No Defence"]]),t("div",he,[_e,t("div",ye,[t("label",xe,[t("input",{type:"radio",name:"member",onInput:e[7]||(e[7]=d=>l.setCSCycle(!0))},null,32),g(" Yes ")]),t("label",fe,[t("input",{type:"radio",name:"member",onInput:e[8]||(e[8]=d=>l.setCSCycle(!1))},null,32),g(" No ")])])]),t("div",Se,[ke,t("div",Ce,[t("label",Te,[t("input",{type:"radio",name:"win",onInput:e[9]||(e[9]=d=>l.setWin(!0))},null,32),g(" Yes ")]),t("label",Pe,[t("input",{type:"radio",name:"win",onInput:e[10]||(e[10]=d=>l.setWin(!1))},null,32),g(" No ")])])]),$e,t("div",Ae,[De,t("div",Ne,[t("textarea",{class:"textarea",placeholder:"Special comments on this robot",id:"comments",onChange:e[11]||(e[11]=(...d)=>l.setComments&&l.setComments(...d))},null,32)])]),t("div",Ee,[t("div",Me,[t("button",{onClick:e[12]||(e[12]=d=>(l.matchPush(),l.createMatch(),this.$router.push("/"))),class:"button is-primary"},"Submit")]),we])])}const Ie=T(L,[["render",Ge]]),ze={class:"container"},We={class:"tile is-parent is-vertical is-centered card"},Fe=t("label",{class:"label is-size-6 has-text-centered mb-2"},"Auto Start Position:",-1),qe={class:"buttons tile has-addons has-text-centered"},Be={__name:"AutoStartPos",setup(a){const e=v();return(r,s)=>(h(),_("div",ze,[t("div",We,[Fe,t("div",qe,[t("button",{onClick:s[0]||(s[0]=o=>n(e).setAutoStartPos("Wall")),class:u([n(e).autoStartPos==="Wall"?"button is-primary column is-medium px-5 has-text-centered":"button is-dark column is-medium px-5 has-text-centered"])},"Wall",2),t("button",{onClick:s[1]||(s[1]=o=>n(e).setAutoStartPos("Middle")),class:u([n(e).autoStartPos==="Middle"?"button column is-medium px-5 has-text-centered":"button is-dark column is-medium px-5 has-text-centered"])},"Middle",2),t("button",{onClick:s[2]||(s[2]=o=>n(e).setAutoStartPos("Human")),class:u([n(e).autoStartPos==="Human"?"button is-danger column is-medium px-5 has-text-centered":"button is-dark column is-medium px-5 has-text-centered"])},"Human",2)])])]))}},Ve={class:"container"},He={class:"tile is-parent is-vertical is-pulled-right is-centered card"},Oe=t("label",{class:"label is-size-6 my-0 has-text-centered"},"Piece Pickup",-1),Re={__name:"AutoPickupPos",setup(a){const e=v();return(r,s)=>(h(),_("div",Ve,[t("div",He,[Oe,t("button",{class:u([n(e).autoPickupPos==="1"?"button is-medium tile is-primary has-text-centered my-1":"button is-medium tile is-dark has-text-centered my-1"]),onClick:s[0]||(s[0]=o=>n(e).setAutoPickupPos("1"))},"1 (Wall)",2),t("button",{class:u([n(e).autoPickupPos==="2"?"button is-medium tile has-text-centered my-1":"button is-medium tile is-dark has-text-centered my-1"]),onClick:s[1]||(s[1]=o=>n(e).setAutoPickupPos("2"))},"2",2),t("button",{class:u([n(e).autoPickupPos==="3"?"button is-medium tile is-warning has-text-centered my-1":"button is-medium tile is-dark has-text-centered my-1"]),onClick:s[2]||(s[2]=o=>n(e).setAutoPickupPos("3"))},"3",2),t("button",{class:u([n(e).autoPickupPos==="4"?"button is-medium tile is-danger has-text-centered my-1":"button is-medium tile is-dark has-text-centered my-1"]),onClick:s[3]||(s[3]=o=>n(e).setAutoPickupPos("4"))},"4 (Middle)",2)])]))}},Le={class:"columns is-flex is-justify-content-center",style:{"margin-top":"5%","margin-bottom":"5%"}},Ye={class:"columns"},Ze={class:"column is-one-quarter"},je={class:"tile is-parent is-vertical is-pulled-right is-centered card"},Je=t("label",{class:"label is-size-6 my-0 has-text-centered"},"Pickup Type",-1),Ke=t("label",{class:"label is-size-6 my-2 has-text-centered"},"Endgame Start Time",-1),Qe={class:"control"},Ue={class:"tile is-parent is-vertical is-pulled-right is-centered card"},Xe={class:"column box p-5"},et={class:"column is-one-quarter"},tt={class:"tile is-parent is-vertical is-pulled-left is-centered p-3 card"},st=t("label",{class:"label is-size-6 has-text-centered mb-2"},"GP Scored:",-1),nt={class:"buttons tile has-addons has-text-centered is-pulled-left"},ot={class:"button is-large is-dark column px-5 is-static"},it=t("label",{class:"label is-size-6 has-text-centered mb-2"},"GP Total Score:",-1),at={class:"card has-text-centered mb-2"},lt={class:"title is-size-10 mb-2"},dt={class:"columns"},ut=t("div",{class:"column is-one-quarter"},null,-1),rt={class:"column is-one-half"},ct=t("div",{class:"column is-one-quarter"},null,-1),pt={__name:"ScoutMatch",setup(a){const e=v();function r(){const s=document.getElementById("input2").value;console.log(s),e.setEndgameStartTime(s)}return(s,o)=>(h(),_($,null,[t("div",null,[b(A)]),t("div",Le,[t("button",{class:u([n(e).gameState==="auto"?"button has-text-centered mx-2":" button is-dark has-text-centered mx-2"]),onClick:o[0]||(o[0]=l=>n(e).setGameState("auto"))},"Auto",2),t("button",{class:u([n(e).gameState==="teleop"?"button has-text-centered mx-2":" button is-dark has-text-centered mx-2"]),onClick:o[1]||(o[1]=l=>n(e).setGameState("teleop"))},"Teleop",2),t("button",{class:u([n(e).gameState==="endgame"?"button has-text-centered mx-2":" button is-dark has-text-centered mx-2"]),onClick:o[2]||(o[2]=l=>n(e).setGameState("endgame"))},"Endgame",2)]),t("div",Ye,[t("div",Ze,[m(t("div",je,[Je,t("button",{class:u([n(e).pickupType==="Ground"?"button is-medium tile is-primary has-text-centered my-1":"button is-medium tile is-dark has-text-centered my-1"]),onClick:o[3]||(o[3]=l=>n(e).setPickupType("Ground"))},"Ground",2),t("button",{class:u([n(e).pickupType==="Sub 1"?"button is-medium tile has-text-centered my-1":"button is-medium tile is-dark has-text-centered my-1"]),onClick:o[4]||(o[4]=l=>n(e).setPickupType("Sub 1"))},"Sub 1",2),t("button",{class:u([n(e).pickupType==="Sub 2"?"button is-medium tile is-danger has-text-centered my-1":"button is-medium tile is-dark has-text-centered my-1"]),onClick:o[5]||(o[5]=l=>n(e).setPickupType("Sub 2"))},"Sub 2",2),Ke,t("div",Qe,[t("input",{class:"input",type:"text",placeholder:"0:00",id:"input2",onInput:o[6]||(o[6]=l=>r())},null,32)])],512),[[p,n(e).gameState==="teleop"]]),m(t("div",Ue,[m(b(Re,null,null,512),[[p,n(e).gameState==="auto"]])],512),[[p,n(e).gameState==="auto"]])]),t("div",Xe,[m(b(z,null,null,512),[[p,n(e).gameState=="auto"||n(e).gameState==="teleop"]]),m(b(Ie,null,null,512),[[p,n(e).gameState=="endgame"]])]),t("div",et,[m(t("div",tt,[st,t("div",nt,[t("button",ot,f(n(e).gpTotal),1),t("button",{onClick:o[7]||(o[7]=l=>n(e).gpRemove()),class:"button is-large is-dark column px-5"},"-")]),it,t("div",at,[t("p",lt,f(n(e).gpTotalScore),1)]),m(b(B,null,null,512),[[p,n(e).gameState=="auto"]]),m(b(R,null,null,512),[[p,n(e).gameState=="teleop"]])],512),[[p,n(e).gameState=="auto"||n(e).gameState==="teleop"]])])]),t("div",dt,[ut,t("div",rt,[m(b(Be,{class:"is-centered"},null,512),[[p,n(e).gameState=="auto"]])]),ct])],64))}};export{pt as default};