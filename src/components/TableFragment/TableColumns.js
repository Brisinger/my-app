export function TableColumns(props) {
    return (
        <>
            <td className={props.className}>{props.user.id}</td>
            <td className={props.className}>{props.user.name}</td>
        </>
    );
}