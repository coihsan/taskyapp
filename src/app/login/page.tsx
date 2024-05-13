import { login, signup } from './actions'
import { Auth } from '@supabase/auth-ui-react'
import { createClient } from '@supabase/supabase-js'
import { ThemeSupa } from '@supabase/auth-ui-shared'
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
export default function LoginPage() {
  return (
    <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
    providers={['google']}
    theme='dark'
    />
  )
}