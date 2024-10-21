const REST = { pathLength: 0, opacity: 0 };
const VISIBLE = { pathLength: 1, opacity: 1 };

const transition = (delay: number) => ({
  pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
  opacity: { delay, duration: 0.01 },
});

const animate = (i: number) => {
  const delay = 1 + i * 0.5;
  return {
    ...VISIBLE,
    transition: transition(delay),
  };
};

const drawVariants = {
  rest: REST,
  animate: animate,
};

export { drawVariants };
