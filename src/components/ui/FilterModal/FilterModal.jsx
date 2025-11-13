import FilterBlock from "@/components/FilterBlock/FilterBlock";
import close from "@assets/hero/close.svg"
import { AnimatePresence } from "motion/react"; import * as m from "motion/react-m"


export default function FilterModal({ isOpen, onClose, filters, selectedFilters, onToggle, onApply }) {

    return (
        <AnimatePresence>
            {!isOpen && null}
            {isOpen &&
            <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.4}}
            className="fixed inset-0 bg-black-transparent z-50 flex items-center justify-center px-4">
                <m.div
                initial={{x: -100}}
                animate={{x: 0}}
                exit={{x: 100}}
                transition={{duration: 0.2}}
                className="backdrop-blur-2xl w-full max-w-lg rounded-t-2xl max-h-[60vh]">
                    <div className="bg-modal flex justify-between rounded-t-2xl items-center px-3.5 py-3">
                        <div className="w-2"></div>
                        <h2 className="text-xl text-white">Фильтр</h2>
                        <button onClick={onClose} className="text-gray-400 text-2xl">
                            <img src={close} alt="close" />
                        </button>
                    </div>
                    <div className="px-3.5 py-3 max-h-[40vh] overflow-y-scroll">
                        {filters.map((section) => (
                            <FilterBlock
                                key={section.title}
                                title={section.title}
                                tags={section.tags}
                                selected={selectedFilters[section.key] || []}
                                onToggle={(value) => onToggle(section.key, value)}
                                textCenter="center"
                            />
                        ))}
                    </div>
                    <div className="bg-modal px-3.5 py-3 rounded-b-2xl">
                        <button onClick={onApply} className="w-full bg-blue-600 py-3 text-white rounded-xl font-medium">
                            Применить
                        </button>
                    </div>
                </m.div>
            </m.div>
            }
        </AnimatePresence>
    )
}