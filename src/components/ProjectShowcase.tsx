import React, { SetStateAction } from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { items } from '@/components/website/constant';

const article = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      staggerChildren: 0.1,
    },
  },
};

interface item {
  id: number;
  url: string;
  title: string;
  description: string;
  tags?: string[];
  buttonText: string;
}

interface GaleryProps {
  items: item[];
  setIndex: React.Dispatch<SetStateAction<number>>;
  index: number | undefined;
}

function Gallery({ items, setIndex, index }: GaleryProps) {
  return (
    <>
      {/* Desktop Gallery */}
      <div className='hidden md:flex w-full max-w-6xl mx-auto gap-4 justify-center pb-20 pt-10'>
        {items.slice(0, 5).map((item: item, i: number) => {
          return (
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`rounded-xl relative ${
                index === i ? 'w-[450px]' : 'w-[90px]'
              } h-[450px] flex-shrink-0 transition-all ease-in-out duration-500 origin-center border overflow-hidden shadow-xl ${
                index === i 
                  ? 'border-[#e86142]/40 bg-gradient-to-b from-zinc-900 to-black' 
                  : 'border-[#e86142]/20 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black'
              }`}
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
                  index === i ? 'opacity-100 scale-105' : 'opacity-70 brightness-110 contrast-110 scale-100'
                } w-full rounded-xl h-full object-cover transition-all duration-700`}
              />
              
              {/* Gradient overlay with coral accent for expanded item */}
              <div 
                className={`absolute inset-0 rounded-xl ${
                  index === i 
                    ? 'bg-gradient-to-t from-black via-black/80 to-transparent' 
                    : 'bg-gradient-to-t from-black/90 via-black/50 to-transparent'
                }`}
              >
                {/* Coral line accent for all items */}
                <div className={`absolute bottom-0 left-0 h-1 w-full ${
                  index === i 
                    ? 'bg-gradient-to-r from-[#e86142] to-[#ef7857]' 
                    : 'bg-gradient-to-r from-[#e86142]/40 to-[#ef7857]/40'
                }`}></div>

                {/* Title for collapsed cards */}
                {index !== i && (
                  <div className="absolute bottom-16 left-0 w-full flex justify-center">
                    <span className="text-white/90 text-sm font-medium rotate-90 origin-center whitespace-nowrap transform translate-x-[3px]">
                      {item.title}
                    </span>
                  </div>
                )}
              </div>
              
              <AnimatePresence mode='wait'>
                {index === i && (
                  <motion.article
                    variants={article}
                    initial='hidden'
                    animate='show'
                    className='absolute flex rounded-xl flex-col justify-end h-full w-full top-0 p-8 space-y-3 overflow-hidden'
                  >
                    <motion.div variants={article} className="flex gap-2 mb-1">
                      {item.tags?.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs rounded bg-[#e86142]/20 text-[#ef7857]">
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                    <motion.h1
                      variants={article}
                      className='text-3xl font-semibold text-white'
                    >
                      {item?.title}
                    </motion.h1>
                    <motion.p
                      variants={article}
                      className='text-base text-zinc-400'
                    >
                      {item?.description}
                    </motion.p>
                    <motion.button
                      variants={article}
                      className="mt-4 w-fit px-4 py-2 bg-gradient-to-r from-[#e86142] to-[#ef7857] rounded-full text-white text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-1"
                    >
                      {item.buttonText} <span className="ml-1">→</span>
                    </motion.button>
                  </motion.article>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Gallery */}
      <div className='flex md:hidden flex-col gap-4 w-full px-4 pb-10'>
        {items.slice(0, 5).map((item: item, i: number) => {
          return (
            <motion.div
              whileTap={{ scale: 0.98 }}
              className='relative w-full h-[180px] flex-shrink-0 rounded-xl border border-[#e86142]/30 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black overflow-hidden shadow-lg'
              key={i}
            >
              <img
                src={item?.url}
                alt={item?.title}
                className='w-full h-full object-cover rounded-xl opacity-80 brightness-110 contrast-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 rounded-xl'></div>
              <div className='absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#e86142] to-[#ef7857]'></div>
              <article className='absolute flex flex-col justify-end h-full w-full top-0 p-6 space-y-2'>
                <h1 className='text-xl font-semibold text-white'>
                  {item?.title}
                </h1>
                <p className='text-sm text-zinc-400'>{item?.description}</p>
              </article>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default function index() {
  const [index, setIndex] = useState(2);

  return (
    <div id="services" className='relative bg-gradient-to-b from-zinc-900 to-black text-white'>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(232,97,66,0.08),transparent_40%)]"></div>
      <div className="w-full py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-7xl mx-auto">
            <div className="flex items-start mb-3">
              <div className="w-1 h-6 bg-[#e86142] mr-3 mt-1"></div>
              <p className="text-lg font-medium">WE'VE GOT YOU COVERED</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">We Build. <span className="italic font-light text-[#e86142]"> with Purpose </span></h1>
          </div>
        </div>
        <Gallery items={items} index={index} setIndex={setIndex} />
      </div>
    </div>
  );
}
