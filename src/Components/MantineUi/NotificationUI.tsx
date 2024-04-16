import { CloseButton, Flex, Notification, Paper, Text } from "@mantine/core";

interface INotificaton {
    setClose?: any
}

export const NotificationUi = (props: INotificaton) => {
    const { setClose } = props
    return (
        <Paper shadow="md" className="absolute z-10 w-full max-w-[350px] right-[1rem] top-[5rem]">
            <Flex p={10} justify="space-between" align="center"> {/* Added align="center" */}
                <Text fw={500} className="!text-secondary-text !text-xl	">Notification</Text>
                <CloseButton variant="transparent" className='w-10 h-10' onClick={()=>setClose(false)} />
            </Flex>
            <Notification title="We notify you that" withCloseButton={false}>
                You are now obligated to give a star to aa project on GitHub
            </Notification>
        </Paper>
    );
};
