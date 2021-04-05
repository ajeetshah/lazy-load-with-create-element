import React, { Component, createElement, lazy, Suspense } from "react";

const Page2 = lazy(() => import("./Page2"));
const Page3 = lazy(() => import("./Page3"));

const pages = [Page2, Page3];
export default class ReactElement extends Component {
  render() {
    //in any method in the react component
    let s = [Page2];
    let ss = [Page2, Page3];
    let sss = pages[0];
    let r = createElement(s[0]); // this works
    let rr = createElement(ss[0]); // does not work
    let rrr = createElement(sss); // does not work
    return (
      <>
        <h2>ReactElement</h2>
        <Suspense fallback="loading...">
          {r} {rr} {rrr}
        </Suspense>
      </>
    );
  }
}
