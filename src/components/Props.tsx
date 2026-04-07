import React from "react";

type props = {
    name: string;
}

const Props = ({ name }: props) => {
    return <h1>Hello {name}</h1>
}
export default Props;