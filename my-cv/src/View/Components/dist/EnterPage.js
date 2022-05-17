"use strict";
exports.__esModule = true;
var EnterPage = function () {
    // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    // const [touch, setTouch] = useState(false);
    // const colors: Array<string> = [
    //   "rgb(204, 109, 109)",
    //   "rgb(204, 198, 109)",
    //   "rgb(117, 204, 109)",
    //   "rgb(109, 185, 204)",
    //   "rgb(109, 96, 223)",
    //   "rgb(162, 96, 223)",
    //   "rgb(223, 96, 223)",
    // ];
    // useEffect(() => {
    //   const changeWidth = () => {
    //     setScreenWidth(window.innerWidth);
    //   };
    //   window.addEventListener("resize", changeWidth);
    // }, []);
    // const SQUARES_NUMBER: number = 2 * screenWidth;
    // useEffect(() => {
    //   for (let i = 0; i < SQUARES_NUMBER; i++) {
    //     const board = document.querySelector("#board");
    //     const square = document.createElement("div");
    //     square.classList.add("square");
    //     square.addEventListener("mouseover", () => {
    //       setColor(square);
    //     });
    //     square.addEventListener("mouseleave", () => {
    //       removeColor(square);
    //     });
    //     square.addEventListener("touchstart", () => {
    //       setTouch(true);
    //     });
    //     square.addEventListener("touchend", () => {
    //       setTouch(false);
    //     });
    //     square.addEventListener("touchmove", (e: TouchEvent) => {
    //       const target = e.target as Element;
    //       console.log(target.classList[0]);
    //       if (touch === true) {
    //         setColor(target.classList[0]);
    //       }
    //     });
    //     board?.append(square);
    //   }
    //   function setColor(element: any) {
    //     const color = getRandomColor();
    //     element.style.backgroundColor = color;
    //     element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    //   }
    //   function removeColor(element: any) {
    //     const color = getRandomColor();
    //     element.style.backgroundColor = "black";
    //     element.style.boxShadow = `0 0 2px 3px ${color}`;
    //   }
    //   function getRandomColor() {
    //     const random = Math.floor(Math.random() * colors.length);
    //     return colors[random];
    //   }
    // }, []);
    // const first = document.querySelector("#first");
    // // console.log(first);
    return (React.createElement("div", { className: "enterPage" },
        React.createElement("div", { className: "enterPage__container", id: "board" }),
        React.createElement("div", { className: "enterPage__greetings" },
            React.createElement("p", { id: "first" }, "Hello, I'm Katya Rukosuev."),
            React.createElement("p", null, "I'm a full-stack web developer."))));
};
exports["default"] = EnterPage;
