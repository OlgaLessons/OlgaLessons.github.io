import { Drawer, DrawerProps, Flex } from 'antd'
import { forwardRef, ReactNode, Ref, useImperativeHandle, useState } from 'react'
import { useSwipeable } from 'react-swipeable'

interface Props extends DrawerProps {
  children: ReactNode
  subTitle?: string
  // bodyStyle?: DrawerStyles['body']
}

export interface SwipeableDrawerMethods {
  open: () => void
  close: () => void
}

const SwipeableDrawer = forwardRef(
  (
    { children, title, subTitle, height, ...drawerProps }: Props,
    ref: Ref<SwipeableDrawerMethods>,
  ) => {
    useImperativeHandle(
      ref,
      (): SwipeableDrawerMethods => ({
        open: () => setIsDrawerOpen(true),
        close: () => setIsDrawerOpen(false),
      }),
    )

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handlers = useSwipeable({
      onSwipedDown: () => {
        setIsDrawerOpen(false)
      },
      trackMouse: false,
    })

    return (
      <Drawer
        title={
          <div {...handlers}>
            <h4>{title}</h4>
            <h5>{subTitle}</h5>
          </div>
        }
        placement="bottom"
        // height={height ?? '50%'} //DO not use fit-content, it breaks on a real device drawer visibility
        height={height ?? 'auto'}
        closable={false}
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
        {...drawerProps}
      >
        <Flex flex={1} justify="center">
          {children}
        </Flex>
      </Drawer>
    )
  },
)

SwipeableDrawer.displayName = 'SwipeableDrawer'
export default SwipeableDrawer
