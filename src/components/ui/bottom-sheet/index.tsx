import {
  animate,
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { ReactNode } from "react";
import { Dialog, Modal, ModalOverlay } from "react-aria-components";

// Wrap React Aria modal components so they support framer-motion values.
const MotionModal = motion(Modal);
const MotionModalOverlay = motion(ModalOverlay);

const inertiaTransition = {
  type: "inertia" as const,
  bounceStiffness: 300,
  bounceDamping: 40,
  timeConstant: 300,
};

const staticTransition = {
  duration: 0.5,
  ease: [0.32, 0.72, 0, 1],
};

const SHEET_MARGIN = 34;
const SHEET_RADIUS = 24;

const root = document.body.firstChild as HTMLElement;

interface Props {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: () => void;
}

export default function BottomSheet({ isOpen, setIsOpen, children }: Props) {
  const h = window.innerHeight - SHEET_MARGIN;
  const y = useMotionValue(h);
  const bgOpacity = useTransform(y, [0, h], [0.4, 0]);
  const bg = useMotionTemplate`rgba(0, 0, 0, ${bgOpacity})`;

  // Scale the body down and adjust the border radius when the sheet is open.
  const bodyScale = useTransform(y, [0, h], [(window.innerWidth - SHEET_MARGIN) / window.innerWidth, 1]);
  const bodyTranslate = useTransform(y, [0, h], [SHEET_MARGIN - SHEET_RADIUS, 0]);
  const bodyBorderRadius = useTransform(y, [0, h], [SHEET_RADIUS, 0]);

  useMotionValueEvent(bodyScale, "change", (v) => (root.style.scale = `${v}`));
  useMotionValueEvent(bodyTranslate, "change", (v) => (root.style.translate = `0 ${v}px`));
  useMotionValueEvent(bodyBorderRadius, "change", (v) => (root.style.borderRadius = `${v}px`));

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionModalOverlay
          // Force the modal to be open when AnimatePresence renders it.
          isOpen
          onOpenChange={setIsOpen}
          className="fixed inset-0 z-10"
          style={{ backgroundColor: bg as never }}
        >
          <MotionModal
            className="bg-secondary-light dark:bg-secondary-dark absolute bottom-0 w-full rounded-t-xl shadow-lg will-change-transform"
            initial={{ y: h }}
            animate={{ y: 0 }}
            exit={{ y: h }}
            transition={staticTransition}
            style={{
              y,
              // top: "0px",
              // Extra padding at the bottom to account for rubber band scrolling.
              // paddingBottom: window.screen.height,
            }}
            drag="y"
            dragConstraints={{ top: 0 }}
            onDragEnd={(_, { offset, velocity }) => {
              if (offset.y > window.innerHeight * 0.75 || velocity.y > 10) {
                setIsOpen();
              } else {
                animate(y, 0, { ...inertiaTransition, min: 0, max: 0 });
              }
            }}
          >
            {/* drag affordance */}
            {/* <div className="mx-auto w-12 mt-2 h-1.5 rounded-full bg-gray-400" /> */}
            <Dialog className="outline-none bg-red-500 max-h-fit">{children}</Dialog>
          </MotionModal>
        </MotionModalOverlay>
      )}
    </AnimatePresence>
  );
}
