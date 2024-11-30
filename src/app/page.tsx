function Home() {
  return (
    <section>
      <div className="py-4">
        <h2 className="text-center text-2xl text-zinc-100">Hello, World!</h2>

        <div className="flex justify-center py-4">
          <button
            type="button"
            className="bg-purple-500 px-4 py-2 min-w-[144px] rounded-full hover:bg-purple-400 transition-colors cursor-pointer">
            <span>Try It Now!</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
