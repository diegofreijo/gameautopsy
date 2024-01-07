import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hola, somos <GradientText>Game Autopsy Podcast</GradientText> 👋
        </>
      }
      description={
        <>
          En cada episodio diseccionamos conceptos tecnicos del diseño de
          videojuegos. Y te explicamos como se aplican a ejemplos concretos en
          nuestros juegos favoritos (o no tanto).
          <br />
          <br />
          Hecho por{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://twitter.com/itsplotkink"
          >
            Lautaro "Plotkink" Fain
          </a>{' '}
          y{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://twitter.com/diegofreijo"
          >
            Diego "Giga" Freijo
          </a>{' '}
        </>
      }
      avatar={
        <img
          className="h-80 w-80"
          src="/assets/images/avatar.jpg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a
            href="https://open.spotify.com/show/32o0CHakXaXkbeCqutTFCJ"
            target={'_blank'}
          >
            <HeroSocial
              src="/assets/images/spotify-icon.png"
              alt="Spotify icon"
            />
          </a>
          <a href="https://twitter.com/GameAutopsy" target={'_blank'}>
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.instagram.com/thegameautopsy/" target={'_blank'}>
            <HeroSocial
              src="/assets/images/instagram-icon.png"
              alt="Instagram icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
