

export function Button({color, backgroundColor, text, padding}) {
    const style = {
        color: color,
        backgroundColor: backgroundColor,
        padding: padding
    };
  
    return (
        <div>
            <button style={style}>{text}</button>
        </div>
    );
}