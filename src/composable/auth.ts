import { client } from '../appwrite'
import { Account, ID } from 'appwrite'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast, type ToastOptions } from 'vue3-toastify'
import { type ProgressFinisher, useProgress } from '@marcoschulte/vue3-progress'

const progresses = [] as ProgressFinisher[]

const email = ref('')
const password = ref('')
const name = ref('')
const loading = ref(false)

export function useAuth() {
  const router = useRouter()
  const account = new Account(client)

  const notify = (msg: string) => {
    toast(msg, {
      autoClose: 1000,
      position: toast.POSITION.TOP_RIGHT,
      type: 'error'
    } as ToastOptions)
  }

  const login = async (email: string, password: string) => {
    try {
      loading.value = true
      progresses.push(useProgress().start())
      const { $id, providerUid } = await account.createEmailSession(email, password)
      loading.value = false
      progresses.pop()?.finish()
      setUser({ $id, providerUid })
      navigate('/')
    } catch (error: any) {
      notify(error.message)
      progresses.pop()?.finish()
      loading.value = false
    }
  }

  const logout = () => {
    sessionStorage.removeItem('user')
    navigate('/auth/login')
  }

  const signup = async (email: string, password: string, name: string) => {
    try {
      loading.value = true
      progresses.push(useProgress().start())
      await account.create(ID.unique(), email, password, name)

      await login(email, password)
      progresses.pop()?.finish()
      loading.value = false
    } catch (error: any) {
      notify(error.message)
      progresses.pop()?.finish()
      loading.value = false
    }
  }

  const setUser = (id: { $id: string; providerUid: string }) => {
    sessionStorage.setItem('user', JSON.stringify(id))
  }

  const navigate = (path: string) => {
    router.push(path)
  }

  return {
    email,
    password,
    name,
    login,
    signup,
    loading,
    logout
  }
}
