import React from "react";
import Tab from ".";
import WhiteSpace from "../Blank";

/**
 * demo:一般场景
 */
const Tabs = [{ title: "First" }, { title: "Second" }, { title: "Third" }];

const Normal = () => (
  <Tab tabs={Tabs}>
    <div style={{ height: 100, backgroundColor: "white" }}>tab1</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab2</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab3</div>
  </Tab>
);

/**
 * demo: 修改标题颜色
 */
const TintColor = () => (
  <Tab tabs={Tabs} tintColor="green">
    <div style={{ height: 100, backgroundColor: "white" }}>tab1</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab2</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab3</div>
  </Tab>
);

/**
 * demo:超过 3 个 tab
 */
const Tabs5 = [
  { title: "First" },
  { title: "Second" },
  { title: "Third" },
  { title: "Forth" },
  { title: "Fifth" }
];

const Over3Tabs = () => (
  <Tab tabs={Tabs5}>
    <div style={{ height: 100, backgroundColor: "white" }}>tab1</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab2</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab3</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab4</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab5</div>
  </Tab>
);

/**
 * demo:没有动画
 */
const NoAnimation = () => (
  <Tab tabs={Tabs5} animation={false}>
    <div style={{ height: 100, backgroundColor: "white" }}>tab1</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab2</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab3</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab4</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab5</div>
  </Tab>
);

/**
 * demo:可以左右滑动手势
 */
const Swipeable = () => (
  <Tab tabs={Tabs5} swipeable={true}>
    <div style={{ height: 100, backgroundColor: "white" }}>tab1</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab2</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab3</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab4</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab5</div>
  </Tab>
);
