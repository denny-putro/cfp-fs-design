let safeDocument: Document;

if (typeof document !== 'undefined') {
  safeDocument = document;
}

export const useScrollBlock = (): [() => void, () => void] => {
  if (safeDocument == null) {
    return [() => null, () => null];
  }

  const html = safeDocument.documentElement;
  const { body } = safeDocument;

  const blockScroll = (): void => {
    if (!body || !body.style) return;
    if (document == undefined) return;

    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight = parseInt(window.getComputedStyle(body).getPropertyValue('padding-right')) || 0;

    html.style.position = 'relative';
    html.style.overflow = 'hidden';
    body.style.position = 'relative';
    body.style.overflow = 'hidden';
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;
  };

  const allowScroll = (): void => {
    if (!body || !body.style) return;

    html.style.position = '';
    html.style.overflow = '';
    body.style.position = '';
    body.style.overflow = '';
    body.style.paddingRight = '';
  };

  return [blockScroll, allowScroll];
};
