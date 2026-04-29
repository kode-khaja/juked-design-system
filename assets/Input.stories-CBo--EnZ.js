import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DxP0NviS.js";function n({label:e,placeholder:t=`Placeholder Text`,state:n=`default`,errorMessage:i=`This field is required`}){return(0,r.jsxs)(`div`,{className:`input-wrapper`,children:[(0,r.jsx)(`label`,{className:`input-label`,children:e}),(0,r.jsx)(`input`,{className:`input-field input-field--${n}`,placeholder:t,disabled:n===`disabled`}),n===`error`&&(0,r.jsx)(`span`,{className:`input-error`,children:i})]})}var r,i=e((()=>{r=t(),n.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{label:{required:!0,tsType:{name:`string`},description:`The label displayed above the input`},state:{required:!1,tsType:{name:`union`,raw:`'default' | 'focused' | 'error' | 'disabled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'focused'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'disabled'`}]},description:`Controls the visual state of the input`,defaultValue:{value:`'default'`,computed:!1}},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text shown when input is empty`,defaultValue:{value:`'Placeholder Text'`,computed:!1}},errorMessage:{required:!1,tsType:{name:`string`},description:`Error message shown below input when state is error`,defaultValue:{value:`'This field is required'`,computed:!1}}}}})),a=e((()=>{})),o,s,c,l,u,d;e((()=>{i(),a(),o={title:`Juked/Input`,component:n,tags:[`autodocs`]},s={args:{label:`Label`,state:`default`,placeholder:`Placeholder Text`}},c={args:{label:`Label`,state:`focused`,placeholder:`Placeholder Text`}},l={args:{label:`Label`,state:`error`,placeholder:`Placeholder Text`,errorMessage:`This field is required`}},u={args:{label:`Label`,state:`disabled`,placeholder:`Placeholder Text`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    state: 'default',
    placeholder: 'Placeholder Text'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    state: 'focused',
    placeholder: 'Placeholder Text'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    state: 'error',
    placeholder: 'Placeholder Text',
    errorMessage: 'This field is required'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    state: 'disabled',
    placeholder: 'Placeholder Text'
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`Focused`,`Error`,`Disabled`]}))();export{s as Default,u as Disabled,l as Error,c as Focused,d as __namedExportsOrder,o as default};