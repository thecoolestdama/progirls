import TextComponent from "./TextComponent";

export const TextFaq: React.FC = () => {
return (
    <div
        style={{
        backgroundColor: "#f0f0f0",
    }}
    >
        <TextComponent
        text={<h1>Perguntas Frequentes</h1>}
        style={{
            fontFamily: "Inter",
            fontSize: "56px",
            lineHeight: "72",
            fontWeight: 600,
            color: "#23272E",
        }}
        />
    </div>
    );
};

export default TextFaq;
