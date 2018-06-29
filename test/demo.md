
### <br/>  demo:一般场景<br/> 
```js
const Tabs = [{ title: "First" }, { title: "Second" }, { title: "Third" }];
const Normal = () => (
  <Tab tabs={Tabs}>
    <div style={{ height: 100, backgroundColor: "white" }}>tab1</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab2</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab3</div>
  </Tab>
);

```


### <br/>  demo: 修改标题颜色<br/> 
```js
const TintColor = () => (
  <Tab tabs={Tabs} tintColor="green">
    <div style={{ height: 100, backgroundColor: "white" }}>tab1</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab2</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab3</div>
  </Tab>
);

```


### <br/>  demo:超过 3 个 tab<br/> 
```js
const Tabs5 = [{ title: "First" }, { title: "Second" }, { title: "Third" }, { title: "Forth" }, { title: "Fifth" }];
const Over3Tabs = () => (
  <Tab tabs={Tabs5}>
    <div style={{ height: 100, backgroundColor: "white" }}>tab1</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab2</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab3</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab4</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab5</div>
  </Tab>
);

```


### <br/>  demo:没有动画<br/> 
```js
const NoAnimation = () => (
  <Tab tabs={Tabs5} animation={false}>
    <div style={{ height: 100, backgroundColor: "white" }}>tab1</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab2</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab3</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab4</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab5</div>
  </Tab>
);

```


### <br/>  demo:可以左右滑动手势<br/> 
```js
const Swipeable = () => (
  <Tab tabs={Tabs5} swipeable={true}>
    <div style={{ height: 100, backgroundColor: "white" }}>tab1</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab2</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab3</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab4</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab5</div>
  </Tab>
);

```
