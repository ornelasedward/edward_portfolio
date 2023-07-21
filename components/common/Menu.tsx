'use client';
import { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { Transition } from '@headlessui/react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface MenuItem {
  label: string;
  path: string;
}

interface CustomMenuProps {
  menuItems: MenuItem[];
}

const Menu: React.FC<CustomMenuProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center p-2 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span className=" text-gray">
          {selectedItem ? selectedItem.label : 'EN'}
        </span>

        {!isOpen ? (
          <FiChevronDown className=" text-gray" size={23} />
        ) : (
          <FiChevronUp className=" text-gray" size={23} />
        )}
      </button>

      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute z-10 right-0 mt-2 w-48  bg-primary-dark text-gray rounded-lg shadow-lg">
          <ul className="py-2">
            {menuItems.map((item, index) => (
              <li key={index} className="">
                <button
                  className="block w-full text-left text-gray text-base px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleItemClick(item)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </div>
  );
};

export default Menu;
