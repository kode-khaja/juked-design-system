import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DxP0NviS.js";function n({active:e=`home`,onChange:t}){return(0,r.jsx)(`nav`,{className:`tab-bar`,children:i.map(n=>(0,r.jsxs)(`button`,{className:`tab-item ${e===n.id?`tab-item--active`:``}`,onClick:()=>t?.(n.id),children:[(0,r.jsx)(`div`,{className:`tab-icon`}),(0,r.jsx)(`span`,{className:`tab-label`,children:n.label})]},n.id))})}var r,i,a=e((()=>{r=t(),i=[{label:`Home`,id:`home`},{label:`Search`,id:`search`},{label:`Log`,id:`log`},{label:`Social`,id:`social`},{label:`Profile`,id:`profile`}],n.__docgenInfo={description:``,methods:[],displayName:`TabBar`,props:{active:{required:!1,tsType:{name:`string`},description:`The id of the currently active tab`,defaultValue:{value:`'home'`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:`Callback fired when a tab is clicked, returns the tab id`}}}})),o=e((()=>{})),s,c,l,u;e((()=>{a(),o(),s={title:`Juked/TabBar`,component:n,tags:[`autodocs`]},c={args:{active:`home`}},l={args:{active:`search`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    active: 'home'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    active: 'search'
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`SearchActive`]}))();export{c as Default,l as SearchActive,u as __namedExportsOrder,s as default};