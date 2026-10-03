'use client';
 
import { useState } from 'react';
import clsx from 'clsx';

export default function SelectButton(props) {
  const [isSelected, setIsSelected] = useState(false);
 
  function handleClick() {
    setIsSelected(!isSelected);
  }
 
  return (
    <div className="flex items-center gap-3">
      <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => props.toggle()}>valider</button>
    </div>
  );
}