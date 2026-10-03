'use client';

import { useState } from 'react';
import SelectButton from '@/app/ui/select-button';
import { useRouter } from 'next/navigation';
import ValidateButton from '@/app/ui/validate-button';
import { questions_phishing } from '@/app/lib/questions';
type Question = {
  id: string;
  question_fraude?: string;
  question_options: string;
  image?: string;
  source?: string;
  options: string[];
  fraude?: string[];
  answer?: string[];
  explanation?: string;
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
    const nextExists = questions_phishing.some(q => q.id === nextId);
    if (nextId === '4') {
      router.push('/dashboard/phishing/offre');
    }
    else if (nextExists) {
      router.push(`/dashboard/phishing/${nextId}`);
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
    const isCorrect = areArraysEqual(selected, question.answer ?? []);
    const answerText = question.answer ? question.answer.join(', ') : 'Aucune réponse définie';

    return (
      <div>
        {isCorrect ? (
          <p className="text-green-600 font-bold text-2xl">Bonne réponse !</p>
        ) : (
          <>
            <p className="text-red-600 font-bold text-2xl">Mauvaise réponse !</p>
            <p>Les bonnes réponses étaient : {answerText}</p>
          </>
        )}
        {question.explanation && (
          <>
            <p className="mt-4 text-xl font-bold">Explication :</p>
            <p className="mt-4 text-xl">{question.explanation ?? ''}</p>
          </>
        )}

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
    <div className="space-y-4">
      {question.image && (
        <img src={'/' + question.image} alt="" />
      )}
      {question.source && (
        <p className="text-sm text-gray-500">{question.source}</p>
      )}
      {question.question_fraude && <p className="text-2xl">{question.question_fraude}</p>}
      {question.fraude && question.fraude.length > 0 && (
        <div className="flex flex-col gap-4">
          {question.fraude.map((option) => (
            <SelectButton
              key={option}
              name={option}
              isSelected={selected.includes(option)}
              toggle={() => handleClick(option)}
            />
          ))}
        </div>
      )}
      <p className="text-2xl">{question.question_options}</p>
      <div className="flex flex-col gap-4">
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