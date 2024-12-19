import { cn } from '@/lib/utils'

export default function CommunityMarqueeCard({ img }: { img: string }) {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border',
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <img
        alt="Community Image"
        src={img}
        className="w-full h-full object-cover object-center"
      />
    </figure>
  )
}
