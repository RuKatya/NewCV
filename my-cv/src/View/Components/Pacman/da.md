const pacmanElement: any = document.querySelector(".pacman");
// const [pageScroll, setPageScroll] = useState(window.scrollY);
// const [screenWidth, setScreenWidth] = useState(window.innerWidth);
// const [btn, setBtn] = useState("left");
const [top, setTop] = useState(3);
const [left, setLeft] = useState(3);
const [right, setRight] = useState(3);
const [bottom, setBottom] = useState(3);
const [pacmanPlace, setPacmanPlace] = useState(
pacmanElement?.getBoundingClientRect()
);
// let pacmanPosition =
// const [moveFlag, setMoveFlag] = useState(0);

useEffect(() => {
const changeScroll = (e: any) => {
// console.log(e);
// console.log(`e.target.value`);
// console.log(e.target.value);
// switch (e.code || e.target.value) {
// case "ArrowRight" || "right":
// console.log(`ArrowRight`);
// break;
// default:
// break;
// }
if (e.code === "ArrowRight") {
// console.log(`ArrowRight`);
setRight(right + 2);
} else if (e.code === "ArrowLeft") {
// console.log(`ArrowLeft`);
setLeft(left + 2);
} else if (e.code === "ArrowDown") {
// console.log(`ArrowDown`);
setBottom(bottom + 2);
} else if (e.code === "ArrowUp") {
// console.log(`ArrowUp`);
setTop(top + 2);
// pacmanElement.style.bottom = "none";
}

      // setPacmanPlace(pacmanElement?.getBoundingClientRect());
      // setPageScroll(window.scrollY);
      // setLeft(left + 1);
      // setTop(top + 1);
      // let pacmanPosition = pacmanElement?.getBoundingClientRect();
      // console.log(`rigth `);
      // console.log(pacmanPosition);
      // console.log(`page width ${screenWidth}`);
      // if (pacmanPosition?.x > screenWidth - 400) {
      //   console.log(`more`);
      // }
    };

    // console.log(pageScroll);
    // console.log(pacmanPosition);
    // console.log(pacmanPosition);
    window.addEventListener("keydown", changeScroll);
    window.addEventListener("click", changeScroll);
    setPacmanPlace(pacmanElement?.getBoundingClientRect());

}, [pacmanPlace]);

// console.log(btn);
// console.log("scroll");
// console.log(window.scrollY);

<!-- /////////////////////////////////////// -->

const pacmanElement = useRef<any>(null);
// const [screenWidth, setScreenWidth] = useState(window.innerWidth);
// // const [pacmanPlace, setPacmanPlace] = useState(
// // pacmanElement.getBoundingClientRect()
// // );

// useEffect(() => {
// const movePacman = (e: any) => {
// console.log(e);
// if (e.code === "ArrowRight") {
// console.log(pacmanElement);
// if (pacmanElement.current !== null) {
// pacmanElement.current.classList.remove("moveLeft");
// pacmanElement.current.classList.add("moveRight");
// // console.log(pacmanElement.current.getBoundingClientRect());
// // setTimeout(() => {
// // pacmanElement.current.classList.remove("moveRight");
// // console.log("da");
// // }, 5000);
// }
// } else if (e.code === "ArrowLeft") {
// pacmanElement.current.classList.remove("moveRight");
// pacmanElement.current.classList.add("moveLeft");
// } else if (e.code === "ArrowDown") {
// } else if (e.code === "ArrowUp") {
// }
// };

// window.addEventListener("keydown", movePacman);
// }, []);

<img
        ref={pacmanElement}
        src="data:image/png;base64,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"
        alt="pacman"
        className="pacman"
        id="pacman"
      />
