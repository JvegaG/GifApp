import { ChangeEvent, FC, useState } from "react";

export const enum OptionEnum {
    GIF = 0,
    STICKER = 1
}

interface optionProps {
    returnedOption: Function;
}

export const SelectOptionComponent: FC<optionProps> = ({ returnedOption }) => {

    const [selectCheck, setSelectCheck] = useState<OptionEnum>(OptionEnum.GIF);

    const handleChangeCheck = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === 'GiftUrl'){
            setDataOption(OptionEnum.GIF);
            return;
        }

        setDataOption(OptionEnum.STICKER);
    }

    const setDataOption = (option: OptionEnum) =>{
        setSelectCheck(option);
        returnedOption(option);
    }

    return (
        <>
            <div className="my-3">
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        id="gif"
                        aria-label="GifUrl"
                        name="GifUrl"
                        type="radio"
                        checked={selectCheck === OptionEnum.GIF}
                        onChange={handleChangeCheck} />
                    <label className="form-check-label" >Show Gif</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        id="sticker"
                        aria-label="StickerUrl"
                        name="StickerUrl"
                        type="radio"
                        checked={selectCheck === OptionEnum.STICKER}
                        onChange={handleChangeCheck} />
                    <label className="form-check-label" >Show Sticker</label>
                </div>

            </div>
        </>
    )
}
