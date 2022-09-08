import { ChangeEvent, FC, FormEvent, useState } from 'react'

interface AddCategory {
    // currentCategories: string[];
    onAddCategory: Function;
}

export const AddCategory: FC<AddCategory> = ({ /* currentCategories, */ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log(event)
        setInputValue(event.target.value)
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(inputValue.trim().length<=0) return;

        // console.log(event)
        // onAddCategory([...currentCategories, inputValue]);
        // onAddCategory((item: string[]) => [...item, inputValue])    // by callback
        onAddCategory(inputValue)
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                className="mb-2"
                type="text"
                placeholder="Buscar Gift"
                value={inputValue}
                onChange={onChangeInput}
            />
        </form>
    )
}
