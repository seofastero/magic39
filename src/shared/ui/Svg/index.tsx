import { FunctionComponent, MouseEventHandler } from 'react'
import classNames from 'classnames/bind'

import * as elements from './images'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

export type SVGProps = {
  name: keyof typeof elements
  className?: string
  color?: 'currentColor' | 'ghost'
  onClick?: MouseEventHandler<HTMLSpanElement>
  width?: string | number
  height?: string | number
  mediaQuery?: string
}

export const Svg: FunctionComponent<SVGProps> = ({
  name,
  className,
  color = 'currentColor',
  onClick,
  height,
  width,
}) => {
  const Element = elements[name]

  return (
    <div
      onClick={onClick}
      role="presentation"
      className={cx(
        styles.iconBox,
        `--color-${color}`,
        { [`interactive`]: Boolean(onClick) },
        className
      )}
      style={{
        height: height ? `${height}` : '',
        width: width ? `${width}` : '',
      }}
    >
      <Element />
    </div>
  )
}
