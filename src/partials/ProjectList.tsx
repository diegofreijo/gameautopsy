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
