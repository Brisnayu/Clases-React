import "./App.css";
// import BasicUseMemo from "./components/BasicUseMemo";
import CodePost from "./components/CodePost";

const posts = [
  {
      slug: "html-desde-0",
      date: "Fri Oct 06 2023 10:45:00 GMT+0200 (Central European Summer Time)",
      data: "lorem ipsum"
  },
  {
      slug: "css-desde-0",
      date: "Thu Feb 17 2022 10:15:00 GMT+0200 (Central European Summer Time)",
      data: "lorem ipsum"
  },
  {
      slug: "javascript-desde-0",
      date: "Tue Aug 23 2022 13:21:00 GMT+0200 (Central European Summer Time)",
      data: "lorem ipsum"
  },
  {
      slug: "react-desde-0",
      date: "Tue Aug 29 2022 13:21:00 GMT+0200 (Central European Summer Time)",
      data: "lorem ipsum"
  },
  {
      slug: "node-desde-0",
      date: "Tue Feb 12 2022 13:20:00 GMT+0200 (Central European Summer Time)",
      data: "lorem ipsum"
  },
]


function App() {
  return (
    <>
      {/* <BasicUseMemo /> */}
      <CodePost posts={posts}/>
    </>
  );
}

export default App;
