type IEpisodeProps = {
  code: string;
};

const Episode = (props: IEpisodeProps) => (
  <iframe
    style={{ borderRadius: '12px' }}
    src={`https://open.spotify.com/embed/episode/${props.code}?utm_source=generator`}
    width="100%"
    height="250"
    frameBorder="0"
    allowFullScreen
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
);

export { Episode };
