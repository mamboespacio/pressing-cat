import { exit } from "process";

export const fadeUp = {
  initial: {
    top: "10px",
    opacity: 0
  },
  active: {
    top: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
  },
  exit: {
    top: "-10px",
    opacity: 0
  }
}