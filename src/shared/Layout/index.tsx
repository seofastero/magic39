'use client'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import cnBind from 'classnames/bind'
import { Loader } from '../ui/Loader'
const cx = cnBind.bind(styles)
interface ILayout {
  layoutHeaderSlot?: React.ReactNode
  layoutFooterSlot?: React.ReactNode
}

const Layout: FC<PropsWithChildren<ILayout>> = ({
  layoutHeaderSlot,
  layoutFooterSlot,
  children,
}) => {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      {loading && <Loader />}
      <div className={cx([`layout`])} data-theme-style={'light'}>
        {layoutHeaderSlot && (
          layoutHeaderSlot


        )}

        <div className={cx([`body`])}>
          {children}

        </div>
        {layoutFooterSlot && (
          layoutFooterSlot
        )}
      </div>
    </>

  )
}
export default Layout
