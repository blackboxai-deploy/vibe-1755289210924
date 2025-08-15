'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-white/20 hover:shadow-2xl transition-all duration-300">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
                Hello World!
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                Welcome to your Next.js application
              </p>
              <p className="text-gray-600 leading-relaxed max-w-lg mx-auto">
                This is a simple Hello World app built with Next.js 15, TypeScript, and Tailwind CSS. 
                Ready to start building something amazing!
              </p>
            </div>

            <div className="pt-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl">
                <span className="font-semibold">✨ Let's Build</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Built with Next.js 15 • TypeScript • Tailwind CSS
          </p>
        </div>
      </div>
    </main>
  )
}