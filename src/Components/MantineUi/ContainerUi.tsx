import { Container } from "@mantine/core"

interface IContainer {
    children?: any;
    sizeContainer?: any;
    containerClass?: string;
    height?:any
}
export const Containerui = (props: IContainer) => {
    const { children, sizeContainer, containerClass, height } = props
    return <Container size={sizeContainer} className={containerClass} p={0} h={height}>
        {children}
    </Container>
}