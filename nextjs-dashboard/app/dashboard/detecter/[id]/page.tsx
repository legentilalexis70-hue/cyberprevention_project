import { questions_detection } from '@/app/lib/questions';
import QuizClient from '@/app/ui/quiz-client-detecter';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const question = questions_detection.find(q => q.id === id);

  if (!question) return <div>Question not found</div>;

  return <QuizClient question={question} />;
}