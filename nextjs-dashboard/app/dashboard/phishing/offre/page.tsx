import { questions_phishing } from '@/app/lib/questions';
import { redirect } from 'next/navigation';
import ContinueButton from '@/app/ui/continue-button';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const question = questions_phishing.find(q => q.id === id);

  async function handleValidate() {
    'use server';
    redirect(`/dashboard/phishing/4`);
  }

  return (
    <div className="space-y-4">
      <p className="text-2xl">Ici dessous, vous pouvez voir une offre pour une voiture que vous avez postée. On considère ici que le seul moyen de communiquer est par mail. Les prochaines questions traiteront des réponses que vous avez reçu concernant l'offre.</p>
      <img src={`/offre.png`} alt="Image" width={600} height={400}  />
      <ContinueButton toggle={handleValidate} />
    </div>
    );
}