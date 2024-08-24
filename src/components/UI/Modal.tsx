import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode} from 'react'

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  title?:string;
  children:ReactNode;
  description?:string;
}

const Modal = ({ isOpen, closeModal, title, children, description }: IProps) => {


  return (
      <>


          <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                  <div className="fixed inset-0 backdrop-blur-sm" aria-hidden="true" />
                  <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                  >
                      <div className="fixed inset-0 bg-black/25" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center">
                          <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95"
                          >
                              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                  {title && <Dialog.Title
                                      as="h3"
                                      className="text-lg font-medium leading-6 text-gray-900"
                                  >
                                      {title}
                                  </Dialog.Title>}
                                  {description && <Dialog.Title
                                      as="p"
                                      className="text-md font-small leading-6 text-gray-400 my-2"
                                  >
                                      {description}
                                  </Dialog.Title>}



                                  <div className="mt-4">
                                      {children}
                                  </div>
                              </Dialog.Panel>
                          </Transition.Child>
                      </div>
                  </div>
              </Dialog>
          </Transition>
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
