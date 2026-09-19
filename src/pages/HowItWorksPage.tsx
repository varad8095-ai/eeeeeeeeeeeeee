import PageHero from '@/components/PageHero';
import HowItWorks from '@/components/HowItWorks';

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Server live in seconds"
        description="No technical experience needed. Choose a plan, deploy, and start playing — it really is that simple."
      />
      <HowItWorks />
    </>
  );
}
