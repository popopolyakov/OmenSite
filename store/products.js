export const state = () => ({
    products: [
        {
          name: 'Omen Boyz Space Mission`19', 
          print: 'Вдохновились футуристичными логотипами космических фирм и нашивками с костюмов космонавтов.', 
          img:'12_04_2019_2.png', 
          date: '12.04.2019',
          id: 1,
        },
        {
          name: 'Хорни Банни', 
          print: 'На логотипе кролик, который вылезает из-за надписи в поисках удовольствий. Он - расхититель кроличьих сердец, однако интересует в крольчихах его лишь одно.', 
          img:'12_04_2019_3.png', 
          date: '12.04.2019',
          id: 2
        },
        {
          name: 'Невербалика', 
          print: 'Невербалика - общение без слов посредством жестов. Однако жестикулировать можно не только руками. Это и есть посыл худи.', 
          img:'19_08_2019.png', 
          date:'19.08.2019',
          id: 3
        },
        {
          name: 'In My Kingdom Cold BLACK', 
          print: 'Леденящие сюжеты последнего круга ада. Дизайн переносит зрителя в центр ада, самую холодную его часть. В этом месте всё устроено не так, как представляет большинство', 
          img:'15_10_2019.png', 
          date:'15.10.2019',
          id: 4,
        },
        {
          name: 'In My Kingdom Cold RED', 
          print: 'Здесь нет огня, котлов с лавой. Вездесущий лёд и мрак окутал предателей и отступников, а в самом центре покоится вмёрзший Люцифер. Чрезвычайно эстетично!', 
          img:'15_10_2019_1.png', 
          date: '15.10.2019',
          id: 5
        },
        {
          name: 'ALL EYEZ ON ME', 
          print: 'нежнейший тёплый худи с изящным принтом, бархатной надписью, удобными резинками и оверсайз посадкой!', 
          img:'16_12_2019.png', 
          date: '16.12.2019',
          id: 6
        },
      ],
})

export const mutations = {
  setItem(state, {changeString:changeString, editID:editID, changeProperty:changeProperty}) {
    console.log(changeString, editID, changeProperty)
    console.log(state.products[editID - 1][`${changeProperty}`])
    state.products[editID - 1][`${changeProperty}`] = changeString
    console.log(state.products[editID - 1][`${changeProperty}`])
  },
}

export const actions = {
  setProperty({ commit }, ctx) {
    console.log(ctx)
    commit('setItem', ctx)
  },
}

export const getters = {
  getProducts: s => [...s.products]
}