'use client';

import { useState } from 'react';
import SelectButton from '@/app/ui/select-button';
import { useRouter } from 'next/navigation';
import ValidateButton from '@/app/ui/validate-button';
import { questions_detection } from '@/app/lib/questions';
type Question = {
  id: string;
  question: string;
  answer: string[];
  explanation?: string;
  options?: string[];
};

export default function QuizClient({ question }: { question: Question }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  function handleClick(id: string) {
    setSelected(prev => prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]);
  }

  function areArraysEqual(a: string[], b: string[]) {
    if (a.length !== b.length) return false;
    const sortedA = [...a].sort();
    const sortedB = [...b].sort();
    return sortedA.every((val, i) => val === sortedB[i]);
  }

  function goToNextQuestion() {
    const nextId = (parseInt(question.id) + 1).toString();
    const nextExists = questions_detection.some(q => q.id === nextId);

    if (nextExists) {
      router.push(`/dashboard/detecter/${nextId}`);
    } else {
      router.push('/dashboard/');
    }
  }

  function handleValidate() {  
    if (selected.length === 0) {
      alert("Veuillez sélectionner au moins une option avant de valider.");
      return;
    }
      setSubmitted(true);   
  }
  if (submitted) {
    const isCorrect = areArraysEqual(selected, question.answer);
    return (
      <div>
        {isCorrect ? (
          <p className="text-green-600 font-bold text-2xl">Bonne réponse !</p>
        ) : (
          <>
            <p className="text-red-600 font-bold text-2xl">Mauvaise réponse !</p>
            <p>Les bonnes réponses étaient : {question.answer.join(', ')}</p>
          </>
        )}
        <p className="mt-4 text-xl font-bold">Explication :</p>
        <p className="mt-4 text-xl">{question.explanation}</p>

        <button
          onClick={goToNextQuestion}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Continuer
        </button>
      </div>
    );
  }


  return (
    <div>
      <p className="text-2xl">{question.question}</p>
      <div className="flex flex-col gap-4 mt-4">
        {question.options.map((option) => (
          <SelectButton
            key={option}
            name={option}
            isSelected={selected.includes(option)}
            toggle={() => handleClick(option)}
          />
        ))}
      </div>
      <ValidateButton toggle={() => handleValidate()} />
    </div>
  );
}
