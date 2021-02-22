import React, {useState, useEffect} from 'react'
interface AppProps {}

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000)
    return () => clearTimeout(timer)
  }, [count, setCount])
  return (
    <div className="grid h-screen place-items-center">
      <p className="text-4xl">
        <span className="text-indigo-200">Snowpack</span> +{' '}
        <span className="text-blue-700">React</span> +{' '}
        <span className="text-blue-900">Typescript</span>+{' '}
        <span className="text-green-300">Tailwind</span> +{' '}
        <span className="text-gray-600">HMR</span> ={' '}
        <code className="text-red-600">{count}</code> ❤️
      </p>
    </div>
  )
}

export default App
