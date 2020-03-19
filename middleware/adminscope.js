export default function({store, redirect}) {
    if (!store.getters.hasToken) {
      redirect('/loginadmin?message=login')
    }
  }