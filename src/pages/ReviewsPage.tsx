import PageHero from '@/components/PageHero';
import Reviews from '@/components/Reviews';

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer reviews"
        title="Rated 4.9 out of 5"
        description="All reviews verified by Trustpilot. See what our community has to say about their RapixaCloud experience."
      />
      <Reviews />
    </>
  );
}
