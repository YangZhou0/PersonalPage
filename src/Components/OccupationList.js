import React, { useState, useEffect, useRef } from 'react';


const messages = [
  'full-stack developer',
  'veteran',
  'Computer Science student',
  'adventurist',
  'optimist',
  'lifelong learner'
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const OccupationList = () => {
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(0); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(() => {
    let newIdx = idx;
    let newChar = char;
    if (char - hold >= messages[idx].length) {
      newIdx += 1;
      newChar = 0;
    }
    if (newIdx === messages.length) {
      // setIsActive(false);
      updateIter(0)
      updateChar(0)
    } else {
      updateMessage(messages[newIdx].slice(0, newChar));
      updateIter(newIdx);
      updateChar(newChar + 1);
    }
  }, isActive ? delay : null);

  return (
    <span
      className="inline-container"
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
    >
      <a href='https://www.linkedin.com/in/yangzhou1/' target="_blank">
        <span>{message}</span>
      </a>
    </span>
  );
};

export default OccupationList;
