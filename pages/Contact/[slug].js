import { useRouter } from 'next/router';
import OtherPage from '../../other-page/contact';

export default function OtherPageSlug() {
  const router = useRouter();
  const { slug } = router.query;

  return <OtherPage slug={slug} />;
}