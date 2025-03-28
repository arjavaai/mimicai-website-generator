import React, { SetStateAction } from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { items } from '@/components/website/constant';

const article = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      delayChildren: 0.2,
      staggerChildren: 0.1, // Stagger duration for children
    },
  },
};

type item = {
  id: number;
  url: string;
  title: string;
  description: string;
  tags?: string[];
};
interface GaleryProps {
  items: item[];
  setIndex: React.Dispatch<SetStateAction<number>>;
  index: number | undefined;
}
function Gallery({ items, setIndex, index }: GaleryProps) {
  return (
    <>
      {/* Desktop Gallery */}
      <div className='hidden md:flex w-full max-w-6xl mx-auto gap-2 justify-center pb-20 pt-10'>
        {items.slice(0, 5).map((item: item, i: number) => {
          return (
            <motion.div
              whileTap={{ scale: 0.95 }}
              className={`rounded-xl relative ${
                index === i ? 'w-[450px]' : 'w-[80px]'
              } h-[400px] flex-shrink-0 transition-[width] ease-in-out duration-500 origin-center bg-black border border-zinc-800 overflow-hidden`}
              key={i}
              onClick={() => {
                setIndex(i);
              }}
              onMouseEnter={() => {
                setIndex(i);
              }}
            >
              <motion.img
                src={item?.url}
                alt={item?.title}
                className={`${
                  index === i ? 'opacity-100' : 'opacity-50'
                } w-full rounded-xl h-full object-cover`}
              />
              {/* Gradient overlay for all items */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 rounded-xl"></div>
              <AnimatePresence mode='wait'>
                {index === i && (
                  <motion.article
                    variants={article}
                    initial='hidden'
                    animate='show'
                    className='absolute flex rounded-xl flex-col justify-end h-full w-full top-0 p-6 space-y-2 overflow-hidden'
                  >
                    <motion.h1
                      variants={article}
                      className='text-3xl font-semibold text-white'
                    >
                      {item?.title}
                    </motion.h1>
                    <motion.p variants={article} className='text-white/80 text-lg'>
                      {item?.description}
                    </motion.p>
                  </motion.article>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Gallery */}
      <div className='md:hidden w-full px-4 mx-auto pb-16 pt-6'>
        <div className='flex flex-col gap-6'>
          {items.slice(0, 5).map((item: item, i: number) => {
            return (
              <motion.div
                whileTap={{ scale: 0.98 }}
                className='rounded-xl relative h-[250px] bg-black border border-zinc-800 overflow-hidden'
                key={i}
              >
                <motion.img
                  src={item?.url}
                  alt={item?.title}
                  className='w-full rounded-xl h-full object-cover'
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 rounded-xl"></div>
                <motion.article
                  className='absolute flex rounded-xl flex-col justify-end h-full w-full top-0 p-5 space-y-2 overflow-hidden'
                >
                  <h1 className='text-2xl font-semibold text-white'>
                    {item?.title}
                  </h1>
                  <p className='text-white/80 text-sm'>
                    {item?.description}
                  </p>
                </motion.article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default function index() {
  const [index, setIndex] = useState(2);

  return (
    <div className='relative bg-black text-white'>
      <div className="w-full py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start">
            <div className="border-l-4 border-yellow-500 pl-4 mb-4 md:mb-6">
              <p className="text-lg font-medium">WE'VE GOT YOU COVERED</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">We Build. <span className="italic font-light">With purpose.</span></h1>
          </div>
        </div>
      </div>
      <Gallery items={items} index={index} setIndex={setIndex} />
    </div>
  );
}
