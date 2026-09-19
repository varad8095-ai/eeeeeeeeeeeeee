import PageHero from '@/components/PageHero';
import Pricing from '@/components/Pricing';

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Plans for every server"
        description="Transparent pricing with no hidden fees. Upgrade, downgrade, or cancel anytime — your server, your rules."
      />
      <Pricing />
    </>
  );
}
