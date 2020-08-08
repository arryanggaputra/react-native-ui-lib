(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Gq3Q:function(e,t,a){e.exports=a.p+"static/rtl-48a5d66b1a4e15afb6d91ef1e4c5f8bb.png"},Psin:function(e,t,a){e.exports=a.p+"static/actionSheet-e0fb86d96546c2af638d5d75b93f9ab6.png"},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("+ZDr"),l=a.n(o),c=(a("pxef"),a("azua")),i=a.n(c),s=a("mBOw"),m=a.n(s),u=a("Psin"),p=a.n(u),d=a("Gq3Q"),f=a.n(d),g=a("YFfK"),h=a.n(g),b=function(){return r.a.createElement("div",{className:"platforms-section"},r.a.createElement("div",null,r.a.createElement("img",{height:"500",src:m.a,style:{zIndex:10}}),r.a.createElement("img",{height:"400",src:p.a})),r.a.createElement("div",null,r.a.createElement("h1",null,"A Cross-Platform Components Library"),r.a.createElement("p",null,"Building a cross-platform app can be time consuming especially when one needs to find solutions that suit each platform. While React Native solve this issue, still, some components originated from one platform and don't exist in the other."),r.a.createElement("p",null,r.a.createElement("b",null,"ActionSheet")," is a good example of an iOS component that just does not exist on Android."," ",r.a.createElement("b",null,"DatePicker")," has a different API and behavior for each platform instead of a unified component."),r.a.createElement("p",null,"The UILIB aims to solve that.")))},E=function(){return r.a.createElement("div",{className:"toolset-section"},r.a.createElement("h1",null,"Toolset for Building Amazing Apps with No Effort"),r.a.createElement("p",null,r.a.createElement("h3",null,"Step 1")," Define your app base foundation. Things like colors, typography and spacings."),r.a.createElement("div",{className:"code-examples"},r.a.createElement("code",null,"import {Colors} from 'react-native-ui-lib';\n\nColors.loadColors({\n  primaryColor: '#2364AA',\n  secondaryColor: '#81C3D7',\n  textColor: '#221D23',\n  errorColor: '#E63B2E',\n  successColor: '#ADC76F',\n  warnColor: '#FF963C'\n});"),r.a.createElement("code",null,"import {Typography} from 'react-native-ui-lib';\n\nTypography.loadTypographies({\n  heading: {fontSize: 36, fontWeight: '600'},\n  subheading: {fontSize: 28, fontWeight: '500'},\n  body: {fontSize: 18, fontWeight: '400'} \n});"),r.a.createElement("code",null,"import {Spacings} from 'react-native-ui-lib';\n\nSpacings.loadSpacings({\n  page: 20,\n  card: 12,\n  gridGutter: 16 \n});")),r.a.createElement("p",null,r.a.createElement("h3",null,"Step 2")," Set a theme for your components."),r.a.createElement("div",{className:"code-examples"},r.a.createElement("code",null,"import {ThemeManager} from 'react-native-ui-lib';\n\n// with plain object \nThemeManager.setComponentTheme('Card', {\n  borderRadius: 8,\n  activeOpacity: 0.9 \n});"),r.a.createElement("code",null,"// with a dynamic function\nThemeManager.setComponentTheme('Button', (props, context) => {\n  // 'square' is not an original Button prop, but a custom prop that can\n  // be used to create different variations of buttons in your app\n  if (props.square) {\n    return {\n      borderRadius: 0\n    };\n  }\n});")),r.a.createElement("p",null,r.a.createElement("h3",null,"Step 3")," Build your app. With our auto-generated modifiers, it's a matter of minutes till you create your first beautiful screen."),r.a.createElement("div",{className:"code-examples"},r.a.createElement("code",null,"import React, {Component} from 'react';\nimport {View, Text, Card, Button} from 'react-native-ui-lib';\n\nclass MyScreen extends Component {\n  render() {\n    return (\n      <View flex padding-page>\n        <Text heading marginB-s4>My Screen</Text>\n        <Card height={100} center padding-card marginB-s4>\n          <Text body>This is an example card </Text>\n        </Card>\n        \n        <Button label=\"Button\" body bg-primaryColor square></Button>\n      </View>\n    );\n  }\n}")))},v=function(){return r.a.createElement("div",{className:"components-section"},r.a.createElement("h2",null,"Over than 60 Beautiful Components"),r.a.createElement("p",null,"Basic components like ",r.a.createElement("b",null,"Button"),", ",r.a.createElement("b",null,"Avatar")," and ",r.a.createElement("b",null,"Card")," and more sophisticated ones like ",r.a.createElement("b",null,"Hints"),", ",r.a.createElement("b",null,"ColorPicker")," and ",r.a.createElement("b",null,"Drawer")),r.a.createElement("div",{className:"image-examples"},r.a.createElement("img",{src:"https://user-images.githubusercontent.com/1780255/72094962-3044b280-3320-11ea-8e41-aa83743bafb9.gif"}),r.a.createElement("img",{src:"https://user-images.githubusercontent.com/1780255/72094961-3044b280-3320-11ea-95e2-9aa745c8b07d.gif"}),r.a.createElement("img",{src:"https://user-images.githubusercontent.com/1780255/72094959-2fac1c00-3320-11ea-952b-53f864fd7ea4.gif"}),r.a.createElement("img",{src:"https://user-images.githubusercontent.com/1780255/72094958-2fac1c00-3320-11ea-8f67-9d759cfa4ae1.gif"}),r.a.createElement("img",{src:"https://user-images.githubusercontent.com/1780255/72094957-2fac1c00-3320-11ea-86a6-e47cf78093ec.gif"}),r.a.createElement("img",{src:"https://user-images.githubusercontent.com/1780255/72094955-2f138580-3320-11ea-811e-a808d90e7ff0.gif"})))},y=function(){return r.a.createElement("div",{className:"support-section"},r.a.createElement("div",null,r.a.createElement("h2",null,"RTL and Accessibility in Mind"),r.a.createElement("p",null,"We provide a full, out-of-the-box support to RTL and Accessibility")),r.a.createElement("div",null,r.a.createElement("img",{src:h.a,height:"500"}),r.a.createElement("img",{src:f.a,height:"500"})))};t.default=function(e){return r.a.createElement("div",{className:"main-page"},r.a.createElement("div",{className:"main-section"},r.a.createElement("div",{className:"logo-box"},r.a.createElement("img",{className:"logo",src:i.a,alt:"main-logo"}),r.a.createElement(l.a,{className:"docs-button",to:"/getting-started/setup"},"Enter Docs"),r.a.createElement("p",{className:"description"},"UI Toolset & Components Library for React Native"),r.a.createElement("div",{className:"qr"},r.a.createElement("img",{src:"https://user-images.githubusercontent.com/1780255/76164023-f2171400-6153-11ea-962d-d57b64a08a80.png"}),r.a.createElement("a",{href:"https://snack.expo.io/@ethanshar/rnuilib_snack",target:"_blank",rel:"noopener noreferrer"},"Or try our demo on Expo-Snack")))),r.a.createElement(b,null),r.a.createElement(E,null),r.a.createElement(v,null),r.a.createElement(y,null))}},YFfK:function(e,t,a){e.exports=a.p+"static/accessibility-1cc0827012a0abcc8db0447d3fd7ed7f.gif"},azua:function(e,t,a){e.exports=a.p+"static/logo_big-9655b3b96aaf476407fc837b906f1365.png"},mBOw:function(e,t,a){e.exports=a.p+"static/datepicker-43ca00b1dbf6a0a4fe6c0f20cd85e0cb.png"},pxef:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-4bd3fefa874a6afcad92.js.map