import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import classNames from "classnames";

const menu = [
  {name: 'Главная', link: '/', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>)},
  {name: 'Категории', link: '/category/test', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>)},
  {name: 'Корзина', link: '/', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>)},
  {name: 'Избранные', link: '/', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>)},
  {name: 'Аккаунт', link: '/my/dashboard', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>)},
]

const MobileNavigation: React.FC = () => {
  const router = useRouter()

  return (
    <section className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow pb-1">
      <div className="flex justify-between">
        {menu.map((item, key) => (
          <Link href={item.link} key={key}>
            <a className={classNames(
              "flex flex-col items-center w-full justify-center inline-block text-center pt-2 pb-1",
              "focus:text-primary hover:text-primary",
              router.asPath === item.link && 'text-primary'
            )}>
              {item.icon}
              <span className="text-xs">{item.name}</span>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MobileNavigation;
