import { Button } from '#/components/button'

function Home() {
  return (
    <section>
      <div className="py-4">
        <h2 className="text-center text-2xl text-zinc-100">Hello, World!</h2>

        <div className="flex gap-4 justify-center py-4">
          <Button>
            <span>Try It Now!</span>
          </Button>

          <Button disabled>
            <span>Try It Now!</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Home
