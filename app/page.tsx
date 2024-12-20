import InputForm from '../components/InputForm'
import StoredInputs from '../components/StoredInputs'

export default function Home() {
  return (
    <main className="container mx-auto p-4 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-black">Input Storage App</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <InputForm />
        <StoredInputs />
      </div>
    </main>
  )
}

