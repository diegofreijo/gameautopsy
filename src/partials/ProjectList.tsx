import { GradientText, Section } from 'astro-boilerplate-components';

import { Episode } from './Episode';

const ProjectList = () => (
  <Section
    title={
      <>
        Escucha los ultimos <GradientText>episodios</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-1">
      <Episode code="0Y4voi1vRzxBPZ2OPMpXIz"></Episode>
      <Episode code="1El6pgAJP5REtsEMHITryz"></Episode>
      <Episode code="51dzHJoqmVHfzokGHL66Sj"></Episode>
      <Episode code="4LEFtkYFuzcamw0kfGMSms"></Episode>
      <Episode code="6tXLzYpGx58GdCpvViXpF7"></Episode>
      <Episode code="6meJo0Jg4ioh7kPtgnLKmq"></Episode>
      <Episode code="2aGbDe8WJHgaUYAtckBgmA"></Episode>
      <Episode code="4SMjuUmWpxnXkbs2qFaDz2"></Episode>
      <Episode code="0kKvftgcs93kE7LCR3vPHk"></Episode>
      <Episode code="1b6zeaWJXA53r4HuhXsveR"></Episode>
      <Episode code="3MHJQ71dBsfw764dTEcz6h"></Episode>
      <Episode code="2LnrvxmVfkPjtIs21ntKLG"></Episode>
      <Episode code="3jnJGdBj1FErVen17hjMEZ"></Episode>
      <Episode code="7qZK6HVoY7VZCerQ3X6f8n"></Episode>
      <Episode code="2Mc5fhvIRrwcIuLJ9PJtaZ"></Episode>
      <Episode code="6fmFZhhQ24HLkSJmCDAvvu"></Episode>
    </div>
  </Section>
);

export { ProjectList };
