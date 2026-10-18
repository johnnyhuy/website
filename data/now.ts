// Update this snapshot and its date together when priorities change.
export const now = {
  updated: '2026-10-19',
  sections: [
    {
      title: 'Work',
      description:
        'I lead platform and AI engineering at Sportsbet. Most of my work sits around developer experience, cloud infrastructure, and making AI tools useful in day-to-day engineering.',
      links: [],
    },
    {
      title: 'Tinkering',
      description:
        'At home, I’ve been working through upgrades to my k3s cluster and trying different coding agents. Recent experiments include getting Muse Code running in Paseo and seeing how much setup a personal AI assistant asks of you before it does anything useful.',
      links: [
        {
          label: 'The k3s upgrade',
          href: '/devlog/upgrading-my-k3s-cluster-one-minor-at-a-time',
        },
        {
          label: 'Trying Muse Code',
          href: '/devlog/setting-up-muse-code-with-paseo',
        },
        {
          label: 'Trying OpenHuman',
          href: '/devlog/trying-openhuman-and-trust-barriers',
        },
      ],
    },
    {
      title: 'Writing',
      description:
        'I’m keeping a devlog of the things that cost me time to figure out. The longer thoughts go on the blog. Both are a way to leave something useful behind while I’m building.',
      links: [
        { label: 'Read the devlog', href: '/devlog' },
        { label: 'Read the blog', href: '/blog' },
      ],
    },
  ],
}
