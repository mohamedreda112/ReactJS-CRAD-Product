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

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={closeModal}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto backdrop-blur-sm">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
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