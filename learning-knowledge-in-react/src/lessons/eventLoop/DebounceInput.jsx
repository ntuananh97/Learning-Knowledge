import React, { useRef, useState } from 'react'

const initialList = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a project" },
    { id: 3, text: "Deploy application" },
    { id: 4, text: "Share with friends" },
    { id: 5, text: "Get feedback" }
];

const DebounceInput = () => {

    const [value, setValue] = useState("");
    const [list, setList] = useState(initialList);
    const timerSearch = useRef()

    const handleChangeValue = (e) => {
        if (timerSearch.current) {
            clearTimeout(timerSearch.current);
        }
        setValue(e.target.value);
        // Debounce the input
        timerSearch.current = setTimeout(() => {
            const filteredList = initialList.filter((item) =>
                item.text.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setList(filteredList);
        }, 300);
    }

  return (
    <div>
        <input type="text" value={value} onChange={handleChangeValue} />
        <ul>
            {list.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    </div>
  )
}

export default DebounceInput