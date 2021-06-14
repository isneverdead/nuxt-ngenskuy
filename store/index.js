export const state = () => ({
  isUser: true,
  sidebarOpenStatus: false,
  users: [
    {
      userId: 1,
      profileUrl: '~/assets/profile_picture.png',
      username: 'akbar',
      password: '1234',
      userBio: '',
      userFollowers: [2, 3, 4],
      userFollowing: [2, 3, 4],
      likeId: [1],
    },
    {
      userId: 2,
      profileUrl: '~/assets/profile_picture.png',
      username: 'bachtiar',
      password: '1234',
      userBio: '',
      userFollowers: [2, 3, 4],
      userFollowing: [2, 3, 4],
      likeId: [],
    },
    {
      userId: 3,
      profileUrl: '~/assets/profile_picture.png',
      username: 'ahmad',
      password: '1234',
      userBio: '',
      userFollowers: [2, 3, 4],
      userFollowing: [2, 3, 4],
      likeId: [],
    },
    {
      userId: 4,
      profileUrl: '~/assets/profile_picture.png',
      username: 'henan',
      password: '1234',
      userBio: '',
      userFollowers: [2, 3, 4],
      userFollowing: [2, 3, 4],
      likeId: [],
    },
  ],

  chat: [
    {
      chatId: 1,
      userReceiverId: 2,
      userSenderId: 1,
      text: 'halo bah',
    },
    {
      chatId: 2,
      userReceiverId: 1,
      userSenderId: 2,
      text: 'pie bar?',
    },
  ],
  message: [
    {
      messageId: 1,
      userId: 1,
      friendList: [2, 3, 4],
    },
  ],
  notif: [
    {
      notifId: 1,
      userId: 1,
      fromUserId: 2,
      content: 'Bachtiar membuat status baru',
    },
  ],
  status: [
    {
      statusId: 1,
      userId: 1,
      content: 'Hallo',
    },

    {
      statusId: 2,
      userId: 2,
      content: 'hai',
    },
  ],
})

export const actions = {
  async toggleSideba({ commit }) {
    await commit('toggleSidebar')
  },
}

export const mutations = {
  addItem(state, id) {},

  toggleSidebar(state) {
    state.sidebarOpenStatus = !state.sidebarOpenStatus
  },
}

export const getters = {
  getUserById: (state) => (id) => {
    return state.users.find((user) => user.userId === id)
  },

  getAllStatus: (state) => state.status,

  getAllChat: (state) => state.chat,

  getAllFriend: (state) => state.message,

  isSidebarOpen: (state) => state.sidebarOpenStatus,
}
