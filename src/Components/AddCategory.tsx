import { ChangeEvent, FC, FormEvent, useState } from 'react'

interface AddCategory {
    onAddCategory: Function;
}

export const AddCategory: FC<AddCategory> = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(inputValue.trim().length<=0) return;

        onAddCategory(inputValue)
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                className="mb-2 input-text"
                type="text"
                placeholder="Buscar Gif o Sticker"
                value={inputValue}
                onChange={onChangeInput}
            />
        </form>
    )
}
