"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import CanvasRevealEffect  from "@/components/ui/canvas-reveal-effect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Understand & Break Down Requirements"
          icon={<AceternityIcon order="Phase 1" />}
          des="Start by analyzing the problem or feature request. Break it down into smaller components, define user needs, and choose the right tools or architecture to solve it effectively."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Build, Iterate & Collaborate"
          icon={<AceternityIcon order="Phase 2" />}
          des="Write clean, maintainable code following best practices. Commit early and often, collaborate via Git, and adapt to feedback from team members and mentors."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Test, Optimize & Deliver"
          icon={<AceternityIcon order="Phase 3" />}
          des="Test thoroughly, handle edge cases, optimize for performance, and deploy reliably. Continuously monitor and iterate post-launch based on real usage or feedback."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
    >
      <Icon className="absolute h-10 w-10 opacity-30 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-10 w-10 opacity-30 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-10 w-10 opacity-30 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-10 w-10 opacity-30 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] 
        translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 
        min-w-40 mx-auto flex items-center justify-center "
        >
          {icon}
        </div>
        <h2
          className="dark:text-white text-3xl text-center opacity-0 group-hover/canvas-card:opacity-100 
        relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white 
        group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
       bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
      justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
