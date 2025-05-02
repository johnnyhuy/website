export const statusColors: Record<string, string> = {
  online: 'bg-green-500',
  idle: 'bg-yellow-400',
  dnd: 'bg-red-500',
  offline: 'bg-muted-foreground',
}

export const lanyard = {
  data: {
    discord_user: {
      id: '183829779810615297',
      username: 'thejohnnaye',
      avatar: '14c25c04f274ac5d641d0223e3767e2b',
      display_name: 'John Doe',
    },
    discord_status: 'online',
    activities: [
      {
        id: '87cb1d50afaf131e',
        name: 'Visual Studio Code',
        type: 0,
        state: 'Workspace: cloud',
        details: 'Editing values.kube01.yaml',
        application_id: '383226320970055681',
        timestamps: {
          start: 1745678099307,
        },
        assets: {
          large_image: '1359299519124078724',
          large_text: 'Editing a YAML file',
          small_image: '1359308034446200892',
          small_text: 'Cursor',
        },
        created_at: 1745678099552,
      },
    ],
  },
  success: true,
}
