export const siteMeta = {
  titleBase: 'Digital Roots',
  tagline: 'Reconnect. Work. Grow.',
  descriptionBase:
    'DigitalRoots connects remote workers with rural communities across Spain, revitalizing these areas through remote work.'
};

export function buildTitle(segment?: string) {
  return segment ? `${segment} | ${siteMeta.titleBase}` : `${siteMeta.titleBase} | ${siteMeta.tagline}`;
}

export const defaultMetadata = {
  title: buildTitle(),
  description: siteMeta.descriptionBase,
};