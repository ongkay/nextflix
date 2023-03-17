import Spinner from '@/src/components/ui/spinner'

export default function Loading() {
  return (
    <>
      <div className="flex items-center justify-center h-screen mb-4">
        <Spinner className="w-16 h-16 " />
      </div>
    </>
  )
}
