'use client'

import { forwardRef } from 'react'
import Image from 'next/image'
import { useUploadFile } from '@/src/hooks/use-upload-file'
import { ImageResponseData } from '@/src/types/api/image'
import { Progress } from '@/ui/progress'
import { Loader2 } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'

interface ImageUploadProps extends React.HTMLAttributes<HTMLTableRowElement> {
  name: string
  size: number
  getUrl: string
  error?: boolean | undefined
}

const ImageUpload = forwardRef<HTMLTableRowElement, ImageUploadProps>(
  ({ getUrl, error, name, size, className, ...props }, ref) => {
    const {
      data,
      progress,
      isLoading,
      error: processingError,
    } = useUploadFile<ImageResponseData>('/api/image/process', getUrl, {
      disabled: error,
    })

    return (
      <tr ref={ref} {...props} className={cn('', className)}>
        <td className="px-6 py-4 text-sm whitespace-nowrap dark:text-slate-400">
          <div className="relative flex w-20 h-12">
            {error ? (
              <div className="flex items-center justify-center w-full">
                <Icons.redx className="w-6 h-6" />
              </div>
            ) : (
              <Image
                style={{ objectFit: 'contain' }}
                src={getUrl}
                fill
                alt={name}
              />
            )}
          </div>
        </td>
        <td className="px-6 py-4 text-sm font-medium truncate whitespace-normal dark:text-slate-400 ">
          <div className="">
            <p
              className={cn('dark:text-slate-300', {
                'dark:text-red-500': error,
              })}
            >
              {name}
            </p>
            {data ? (
              <p>{data.alt}</p>
            ) : isLoading ? (
              <Loader2 className="w-4 h-4 mt-1 animate-spin" />
            ) : null}
          </div>
        </td>
        <td
          className={cn(
            'px-6 py-4 whitespace-nowrap text-sm dark:text-slate-400',
            {
              'dark:text-red-500': error,
            }
          )}
        >
          {(size / 1000).toFixed(0)} KB
        </td>
        <td className="px-6 py-4 text-sm whitespace-nowrap dark:text-slate-400 ">
          <Progress
            className={cn('w-full h-2')}
            value={progress}
            isError={error || processingError}
          />
        </td>
      </tr>
    )
  }
)

ImageUpload.displayName = 'ImageUpload'

export default ImageUpload
