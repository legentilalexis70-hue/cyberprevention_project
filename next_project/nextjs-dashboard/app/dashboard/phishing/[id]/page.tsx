import { questions_phishing } from '@/app/lib/questions';
import QuizClient from '@/app/ui/quiz-client-phishing';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const question = questions_phishing.find(q => q.id === id);

  if (!question) return <div>Question not found</div>;

  return <QuizClient question={question} />;
}