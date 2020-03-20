export default function({store, redirect}) {
  console.log(store.getters['login/hasToken'])  
  if (!store.getters['login/hasToken']) {
    redirect('/')
  }
}