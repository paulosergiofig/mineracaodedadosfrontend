import { FC, PropsWithChildren } from 'react'

interface ContentBoxProps {
    Root: FC<PropsWithChildren>
    Title: FC<PropsWithChildren>
    Body: FC<PropsWithChildren>
}

const Root: FC<PropsWithChildren> = ({children}) => {
    return (
      <div>
        {children} rendered on root
      </div>
    )
}

const Title: FC<PropsWithChildren> = ({children}) => {
    return (
        <div>{children} rendered on Title</div>
    )
}

const Body: FC<PropsWithChildren> = ({children}) => {
    return (
        <div>{children} rendered on Body</div>
    )
}

const ContentBox: ContentBoxProps = () => {}

ContentBox.Root = Root
ContentBox.Title = Title
ContentBox.Body = Body

export default ContentBox