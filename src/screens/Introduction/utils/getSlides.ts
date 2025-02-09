import { Slide, SlideProps, slidesData } from '../components';

export const getSlides = ({
  lastVersion,
}: {
  lastVersion: string | undefined;
  registered: boolean;
}): SlideProps[] => {
  const slides: SlideProps[] = [];
  switch (true) {
    case !lastVersion || lastVersion < '1.2.2':
      slides.push(
        slidesData.Waehle,
        slidesData.Stimme,
        slidesData.Vergleiche,
        slidesData.Analysiere,
      );
      break;
  }
  return slides;
};
