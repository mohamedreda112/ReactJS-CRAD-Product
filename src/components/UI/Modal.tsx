import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { ReactNode} from 'react'

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  title?:string;
  children:ReactNode;
}

const Modal = ({isOpen, title, closeModal, children}: IProps) => {


  return (
    <>
    {/* <div className='fixed inset-0 flex items-center justify-center'>
      <Button
        onClick={open}
        className="bg-indigo-500 rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        
      >
        Open dialog
      </Button>
    </div> */}

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={closeModal}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              {title && <Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-950'>
                {title}
                </Dialog.Title>}

              <div className="mt-4">
                {children}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
export default Modal;

{/* <Button
className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
onClick={close}
>
Got it, thanks!
</Button> */}