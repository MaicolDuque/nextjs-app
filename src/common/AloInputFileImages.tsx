import { IconPhotoPlus, IconX } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'

const defaultFileTypes = ['JPG', 'PNG', 'GIF', 'JPEG']
const defaultMessage = 'Cargue o suelte aquí las imagenes'
interface AloInputFileProps {
  label: string
  types?: string[]
  message?: string
}

export function AloInputFileImages({
  label,
  types = defaultFileTypes,
  message = defaultMessage,
}: AloInputFileProps) {
  const [files, setFiles] = useState<FileList | null>(null)
  const [images, setImages] = useState<any[]>([])
  const [allowTypesString, setAllowTypesString] = useState<string>('')
  const handleChange = (file: FileList) => {
    console.log('setFiles')
    setFiles(file)
  }

  const handleDeleteImage = (index: number) => {
    if(!files) return
    const newFiles = Array.from(files).filter((_file, i) => i !== index) as unknown
    const newImages = images.filter((_file, i) => i !== index)
    setFiles(newFiles as FileList)
    setImages(newImages)
  }

  useEffect(() => {
    setAllowTypesString(types.join(','))
  }, [types])

  useEffect(() => {
    const images: any[] = []
    const fileReaders: any[] = []
    let isCancel = false
    console.log({files})
    if (files?.length) {
      console.log('yesss')
      Array.from(files).forEach((file) => {
        console.log('siiii')
        const fileReader = new FileReader()
        fileReaders.push(fileReader)
        fileReader.onload = (e) => {
          console.log('loadeddd')
          const { result } = e.target ?? {}
          if (result) {
            images.push(result)
          }
          if (images.length === files?.length && !isCancel) {
            setImages(images)
          }
        }
        fileReader.readAsDataURL(file)
      })
    }
    return () => {
      isCancel = true
      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === 1) {
          fileReader.abort()
        }
      })
    }
  }, [files])

  return (
    <div className="my-1">
      <div className="text-gray-900 mb-2 font-medium">{label}</div>
      <FileUploader
        handleChange={handleChange}
        name="file"
        label="Cargue o suelte un imagenes aquí"
        multiple
        fileOrFiles={files}
        types={types}
      >
        <div className="border-2 border-dashed rounded-md border-black flex items-center gap-2 justify-between px-3 py-3 cursor-pointer">
          <div className="flex items-center gap-2">
            <IconPhotoPlus size={40} />
            <div className="sc-hLseeU llmFop">
              <span>{message}</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div title={`types: ${allowTypesString}`}>{allowTypesString}</div>
          </div>
        </div>
      </FileUploader>

      {/* {files ? (
        <>
          {Array.from(files).map((file) => {
            return (
              <div key={file.lastModified} onClick={() => setFiles(null)}>
                {file.name}
              </div>
            )
          })}
        </>
      ) : null} */}

      {images.length ? (
        <div className='mt-2 flex items-start gap-2 flex-wrap '>
          {images.map((image, idx) => {
            return (
              <p key={idx} className="flex gap-1">
                <img src={image} alt="Image Preview" width={100} />
                <IconX className='cursor-pointer hover:bg-gray-200' size={15} onClick={() => handleDeleteImage(idx)} />
              </p>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
