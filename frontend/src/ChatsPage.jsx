import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    return (
        <div style={{ height: "100vh" }}>
            <PrettyChatWindow
                projectId="89c4cd71-4305-4d4d-92ee-745440c8f5b6"
                username={ props.user.username }
                secret={ props.user.secret }
                style={{ height: "100%" }}
            ></PrettyChatWindow>
        </div>
    );
}

export default ChatsPage;